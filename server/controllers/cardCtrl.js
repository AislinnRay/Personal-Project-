module.exports = {
    getPlants: ( req, res ) => {
        const db = req.app.get('db')
        //const { user_id } = req.session.user
        db.get_plants(1)
        .then((results) => res.status(200).send(results))
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
        const { common_name, scientific_name, note, plant_img, water_interval } = req.body
        const { user_id } = req.session.user
        console.log(user_id, "2")
        console.log(common_name, "1")
        db.add_plant(common_name, scientific_name, note, plant_img, water_interval, user_id)
        .then((post) => res.status(200).send(post))
        .catch((err) => res.status(500).send(err))
        //there may be in issue getting the plants to add to the correct user and show up
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
        const { common_name, scientific_name, note, plant_img, water_interval }= req.body
        db.edit_plant(common_name, scientific_name, note, plant_img, water_interval)
        .then(() => res.sendStatus(200))
        .catch((err) => res.status(500).send(err))
    },
}