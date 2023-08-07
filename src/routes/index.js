const express = require("express");
const router = express.Router();
const Task = require("../models/task");

router.get("/", (req, res) => {
  Task.getAllTasks((err, tasks) => {
    if (err) throw err;
    res.render("index", { tasks });
  });
});

router.post("/add", (req, res) => {
  const title = req.body.title;
  Task.createTask(title, (err, result) => {
    if (err) throw err;
    res.redirect("/");
  });
});

router.post("/delete/:taskId", (req, res) => {
  const taskId = req.params.taskId;
  Task.deleteTask(taskId, (err, result) => {
    if (err) throw err;
    res.redirect("/");
  });
});

router.post("/complete/:taskId", (req, res) => {
  const taskId = req.params.taskId;
  Task.markTaskCompleted(taskId, (err, result) => {
    if (err) throw err;
    res.redirect("/");
  });
});

module.exports = router;
