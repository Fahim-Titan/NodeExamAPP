const express = require('express');
const router = express.Router();

router.get('/:id', (req, res)=>{
    res.send(`user details for id ${req.params.id}`)
});

router.post('/:id', (req, res) => {
    res.send(`User Data Updated`);
});

router.delete('/:id', (req, res) =>{
    res.send(`User Deleted`);
});

router.post('/login', (req,res)=>{
    res.send(req.body.UserName);
});

router.post('/register', (req, res) => {
    res.send('thanks for registering');
});
module.exports = router;