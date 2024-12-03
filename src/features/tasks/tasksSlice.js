import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [], // Array of tasks
  filter: "all", // all | completed | pending | overdue
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask(state, action) {
      state.tasks.push(action.payload);
    },
    editTask(state, action) {
      const { id, updates } = action.payload;
      const task = state.tasks.find((task) => task.id === id);
      if (task) {
        Object.assign(task, updates);
      }
    },
    deleteTask(state, action) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    toggleCompleted(state, action) {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addTask, editTask, deleteTask, toggleCompleted, setFilter } =
  tasksSlice.actions;

export const selectFilteredTasks = (state) => {
  const { tasks, filter } = state.tasks;
  const now = new Date();
  switch (filter) {
    case "completed":
      return tasks.filter((task) => task.completed);
    case "pending":
      return tasks.filter((task) => !task.completed);
    case "overdue":
      return tasks.filter(
        (task) => new Date(task.dueDate) < now && !task.completed
      );
    default:
      return tasks;
  }
};

export default tasksSlice.reducer;
