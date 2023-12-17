import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Admin.css';

const User = () => {
  const [userData, setUserData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8001/getUserData')
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        setError(error); // Tangani error di sini
        console.error('Error fetching data:', error);
      });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>; // Tampilkan pesan error
  }

  return (
    <div className="main-content">
      <h1>Daftar User</h1>
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
