import React, { useState } from 'react';
import './signup.css';

const Signup = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    empid: '',
    username: '',
    mobile: '',
    role: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValues.password !== formValues.confirmPassword) {
      alert('Password and Confirm Password do not match.');
    } else {
      // Submit form
      console.log('Form submitted', formValues);
    }
  };

  const togglePassword = (fieldId) => {
    const field = document.getElementById(fieldId);
    const toggle = field.nextElementSibling;
    if (field.type === 'password') {
      field.type = 'text';
      toggle.classList.remove('fa-eye');
      toggle.classList.add('fa-eye-slash');
    } else {
      field.type = 'password';
      toggle.classList.remove('fa-eye-slash');
      toggle.classList.add('fa-eye');
    }
  };

  return (
    <div className="container">
      <h2>Signup</h2>
      <form id="registrationForm" onSubmit={handleSubmit}>
        <label htmlFor="name">Name *</label>
        <input type="text" id="name" name="name" value={formValues.name} onChange={handleChange} required />

        <label htmlFor="empid">Employee ID *</label>
        <input type="text" id="empid" name="empid" value={formValues.empid} onChange={handleChange} required />

        <label htmlFor="username">Username *</label>
        <input type="text" id="username" name="username" value={formValues.username} onChange={handleChange} required />

        <label htmlFor="mobile">Mobile Number *</label>
        <input type="text" id="mobile" name="mobile" pattern="[6789][0-9]{9}" value={formValues.mobile} onChange={handleChange} required />

        <label htmlFor="role">Role *</label>
        <input type="text" id="role" name="role" value={formValues.role} onChange={handleChange} required />

        <label htmlFor="email">Email *</label>
        <input type="email" id="email" name="email" value={formValues.email} onChange={handleChange} required />

        <label htmlFor="password">Password *</label>
        <div className="password-container">
          <input type="password" id="password" name="password" value={formValues.password} onChange={handleChange} required />
          <i className="fas fa-eye toggle-password" onClick={() => togglePassword('password')}></i>
        </div>

        <label htmlFor="confirmPassword">Confirm Password *</label>
        <div className="password-container">
          <input type="password" id="confirmPassword" name="confirmPassword" value={formValues.confirmPassword} onChange={handleChange} required />
          <i className="fas fa-eye toggle-password" onClick={() => togglePassword('confirmPassword')}></i>
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Signup;
