const express= require("express");
const Router = express.Router;

const {Router}= require('express');


app.use("api/v1/user", userRouter);
app.use("/api/course", courseRouter);

createUserRoutes(app);
createCourseRoutes(app);pd