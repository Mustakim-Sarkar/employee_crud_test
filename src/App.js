import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeeList from './employee/EmployeeList';
import AddEditEmployee from './employee/AddEditEmployee';
import ViewEmployee from './employee/ViewEmployee';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EmployeeList />} />
        <Route path="/add-edit/:id" element={<AddEditEmployee />} />
        <Route path="/view/:id" element={<ViewEmployee />} />
      </Routes>
    </Router>
  );
}

export default App;
