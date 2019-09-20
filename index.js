var express=require('express');
var app=express();
var port=3000;
app.listen(port,()=>console.log(`App listen on port ${port}`));

app.get('/',(req,res)=>{
    res.send('Hello World');
})