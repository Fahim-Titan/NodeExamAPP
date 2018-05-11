const express = require('express');
const router = express.Router();

router.get('', (req, res)=>{
    res.send(`sending you all the exam names`);
});

router.post('/', (req, res) =>{
    res.send(`Creating exam and Sending you the info`);
});

router.get('/:id', (req, res) =>{
    res.send(`sending you specific exam details for id = ${req.params.id}`);
});

router.put('/:id', (req, res) => {
    res.send(`Value Updated for the specified exam with id = ${req.params.id}`);
});

router.delete('/:id', (req, res) =>{
    res.send(`exam Deleted`);
});


router.get('/:id/:userId/start', (req,res) => {
    res.send(`sending you details about the exam to start the exam no: ${req.params.id} for User : ${req.params.userId}`);
});

router.post('/:id/:userId/end', (req, res) => {
    res.send(`thanks for the examination`);
});

router.get('/:id/:userId/results', (req, res) => {
    res.send(`sending you the detailed result for you examination`);
})


module.exports = router;