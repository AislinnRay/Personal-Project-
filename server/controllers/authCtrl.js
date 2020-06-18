module.export = {
    register: async ( req, res ) => {
        const db = req.app.get('db')
        const {email, password, profile_pic} = req.body;

    },
    login: ( req, res ) => {

    },
    getUser: ( req, res ) => {

    },
    logout: ( req, res ) => {

    },
    updateUser: ( req, res ) => {

    },
}