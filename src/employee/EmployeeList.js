import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteEmployee, itializeEmployee } from './employeeSlice';
import { useNavigate } from 'react-router-dom';
import { deleteEmployeeUrl, listEmployeeUrl } from '../APIs/ApiUrl';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, CircularProgress, Alert } from '@mui/material';
import API from '../APIs/API';

const EmployeeList = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const employees = useSelector(state => state.employees.employees);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleEdit = (employee) => {
        navigate(`/add-edit/${employee._id}`, { state: { employee } });
    };

    const handleView = (employee) => {
        navigate(`/view/${employee._id}`, { state: { employee } });
    };

    const handleDelete = async (_id) => {

        setLoading(true);
        setError(null);
        try {
            const response = await API.delete(deleteEmployeeUrl + _id);
            if (response.data.code === 200)
                dispatch(deleteEmployee(_id));
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await API.get(listEmployeeUrl);
                if (response.data.code === 200)
                    dispatch(itializeEmployee(response.data.data));
            } catch (err) {
                console.error('Error fetching employee:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [dispatch]);
    const handleAddEmployeeClick = () => {
        navigate(`/add-edit/0`, { state: { employee: { fullName: '', email: '', phone: '', age: '', salary: '', image: '' } } });
    }

    return (
        <TableContainer>
            <h2>Employee List</h2>

            {loading && <CircularProgress />}
            {error && <Alert severity="error">{error}</Alert>}
            <Button onClick={handleAddEmployeeClick} variant="contained">Add Employee</Button>

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
                    {employees.length > 0 ? (
                        employees.map(emp => (
                            <TableRow key={emp._id}>
                                <TableCell><img src={emp.image} height={50} width={50} alt='' /></TableCell>
                                <TableCell>{emp.fullName}</TableCell>
                                <TableCell>{emp.email}</TableCell>
                                <TableCell>{emp.phone}</TableCell>
                                <TableCell>{emp.age}</TableCell>
                                <TableCell>{emp.salary}</TableCell>
                                <TableCell>
                                    <Button onClick={() => handleView(emp)} variant="contained">View</Button>
                                    <Button onClick={() => handleEdit(emp)} variant="contained">Edit</Button>
                                    <Button onClick={() => handleDelete(emp._id)} color="error" variant="contained">Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        !loading && <TableRow><TableCell colSpan={7}>No employees found.</TableCell></TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default EmployeeList;
