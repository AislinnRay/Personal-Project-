const heartbeats = require("heartbeats")

module.exports = {
    getPlants: ( req, res ) => {
        const db = req.app.get('db')
        const { user_id } = req.session.user
        console.log(user_id)
        db.get_plants(user_id)
        .then((result) => res.status(200).send(result))
        .catch((err) => res.status(500).send(err))
    },
    getPlant: ( req, res ) => {
        const db = req.app.get('db')
        const { plant_id } = req.params
        db.get_plant(plant_id)
        .then((result) => res.status(200).send(result[0]))
        .catch((err) => res.status(500).send(err))
    },
    addPlant: ( req, res ) => {
        const db = req.app.get('db')
        const { common_name, scientific_name, note, plant_img, water_interval, created_at } = req.body
        const { user_id } = req.session.user
        db.add_plant(common_name, scientific_name, note, plant_img, water_interval, created_at, user_id)
        .then((result) => res.status(200).send(result))
        .catch((err) => res.status(500).send(err))
        //Count
        const heart = heartbeats.createHeart(1000 * 5)
        heart.createEvent(1, async (count, last) => {console.log(count)
            })
        //Count
    },
    deletePlant: ( req, res ) => {
        const db = req.app.get('db')
        const {plant_id} = req.params
        db.delete_plant(plant_id)
        .then(() => res.sendStatus(200))
        .catch((err) => res.status(500).send(err))
    },
    editPlant: ( req, res ) => {
        const db = req.app.get('db')
        const { plant_id } = req.params
        const { common_name, scientific_name, note, plant_img, water_interval, created_at }= req.body
        console.log(req.body)
        db.edit_plant(plant_id, common_name, scientific_name, note, plant_img, water_interval, created_at)
        .then((result) => {
            console.log(result)
            res.sendStatus(200)
        })
        .catch((err) => res.status(500).send(err))
    },
}