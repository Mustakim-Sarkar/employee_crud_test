import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  employees: [
    { id: 1, name: 'John Doe', role: 'Developer', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Jane Smith', role: 'Designer', image: 'https://via.placeholder.com/150' },
  ],
};

const employeeSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    updateEmployee: (state, action) => {
      const index = state.employees.findIndex(emp => emp.id === action.payload.id);
      if (index !== -1) {
        state.employees[index] = action.payload;
      }
    },
    deleteEmployee: (state, action) => {
      state.employees = state.employees.filter(emp => emp._id !== action.payload);
    },
    itializeEmployee: (state, action) => {
      state.employees = action.payload;
    }
  },
});

export const { updateEmployee, deleteEmployee,itializeEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
