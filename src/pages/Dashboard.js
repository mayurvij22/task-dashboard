import React, { useState } from "react";
import TaskForm from "../components/TaskFrom.js";
import TaskList from "../components/TaskList.js";
import TaskFilters from "../components/TaskFilters.js";
import { useDispatch } from "react-redux";
import { addTask, editTask } from "../features/tasks/tasksSlice.js";
import { Container, Button, Box, Typography } from "@mui/material";

const Dashboard = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const dispatch = useDispatch();

  const handleSave = (task) => {
    if (task.id) {
      dispatch(editTask({ id: task.id, updates: task }));
    } else {
      dispatch(addTask({ ...task, id: Date.now(), completed: false }));
    }
    setEditingTask(null);
    setIsFormOpen(false); // Close the form after saving
  };

  return (
    <Container maxWidth="lg" sx={{ padding: "20px" }}>
      <Box display="flex" flexDirection="column" gap={3}>
        <TaskFilters />

        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Task Management Dashboard
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setEditingTask(null);
              setIsFormOpen(true);
            }}
          >
            Add Task
          </Button>
        </Box>

        <TaskList
          onEdit={(task) => {
            setEditingTask(task);
            setIsFormOpen(true);
          }}
        />

        {isFormOpen && (
          <TaskForm
            open={isFormOpen}
            onClose={() => setIsFormOpen(false)}
            onSave={handleSave}
            task={editingTask}
          />
        )}
      </Box>
    </Container>
  );
};

export default Dashboard;
