const express = require('express');
const dotenv = require('dotenv');
const mongoose= require('mongoose');
const {createUserRoutes}= require('../week-8/course');

createUserRoutes(app)

app.get("/courses",(req,res)=>{
    res.json({
        message: "courses endpoint"
    })
})
app.use('/user', userRouter);
app.use('/course',courseRouter);


app.listen(3000);

