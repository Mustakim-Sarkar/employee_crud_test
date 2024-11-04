import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteEmployee } from './employeeSlice';
import { useNavigate } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';

const EmployeeList = () => {
  const employees = useSelector(state => state.employees.employees);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEdit = (employee) => {
    navigate(`/edit/${employee.id}`, { state: { employee } });
  };

  const handleDelete = (id) => {
    dispatch(deleteEmployee(id));
  };

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map(emp => (
            <TableRow key={emp.id}>
              <TableCell>{emp.name}</TableCell>
              <TableCell>{emp.role}</TableCell>
              <TableCell>
                <Button onClick={() => handleEdit(emp)} variant="contained">Edit</Button>
                <Button onClick={() => handleDelete(emp.id)} color="error" variant="contained">Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EmployeeList;
