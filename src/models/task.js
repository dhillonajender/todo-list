const db = require("../../config/database");

const Task = {
  getAllTasks: (callback) => {
    db.query("SELECT * FROM tasks", callback);
  },

  createTask: (title, callback) => {
    db.query(
      "INSERT INTO tasks (title, completed) VALUES (?, false)",
      [title],
      callback
    );
  },

  deleteTask: (taskId, callback) => {
    db.query("DELETE FROM tasks WHERE id = ?", [taskId], callback);
  },

  markTaskCompleted: (taskId, callback) => {
    db.query(
      "UPDATE tasks SET completed = true WHERE id = ?",
      [taskId],
      callback
    );
  },
};

module.exports = Task;
