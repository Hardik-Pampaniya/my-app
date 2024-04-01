// UserList.js
import React, { useState, useEffect } from 'react';
import { fetchEmployees } from './api';

function UserList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees((error, data) => {
      if (error) {
        console.error('There was a problem fetching the employees:', error);
      } else {
        setEmployees(data);
      }
    });
  }, []);

  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employees.map(employee => (
          <li key={employee.id}>
            {employee.firstname} {employee.lastname}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
