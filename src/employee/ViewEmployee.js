

import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Typography, Box } from '@mui/material';

const EditEmployee = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { employee } = location.state;

    const handleHome = () => {
        navigate('/');
    };

    return (
        <Box>
            <Box display="flex" alignItems="center" marginBottom={2}>
                <img src={employee.image} alt="Employee" width="50" height="50" />
                <Typography variant="h5" marginLeft={2}>{employee.fullName}</Typography>
            </Box>
            
            <Typography variant="h5" marginLeft={2}>Email: {employee.email}</Typography>
            <Typography variant="h5" marginLeft={2}>Phone: {employee.phone}</Typography>
            <Typography variant="h5" marginLeft={2}>Age: {employee.age}</Typography>
            <Typography variant="h5" marginLeft={2}>Salary: {employee.salary}</Typography>
            <Button onClick={handleHome} variant="contained" color="primary">
                Back
            </Button>
        </Box>
    );
};

export default EditEmployee;
