import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { TextField, Button, Typography, Box, CircularProgress, Alert } from '@mui/material';
import API from '../APIs/API';
import { updateEmployeeUrl, createEmployeeUrl } from '../APIs/ApiUrl';

const AddEditEmployee = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const [state, setState] = useState({});
    const location = useLocation();
    const { employee } = location.state;

    let params = useParams();


    useEffect(() => {
        setState(employee);
    }, [employee]);

    const handleChange = (e) => {
        let newState = { ...state };
        newState[`${e.target.id}`] = e.target.value;
        setState(newState);
        setError(null);
    };
    let validateForm = () => {
        for (let key in state) {
            if (state[key] === '') {
                return 1;
            }
        }
        return 0;
    }

    const handleUpdate = async () => {
        setLoading(true);
        setError(null);

        try {

            let endpoint = params.id !== "0" ? updateEmployeeUrl + state._id : createEmployeeUrl;
            let method = params.id !== "0" ? 'put' : 'post';
            if (validateForm()) {
                setError("Please fill all the fields");
                return;
            };

            const response = await API[method](endpoint, state, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.data.code === 200 || response.data.code === 201) {
                navigate('/');
            } else {
                setError(response.data.message);
            }
        } catch (err) {
            console.error('Error updating employees:', err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };
    const handleHome = () => {
        navigate('/');
    };


    return (
        <Box>
            <Box display="flex" alignItems="center" marginBottom={2}>
                <img src={state.image} alt="Employee" width="50" height="50" />
                <Typography variant="h5" marginLeft={2}>{state.fullName}</Typography>
            </Box>
            <TextField label="Name" id='fullName' value={state.fullName} onChange={handleChange} fullWidth margin="normal" />
            <TextField label="Email" id='email' value={state.email} onChange={handleChange} fullWidth margin="normal" />
            <TextField label="Phone" id='phone' value={state.phone} onChange={handleChange} fullWidth margin="normal" />
            <TextField label="Age" id='age' value={state.age} onChange={handleChange} fullWidth margin="normal" />
            <TextField label="Salary" id='salary' value={state.salary} onChange={handleChange} fullWidth margin="normal" />
            <TextField label="Image" id='image' value={state.image} onChange={handleChange} fullWidth margin="normal" />
            <Button onClick={handleHome} variant="contained" color="primary">
                Back
            </Button>
            <Button onClick={handleUpdate} variant="contained" color="primary">
                {params.id !== "0" ? "Update Employee" : "Add Employee"}
            </Button>
            {loading && <CircularProgress />}
            {error && <Alert severity="error">{error}</Alert>}
        </Box>
    );
};

export default AddEditEmployee;
