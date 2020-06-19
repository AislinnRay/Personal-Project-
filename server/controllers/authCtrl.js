const bcrypt = require('bcrypt');

module.exports = {
    register: async ( req, res ) => {
        const db = req.app.get('db')
        const {email, password, first_name, last_name, profile_pic} = req.body;
        //when destructuring spelling matters

        const existingUser = await db.check_user(email)

        if (existingUser[0]){
            return res.status(409).send('User already exists')
        }

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        const newUser = await db.register_user([email, hash])

        const newUserInfo = await db.register_user_info([first_name, last_name, profile_pic, newUser[0].user_id]) // this is where name can change but the order matters

        const newUserObj = {...newUser[0], ...newUserInfo[0]}

        delete newUserObj.password

        req.session.user = newUserObj // is the same as what is below
        // { 
        //     userId: newUserObj[0].user_id,
        //     email: newUserObj[0].email,
        //     firstName: newUserObj[0].first_name,
        //     lastName: newUserObj[0].last_name,
        //     profilePic: newUserObj[0].profile_pic,
        //     userId: newUserObj[0].user_id
        // }

        res.status(200).send(req.session.user)
    },
    login: async ( req, res ) => {
        const db = req.app.get('db')
        const { email, password } = req.body

        const user = await db.check_user(email)
        if ( !user[0]){
            return res.status(404).send('User does not exist')
        } else {
            const authenticated = bcrypt.compareSync(password, user[0].password)
            if (authenticated) {
                delete user[0].password
                req.session.user = user[0]
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
        //do I need to do anything else to save something in the session before destroying?
        req.session.destroy();
        res.sendStatus(200);

    },
    updateUser: async ( req, res ) => {
        const db = req.app.get('db')
        const {email, password, first_name, last_name, profile_pic} = req.body;

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        const updateUser = await db.update_user([email, hash])

        const updateUserInfo = await db.update_user_info([first_name, last_name, profile_pic, updateUser[0].user_id]) 

        const updateUserObj = {...updateUser[0], ...updateUserInfo[0]}

        delete updateUserObj.password

        req.session.user = updateUserObj
    }
}