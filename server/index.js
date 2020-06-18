require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;
const app = express();

//Controllers
const authCtrl = require('./controllers/authCtrl')
const cardCtrl = require('./controllers/cardCtrl')

//Top Level Middleware
app.use(express.json());
app.use(
    session({
        resave: false,
        saveUninitialized: true,
        cookie: { maxAge: 1000 * 60 * 60 * 24 * 7},
        secret: SESSION_SECRET,
    })
);

//Database Connection
massive({
    connectionString: CONNECTION_STRING,
    ssl: { rejectUnauthorized: false }
})
    .then((db) => {
        app.set("db", db)
        console.log("Database connected")
        app.listen(SERVER_PORT, () => console.log(`Server listening on ${SERVER_PORT}`))
    })
    .catch((err) => console.log(err))

//Endpoints
//Other Endpoints
app.get(`/api/plants`, cardCtrl.getPlants)
app.get(`/api/plants/:id`, cardCtrl.getPlant)
app.post(`/api/plants`, cardCtrl.addPlant)
app.delete(`/api/plants/:id`, cardCtrl.deletePlant)
app.put(`/api/plants/:id`, cardCtrl.editPlant)

//Auth Endpoints
app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.get('/auth/user', authCtrl.getUser)
app.delete('/auth/logout', authCtrl.logout)
app.put('/auth/user', authCtrl.updateUser)