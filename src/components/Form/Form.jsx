import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Form.scss';

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form validation logic here
    onSubmit(formData);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>
        <b>Get Started</b>
      </h1>
      <p>Already have an account?</p>
      <a href="#" style={{ color: 'orange' }}>
        Log In
      </a>

      <div className="button-links">
        <button type="button" className="google-button">
          Sign Up with Google
          {/* Include Google logo here */}
        </button>
        <button type="button" className="facebook-button">
          Sign Up with Facebook
          {/* Include Facebook logo here */}
        </button>
      </div>

      <h2>Or</h2>

      <div className="input-fields">
        <div className="input-group">
          <p>Name</p>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
          />
        </div>
        <div className="input-group">
          <p>Email</p>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="abc@gmail.com"
          />
        </div>
        <div className="input-group">
          <p>Password</p>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
          />
        </div>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
