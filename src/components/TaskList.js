import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleCompleted,
  deleteTask,
  selectFilteredTasks,
} from "../features/tasks/tasksSlice";
import TaskItem from "./TaskItem";

const TaskList = ({ onEdit }) => {
  const tasks = useSelector(selectFilteredTasks);
  const dispatch = useDispatch();

  const handleToggle = (id) => dispatch(toggleCompleted(id));
  const handleDelete = (id) => dispatch(deleteTask(id));

  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={handleToggle}
          onDelete={handleDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default TaskList;
