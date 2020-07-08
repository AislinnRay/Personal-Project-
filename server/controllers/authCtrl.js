const bcrypt = require('bcrypt');
const {sendEmail} = require('../utils/registerEmailUtil')

module.exports = {
    register: async ( req, res ) => {
        const db = req.app.get('db')
        const {email, password, phone, first_name, last_name, profile_pic} = req.body;
        const existingUser = await db.check_user(email)
        if (existingUser[0]){
            return res.status(409).send('User already exists')
        }
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        const newUser = await db.register_user([email, hash])
        const newUserInfo = await db.register_user_info([first_name, last_name, profile_pic, newUser[0].user_id])
        
        const newUserObj = {...newUser[0], ...newUserInfo[0]}

        delete newUserObj.password
        
        req.session.user = newUserObj 
        // is the same as what is below
        // { 
        //     userId: newUserObj[0].user_id,
        //     email: newUserObj[0].email,
        //     firstName: newUserObj[0].first_name,
        //     lastName: newUserObj[0].last_name,
        //     profilePic: newUserObj[0].profile_pic,
        //     userId: newUserObj[0].user_id
        // }

        res.status(200).send(req.session.user)
        sendEmail(req)
    },
    login: async ( req, res ) => {
        const db = req.app.get('db')
        const { email, password } = req.body

        const user = await db.check_user(email)
        if ( !user[0]){
            return res.status(404).send('User does not exist')
        } else {
            //const userInfoTable = await db.check_user_info([user[0].user_id])
            //console.log(user.user_id, "5")
            //console.log(userInfoTable, "4")
            //const tableObj = {...user[0], ...userInfoTable[0]}
            //delete tableObj.password

            delete user.password

            const authenticated = bcrypt.compareSync(password, user[0].password)
            if (authenticated) {
                req.session.user = user
                res.status(200).send(req.session.user)
            } else {
                res.status(403).send('Username or password incorrect')
            }
        }
    },
    getUser: ( req, res ) => {
        if (req.session.user) {
            res.status(200).send(req.session.user)
        } else {
            res.sendStatus(404)
        }
    },
    logout: ( req, res ) => {
        req.session.destroy();
        res.sendStatus(200);

    },
    updateUser: async ( req, res ) => {
        const db = req.app.get('db')
        const {email, password, phone, first_name, last_name, profile_pic} = req.body;
        //console.log(req.session.user, "1")
        //console.log(req.session, "2")
        const {user_id} = req.session.user 
        const user = await db.check_user_id(user_id)
        
        if (password) {
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        const updateUser = await db.update_user([user_id, email, hash, phone])
        const updateUserInfo = await db.update_user_info([updateUser[0].user_id, first_name, last_name, profile_pic])
        const updateUserObj = {...updateUser[0], ...updateUserInfo[0]}
        delete updateUserObj.password
        req.session.user = updateUserObj
        res.status(200).send(req.session.user) 
        } else {
            //console.log(user_id, "test")
            //console.log(user, "user")
            const updateUser = await db.update_user([user_id, email, user[0].password, phone])
            //console.log(updateUser)
            const updateUserInfo = await db.update_user_info([user_id, first_name, last_name, profile_pic])
            //console.log(updateUserInfo)
            const updateUserObj = {...updateUser[0], ...updateUserInfo[0]}
            //console.log(updateUserObj)
            delete updateUserObj.password
            req.session.user = updateUserObj
            res.status(200).send(req.session.user)
        }
    }
}