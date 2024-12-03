import React from "react";
import { Checkbox, IconButton, Typography } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

const TaskItem = ({ task, onToggle, onDelete, onEdit }) => {
  return (
    <div
      style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
    >
      <Checkbox checked={task.completed} onChange={() => onToggle(task.id)} />
      <Typography
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          flexGrow: 1,
        }}
      >
        {task.title}
      </Typography>
      <IconButton onClick={() => onEdit(task)}>
        <Edit />
      </IconButton>
      <IconButton onClick={() => onDelete(task.id)}>
        <Delete />
      </IconButton>
    </div>
  );
};

export default TaskItem;
