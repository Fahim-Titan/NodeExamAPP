const express = require('express');
const router = express.Router();

router.get('', (req, res)=>{
    res.send(`sending you all the class details names`);
});

router.get('/:id', (req, res) =>{
    res.send(`sending you specific class details for id = ${req.params.id}`);
});

router.post('/', (req, res) =>{
    res.send(`Creating Class and Sending you the info`);
});

router.put('/:id', (req, res) => {
    res.send(`Value Updated for the specified class with id = ${req.params.id}`);
});

router.delete('/:id', (req, res) =>{
    res.send(`class Deleted`);
});
module.exports = router;