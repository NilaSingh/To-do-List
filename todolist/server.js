var express = require('express');
var app = express()
app.set('view engine','ejs')
let tasks=[]
app.get('/',(req,res)=>{
    res.render('index',{tasks})
//      res.render('index')
  })
app.get('/newtask',(req,res)=>{
    res.render('Form')
})
app.use(express.urlencoded({
    extended:true
}))
app.post('/',(req,res)=>{
    let record={title:req.body.title,due:req.body.due, description:req.body.description}
    tasks.push(record)
    console.log(tasks)
    res.redirect('/')
})

app.listen(3000, function () {
  console.log('Running on port 3000!')
});

