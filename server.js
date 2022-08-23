//Declare variables 
const express = require('express')
const app = express()
const PORT = 8500;
const mongoose = require('mongoose');
const connectDB = require('./config/database');
require('dotenv').config({path: './config/.env'})
//const TodoTask = require('./models/TodoTask')
const homeRoutes = require('./routes/home') 
const editRoutes = require('./routes/edit')

connectDB()

//Set middleware
app.set("view engine", "ejs")
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

//Set Routes
app.use('/', homeRoutes)
app.use('/edit', editRoutes )

//GET METHOD
// app.get('/', async (request, response) => {
//     try {
//         TodoTask.find({}, (err, tasks) => {
//             response.render('index.ejs', {todoTasks: tasks})
//         });
//     } catch (err) {
//         if (err) return response.status(500).send(err)
//     }
// })

//POST
// app.post('/', async (request, response)=> {
//     const todoTask = new TodoTask(
//         {
//             title: request.body.title,
//             content: request.body.content 
//         }
//     )
//     try {
//         await todoTask.save()
//         console.log(todoTask)
//         response.redirect('/')
//     } catch(err) {
//         if (err) return response.status(500).send(err)
//         response.redirect('/')
//     }   
// })

//EDIT or UPDATE METHOD
// app
//     .route("/edit/:id")
//     .get((request,response) => {
//         const id = request.params.id
//         TodoTask.find({}, (err,tasks) =>{
//             response.render('edit.ejs', {
//                 todoTasks:tasks, idTask: id })
//             })
//         })
//     .post((request,response) => {
//         const id = request.params.id
//         TodoTask.findByIdAndUpdate(
//             id,
//             {
//                 title: request.body.title,
//                 content: request.body.content
//             },
//             err => {
//                 if (err) return response.status(500).send(err)
//                 response.redirect('/')
//             }
//         )
//     })    

// //DELETE
// app
//     .route("/remove/:id")
//     .get((request,response)=>{
//         const id = request.params.id
//         TodoTask.findByIdAndDelete(id, err => {
//             if (err) return response.status(500).send(err)
//             response.redirect('/')
//         })
//     })    

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`) )