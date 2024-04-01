// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddUser from './addUser';
import UserList from './userList';


function App() {
  return (
    <Router>    
        <Routes>
        <Route path="/" exact element={<HomePage/>} />
        <Route path="/add" element = {<AddUser/>} />
        <Route path="/list" element={<UserList/>} />
      </Routes>
    </Router>
  );
}

const  HomePage = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to the home page!</p>
      <nav>
          <ul>
            <li>
              <Link to="/add">Add User</Link>
            </li>
            <li>
              <Link to="/list">User List</Link>
            </li>
          </ul>
        </nav>
    </div>
  );
}

export default App;
