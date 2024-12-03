const TaskService = {
  getAllTasks: () => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    return tasks;
  },

  saveTask: (task) => {
    const tasks = TaskService.getAllTasks();
    if (task.id) {
      const index = tasks.findIndex((t) => t.id === task.id);
      if (index !== -1) {
        tasks[index] = task;
      }
    } else {
      task.id = Date.now();
      tasks.push(task);
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
  },

  deleteTask: (id) => {
    const tasks = TaskService.getAllTasks().filter((task) => task.id !== id);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  },

  getTaskById: (id) => {
    return TaskService.getAllTasks().find((task) => task.id === id);
  },
};

export default TaskService;
