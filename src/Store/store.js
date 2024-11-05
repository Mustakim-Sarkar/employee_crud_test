import { configureStore } from '@reduxjs/toolkit';
import employeesReducer from '../employee/employeeSlice';

const store = configureStore({
  reducer: {
    employees: employeesReducer,
  },
});

export default store;
