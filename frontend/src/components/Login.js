import React, { useState } from 'react';
import api from '../services/api';

const Login = ({ setAuthUser }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  
  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await api.post('/login', formData);
      localStorage.setItem('token', res.data.token);
      setAuthUser(res.data.user);
    } catch (err) {
      alert('Login failed');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={onChange} required /><br/>
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={onChange} required /><br/>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
export default Login;
