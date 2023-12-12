import express, { Request, Response } from 'express';
import TaskRepository from '../user/infrastructure/TaskRepository';
import TaskService from '../application/use-cases/TaskService';
import Task from '../user/domain/entities/Task';

//quiero crear un servidor al que mandarle datos y recoger los que me devuelva 
const app = express()

app.use(express.json())
const taskRepository = new TaskRepository
const taskService = new TaskService(taskRepository)

let task : Task
app.post('/addTask/:title',(req: Request,res: Response)=>{
	taskService.add(req.params.title)
	res.send('New task created.')
})
app.put('/CompleteTask/:id',(req: Request,res: Response)=>{
	const id = parseInt(req.params.id)
	taskService.complete(id)
	res.send('Task have been updated as completed.')
})
app.delete('/delete/:id',(req, res)=>{
	const id = parseInt(req.params.id)
	taskService.delete(id)
	res.send('Task have been deleted.')
})
app.get('/ShowTaskList',(req,res)=>{
	res.send(taskService.getAll())
})



app.listen(4000,()=>{
	console.log('allrigth')
	
})