import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Card, CardContent, Typography, Button } from "@mui/material";

const TaskDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const tasks = useSelector((state) => state.tasks.items);
  const task = tasks.find((t) => t.id === parseInt(id, 10));

  if (!task) {
    return (
      <Typography variant="h5" color="error">
        Task not found!
      </Typography>
    );
  }

  const handleBack = () => {
    navigate("/tasks");
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h4">{task.title}</Typography>
        <Typography variant="body1">{task.description}</Typography>
        <Typography variant="body2">Due Date: {task.dueDate}</Typography>
        <Typography variant="body2">
          Status: {task.completed ? "Completed" : "Pending"}
        </Typography>
        <Button onClick={handleBack} variant="contained" color="primary">
          Back to Tasks
        </Button>
      </CardContent>
    </Card>
  );
};

export default TaskDetails;
