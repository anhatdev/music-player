var express=require('express');

var app=express();
var port=3000;
app.listen(port,()=>console.log(`App listen on port ${port}`));

app.set('views','./views');
app.set('view engine','pug');

app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.render('index');
});

app.get('/list-song',(req,res)=>{
    res.render('list-song');
});

