import React, { useState, useEffect } from 'react';
import api from '../services/api';

const Dashboard = ({ user }) => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (user?.role === 'admin') {
      api.get('/users', { headers: { 'x-auth-token': localStorage.getItem('token') } })
         .then(res => setUsers(res.data))
         .catch(err => console.error(err));
    }
  }, [user]);

  const handleDelete = (id) => {
    api.delete(`/users/${id}`, { headers: { 'x-auth-token': localStorage.getItem('token') } })
       .then(() => setUsers(users.filter(u => u._id !== id)))
       .catch(err => console.error(err));
  };

  const filteredUsers = users.filter(u => u.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div style={{ padding: '20px' }}>
      <h1>Dashboard</h1>
      <p>Welcome, {user?.name || 'User'}! Role: {user?.role}</p>
      
      {user?.role === 'admin' && (
        <div>
          <h3>Admin Panel - Manage Users</h3>
          <input 
            type="text" 
            placeholder="Search users..." 
            value={search} 
            onChange={(e) => setSearch(e.target.value)} 
          />
          <table border="1" cellPadding="10" style={{ marginTop: '10px', width: '100%', textAlign: 'left' }}>
            <thead>
              <tr><th>Name</th><th>Email</th><th>Role</th><th>Action</th></tr>
            </thead>
            <tbody>
              {filteredUsers.map(u => (
                <tr key={u._id}>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                  <td>{u.role}</td>
                  <td>
                    <button onClick={() => handleDelete(u._id)} style={{ background: 'red', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
export default Dashboard;
