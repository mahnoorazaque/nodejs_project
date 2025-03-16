class TaskModel {
    constructor() {
      this.tasks = [];
      this.currentId = 1;
    }
  
    getAllTasks() {
      return this.tasks;
    }
  
    postTask(title) {
      return this.addTask(title);
    }
  
    addTask(title) {
      const newTask = { id: this.currentId++, title };
      this.tasks.push(newTask);
      return newTask;
    }
  
    deleteTask(id) {
      const index = this.tasks.findIndex((task) => task.id === parseInt(id));
      if (index === -1) return null;
  
      return this.tasks.splice(index, 1)[0];
    }
  }
  
  module.exports = new TaskModel();
  