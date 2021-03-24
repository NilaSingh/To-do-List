const { render } = require('ejs');
const { response } = require('express');
var express = require('express');
var app = express()
const path = require('path');

app.set('views', path.join(__dirname, 'views'));

app.set('view engine','ejs')
let tasks=[]
let id=0
app.use(express.urlencoded({
    extended:true
}))

//render all tasks onto page '/'
app.get('/',(req,res)=>{
    res.render('index',{tasks})
  })

//create new task by rendering form to fill out
app.get('/newtask',(req,res)=>{
    res.render('Form')
})

//get view page to see task details
app.get('/view/:id',(req,res)=>{
    let idx=req.params.id
    for(let i=0; i<tasks.length; i++){
        if(idx==tasks[i].id){
            let t=tasks[i]
            res.render('View',{t})
        }
    }
 })


//delete task
app.get('/:id',(req,res)=>{
    let idx=req.params.id
    for(let i=0; i<tasks.length; i++){
        if(idx==tasks[i].id){
            tasks.splice(i,1)
        }
    }
    res.render('index',{tasks})
})

//populating task array with data obtained from form and uses the get('/') function to render the complete list
app.post('/',(req,res)=>{
    let record={id:id, title:req.body.title,due:req.body.due, description:req.body.description, completed:false}
    tasks.push(record)
    id++
    //console.log(tasks)
    res.redirect('/')
})

//listening on port to make sure it is working
app.listen(3000, function () {
  console.log('Running on port 3000!')
});

