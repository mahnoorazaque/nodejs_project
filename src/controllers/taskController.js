const TaskModel = require("../models/taskModel");

exports.getTasks = (req, res) => {
  res.json(TaskModel.getAllTasks());
};

exports.addTask = (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ error: "Title is required" });
  }
  const newTask = TaskModel.addTask(title);
  res.status(201).json(newTask);
};

exports.deleteTask = (req, res) => {
  const { id } = req.params;
  const deletedTask = TaskModel.deleteTask(id);
  if (!deletedTask) {
    return res.status(404).json({ error: "Task not found" });
  }
  res.status(200).json({ message: "Task deleted", deletedTask });
};
