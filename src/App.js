import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard.js";
import TaskDetails from "./pages/TaskDetails.js";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/tasks" element={<Dashboard />} />
        <Route path="/tasks/:id" element={<TaskDetails />} />
        <Route path="*" element={<Navigate to="/tasks" />} />
      </Routes>
    </Router>
  );
};

export default App;
