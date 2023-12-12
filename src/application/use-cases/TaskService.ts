import IPort from "../../user/domain/IPort"
import Task from "../../user/domain/entities/Task"

export default class TaskService { 
    private taskRepository 
    constructor (persistence : IPort){
        this.taskRepository = persistence
    }

    add(title : string){
        const task = new Task(title)
        this.taskRepository.add(task)
    }
    delete(id : number){
        this.taskRepository.delete(id)
        
    }
    getAll(): Task []{
        return this.taskRepository.getAll()
    }
    complete(id: number){
        const task = this.taskRepository.getById(id)
        if(task){
            task.status = true 
            this.taskRepository.update(task)
        }
    }

}
