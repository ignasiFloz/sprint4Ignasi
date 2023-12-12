import IPort from "../domain/IPort";
import Task from "../domain/entities/Task";

export default class TaskRepository implements IPort{
    getById(id: number): Task |undefined {
        return TaskRepository.taskList.filter(t=>t.getId() == id)[0]
    }
    private static taskList: Task[] = [] 
    add(task: Task): void {
        TaskRepository.taskList.push(task)
    }
    delete(id: number): void {
        TaskRepository.taskList = TaskRepository.taskList.filter(t => t.getId() != id)
    }
    getAll(): Task[] {
        return TaskRepository.taskList.map(t=>t)
    }
    update(task: Task): void {
        TaskRepository.taskList = TaskRepository.taskList.map((t)=>{
            if(t.getId() == task.getId()){
                return task
            }
            return t
        })
    }
}
