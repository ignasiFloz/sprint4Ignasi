import  Task  from "./entities/Task";

export default interface IPort {
	add(task : Task): void
	delete(id : number): void
	getAll() : Task[]
	update(task: Task): void
	getById(id: number): Task |undefined
}
