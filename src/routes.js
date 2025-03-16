const express = require("express");
const router = express.Router();
const taskController = require("./controllers/taskController"); // Ensure correct path

router.get("/", (req, res) => {
    res.send("Welcome to the Task API!");
  }); 
  
// Define routes
router.get("/tasks", taskController.getTasks);
router.post("/tasks", taskController.addTask);
router.delete("/tasks/:id", taskController.deleteTask);

module.exports = router;
