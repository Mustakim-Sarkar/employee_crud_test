import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteEmployee, itializeEmployee } from './employeeSlice';
import { useNavigate } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';
import axios from 'axios';
import { listEmployee } from '../APIs/ApiUrl';


const EmployeeList = () => {

    const employees = useSelector(state => state.employees.employees);
    console.log("Employees:===>", employees)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleEdit = (employee) => {
        navigate(`/edit/${employee._id}`, { state: { employee } });
    };

    const handleDelete = (_id) => {
        dispatch(deleteEmployee(_id));
    };
    useEffect(async () => {
        try {
            console.log(listEmployee)
            let data = await axios.get(listEmployee);
            dispatch(itializeEmployee(data.data.data))
        } catch (error) {
            console.log(error)
        }
    }, [])

    return (
        <TableContainer>
            Employee List
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Image</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell>Age</TableCell>
                        <TableCell>Salary</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {employees.map(emp => (
                        <TableRow key={emp._id}>
                            <TableCell><img src={emp.image} height={50} width={50} alt='No Image'/></TableCell>
                            <TableCell>{emp.fullName}</TableCell>
                            <TableCell>{emp.email}</TableCell>
                            <TableCell>{emp.phone}</TableCell>
                            <TableCell>{emp.age}</TableCell>
                            <TableCell>{emp.salary}</TableCell>
                            <TableCell>
                                <Button onClick={() => handleEdit(emp)} variant="contained">Edit</Button>
                                <Button onClick={() => handleDelete(emp._id)} color="error" variant="contained">Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default EmployeeList;
