const TodoTask = require('../models/todotask')

module.exports = {
    getIndex : async (request, response) => {
        try {
            const tasks = await
            TodoTask.find()
            response.render('index.ejs', {todoTasks: tasks}) 
        } catch (err) {
            if (err) return response.status(500).send(err)
        }
    } ,
    createTask: async (request, response)=> {
        const todoTask = new TodoTask(
            {
                title: request.body.title,
                content: request.body.content 
            }
        )
        try {
            await todoTask.save()
            console.log(todoTask)
            response.redirect('/')
        } catch(err) {
            if (err) return response.status(500).send(err)
            response.redirect('/')
        }   
    }
}
