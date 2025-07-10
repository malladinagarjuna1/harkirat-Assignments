function createUserRoutes(app){
    
app.post("/user/signup", (req, res)=>{
   res.json({
    message: "signup endpoint",
   })
})

app.post("users/signin", (req, res)=>{
    res.json({
        message: "signup endpoint"
    })
})

app.post("/user/signin", (req, res)=>{
    res.json({
        message: "signin endpoint"
    })
})
}

module.exports={
    createUserRoutes: createUserRoutes
}