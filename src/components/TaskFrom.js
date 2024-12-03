import React, { useState } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

const TaskForm = ({ open, onClose, onSave, task }) => {
  const [formData, setFormData] = useState(
    task || { title: "", description: "", dueDate: "" }
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSave(formData);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{task ? "Edit Task" : "Add Task"}</DialogTitle>
      <DialogContent>
        <TextField
          label="Title"
          name="title"
          fullWidth
          value={formData.title}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          label="Description"
          name="description"
          fullWidth
          multiline
          value={formData.description}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          label="Due Date"
          name="dueDate"
          type="date"
          fullWidth
          value={formData.dueDate}
          onChange={handleChange}
          InputLabelProps={{ shrink: true }}
          margin="normal"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit} variant="contained">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default TaskForm;
