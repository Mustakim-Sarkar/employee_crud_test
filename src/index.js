import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './Store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>

);
/**
 * delete https://interviewtesting.onrender.com/v1/users/employee-remove/66f26341aa89fa4a244b2204
 * list https://interviewtesting.onrender.com/v1/users/employee/list
 * update https://interviewtesting.onrender.com/v1/users/employee-update/66f26341aa89fa4a244b2204
 * {
    "fullName": "souvikhh",
    "email": "sk@gmailh.com",
    "phone": "+913343h4343",
    "image": "htthyyy",
    "age": "240",
    "salary": 120008
    }
    view https://interviewtesting.onrender.com/v1/users/employee/66f26341aa89fa4a244b2204
    create https://interviewtesting.onrender.com/v1/users/employee/create
    {
    "fullName": "souvik",
    "email": "sk@gmail.com",
    "phone": "+9133434343",
    "image": "htth",
    "age": "24",
    "salary": 12000
    }

    list===>
  {
      "code": 200,
      "message": "user list",
      "isSuccess": true,
      "data": [
        {
          "image": "https://res.cloudinary.com/dlytzaibn/image/upload/v1729745058/adnqjexf9jdhkgrcqam7.png",
          "age": "26",
          "salary": 222222,
          "_id": "6719d0a3240865007dc1c326",
          "fullName": "John kar",
          "email": "john@yopmail.com",
          "phone": "3674655656",
          "createdAt": "2024-10-24T04:44:19.849Z",
          "updatedAt": "2024-10-24T13:03:18.523Z"
        }		
      ]
  }
 */
