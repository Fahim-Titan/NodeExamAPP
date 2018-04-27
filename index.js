const user = require('./user');
const course = require('./course');
const exam = require('./exam');
const classes = require('./class');
const express = require('express');
const app = express();

app.use(express.json());



// route users to different modules based on URL
app.get('/', (req, res)=>{
    res.send("Hearing You! perfectly");  
});

app.use('/user', user);
app.use('/course', course);
app.use('/exam', exam);
app.use('/class', classes);
const port = process.env.PORT || 3000;
app.listen(port, ()=>
{
    console.log(`Server Started on port => ${port}`);
    
});