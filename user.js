const express = require('express');
const router = express.Router();
const mongoose = require('./db');

const Model = require('./models');
// const userModel = new Model.Users();




router.get('/:id', (req, res) => {
    var userId = req.params.id;
    getUserDetails(userId).then((details) => {
        console.log(details.Email);
        res.send(`user details for id ${req.params.id} => ${details}`);
    }).catch((err) => console.log(err));

    
});

router.post('/:id', (req, res) => {
    res.send(`User Data Updated`);
});

router.delete('/:id', (req, res) => {
    res.send(`User Deleted`);
});

router.post('/login', (req, res) => {
    res.send(req.body.UserName);
});

router.post('/register', (req, res) => {



    res.send('thanks for registering');
});

async function getUserDetails(id) {
    const userDetails = await Model.find();
    console.log(userDetails + "asdfasf gafsg");
    return userDetails;
}




module.exports = router;