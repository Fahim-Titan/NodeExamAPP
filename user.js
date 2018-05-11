const {User, validate } = require('./models/user');

const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();




router.get('/', async (req,res)=> {
    const users = await User.find();
    res.status(200).send(users);
});

router.post('/register', async (req, res) => {
    const {error} = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    let user = new User ({
        FullName: req.body.FullName,
        Email: req.body.Email,
        Address: req.body.Address,
        Contact: req.body.Contact,
        UserName: req.body.UserName,
        Password: req.body.Password,
        Roles: [req.body.Roles],
        CourseTaken: [req.body.CourseTaken]
    });
    user = await user.save();

    res.send(user);
});


router.put('/:id',async (req, res)=> {
    const {error} = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const user = await
        User.findByIdAndUpdate(req.params.id, {
            FullName: req.body.FullName,
            Email: req.body.Email,
            Address: req.body.Address,
            Contact: req.body.Contact,
            UserName: req.body.UserName,
            Password: req.body.Password,
            Roles: [req.body.Roles],
            CourseTaken: [req.body.CourseTaken]
        },
        {new: true});
    
    if(!user) return res.status(404).send(error.details[0].message);
    
    res.send(user);
});

router.delete('/:id',async (req,res) =>{
    const user = await User.findByIdAndRemove(req.params.id)

    if (!user) return res.status(404).send('the user not found');

    res.send(user);
});

router.get('/login', async (req, res) => {
    const user = await User.findOne(c=> c.UserName == req.body.UserName && c.Password == req.body.Password);

    if(!user) return res.status(404).send('User Not Found');

    return res.send(user);
});


router.get('/:username', async (req, res) => {
    const user = await User.findOne(c => c.UserName == req.params.username);
    
    if(!user) return res.status(404).send('User Not Found');

    return res.send(user);
});


module.exports = router;