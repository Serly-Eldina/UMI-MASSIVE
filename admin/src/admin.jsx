import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Admin.css';

const Admin = () => {
  const [userData, setUserData] = useState([]);
  const [newUserData, setNewUserData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:8001/getUserData')
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUserData({ ...newUserData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8001/Register', newUserData);
      setUserData([...userData, response.data]);
      setNewUserData({ name: '', email: '', password: '' });
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:8001/deleteUser/${id}`);
      const updatedUsers = userData.filter((user) => user.id !== id);
      setUserData(updatedUsers);
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const totalUsers = userData.length;

  return (
    <div className={`admin-container ${isSidebarOpen ? '' : 'sidebar-closed'}`}>
      <div className="sidebar">
        <h2>ADMIN PANEL</h2>
        <button className="toggle-sidebar-btn" onClick={toggleSidebar}>
          {isSidebarOpen ? 'Close Sidebar' : 'Open Sidebar'}
        </button>
        <ul>
          <li><a href="user">Data Pengguna</a></li>
          <li><a href="#add-user">Input Data</a></li>
          
        </ul>
      </div>
      <div className="main-content">
        <h1>Admin Floria</h1>
        <div className="total-users">
          Total Users: {totalUsers}
        </div>
        <form onSubmit={handleSubmit} className="add-user-form">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={newUserData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={newUserData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={newUserData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Add User</button>
        </form>
        <table className="user-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button onClick={() => deleteUser(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
