import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  
  const onSubmit = e => {
    e.preventDefault();
    console.log('Logging in...', formData);
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <input type="email" name="email" value={formData.email} onChange={onChange} required />
        <input type="password" name="password" value={formData.password} onChange={onChange} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
export default Login;
