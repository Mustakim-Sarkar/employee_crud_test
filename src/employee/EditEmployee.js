import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateEmployee } from './employeeSlice';
import { TextField, Button, Typography, Box } from '@mui/material';

const EditEmployee = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const { employee } = location.state;

    const [name, setName] = useState(employee.name);
    const [role, setRole] = useState(employee.role);

    const handleUpdate = () => {
        dispatch(updateEmployee({ ...employee, name, role }));
        navigate('/');
    };

    return (
        <Box>
            <Box display="flex" alignItems="center" marginBottom={2}>
                <img src={employee.image} alt="Employee" width="50" height="50" />
                <Typography variant="h5" marginLeft={2}>{name}</Typography>
            </Box>
            <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth margin="normal" />
            <TextField label="Role" value={role} onChange={(e) => setRole(e.target.value)} fullWidth margin="normal" />
            <Button onClick={handleUpdate} variant="contained" color="primary">
                Update
            </Button>
        </Box>
    );
};

export default EditEmployee;
