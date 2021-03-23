const { render } = require('ejs');
var express = require('express');
var app = express()
app.set('view engine','ejs')
let tasks=[]
let id=0


app.get('/',(req,res)=>{
    res.render('index',{tasks})
  })
app.get('/newtask',(req,res)=>{
    res.render('Form')
})
app.use(express.urlencoded({
    extended:true
}))

app.post('/',(req,res)=>{
    let record={id:id, title:req.body.title,due:req.body.due, description:req.body.description}
    tasks.push(record)
    id++
    //console.log(tasks)
    res.redirect('/')
})
app.get('/:id',(req,res)=>{
    res.render('View')
})

app.listen(3000, function () {
  console.log('Running on port 3000!')
});

