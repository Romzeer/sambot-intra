export class Task {

  public id: number;
  public name: string;
  public content: string;
  public priority: string;
  public number: number;
  public date: Date;
  public status: string;

  constructor(task: any = [])
  {
    this.id = task.id || 0;
    this.name = task.name || '';
    this.content = task.content|| '';
    this.priority = task.priority || '';
    this.number = task.number || 0;
    this.date = new Date();
    this.status = task.status || '';
  }
}
