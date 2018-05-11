const express = require('express');
const router = express.Router();

router.get('', (req, res)=>{
    res.send(`sending you all the course names`);
});

router.get('/:id', (req, res) =>{
    res.send(`sending you specific course details for id = ${req.params.id}`);
});

router.post('/', (req, res) =>{
    res.send(`Creating Course and Sending you the info`);
})

router.put('/:id', (req, res) => {
    res.send(`Value Updated for the specified course with id = ${req.params.id}`);
})

router.delete('/:id', (req, res) =>{
    res.send(`Course Deleted`);
})
module.exports = router;