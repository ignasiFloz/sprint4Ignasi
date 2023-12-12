export default class Task {
	title: string;
	private id: number;
	status: boolean;
	private static count = 0;
	constructor(title: string) {
		this.title = title 
		this.id = Task.count
		this.status = false
		Task.count++
	}
	getId():number {
		return this.id
	}
}
