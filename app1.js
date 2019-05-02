const express = require('express');
const mongoose = require('mongoose');
const app =express();

const connectDb = require("./database.js")

const schema=require("./schema.js")

const Blog = mongoose.model('Blog', schema);
const blog = new Blog({title:"democracy day",author:"Ram",body:"32"});
    blog.save(function (err,saveblog){
    if (err) response.send({error:err.message});
        console.log(saveblog);
    })

 app.get('/blogs',function(request, response){
    Blog.find(function (err, listedBlog) {
        if (err) response.send({error:err.message});
        response.send(listedBlog);
      })
})
app.post('/blogs',function(request,response){
    const blog=request.body;
    Blog.create(data,(err,createData)=>{
        if(err) response.send({error:err.message})
        response.send(createData)
    })
    response.send('created user')
})


connectDb
.on('error', function (err) { console.log(err) })
.on('connected', function () {
    app.listen(3000,function(){
        console.log('running at port 3000')
    } )
})
.on('disconnected', () => connectDb)