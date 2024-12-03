import React from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../features/tasks/tasksSlice";
import { ButtonGroup, Button } from "@mui/material";

const TaskFilters = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (filter) => dispatch(setFilter(filter));

  return (
    <ButtonGroup variant="contained">
      <Button onClick={() => handleFilterChange("all")}>All</Button>
      <Button onClick={() => handleFilterChange("completed")}>Completed</Button>
      <Button onClick={() => handleFilterChange("pending")}>Pending</Button>
      <Button onClick={() => handleFilterChange("overdue")}>Overdue</Button>
    </ButtonGroup>
  );
};

export default TaskFilters;
