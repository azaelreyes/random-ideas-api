const express = require('express');
const port = 5500;

const app =  express();

//Body Parser middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/', (req,res)=>{
    res.send({messsege: 'Welcome to the RandomIdeas API'});
});
const ideasRouter = require('./routes/ideas');
app.use('/api/ideas',ideasRouter);
app.listen(port, ()=>console.log(`Server listening on port ${port}`));