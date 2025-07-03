
// const fs = require('fs');
// const {command} = require("commander");
// const express=  require('express')
// const app = express()
// app.get('/', function (req, res){
//     res.send('Hello World')
// })

// app.listen(3000);

// const fs = require('fs');
// fs.readFile("a.txt","utf-8", function(err, data){
//     console.log(data);
// // })
// const express = require('express')
// const app = express();
// app.get('/',function(err,data){
//     res.send('hello world');
// })

//http server
const express = require("express");
const app = express();

function sum (n){
    let ans =0;
    for(let i=1;i<=n;i++){
        ans =ans+ i;
    }

}
 app.get("/", function(req, res){
    res.send("hi there");
 })
 app.listen(3000);
