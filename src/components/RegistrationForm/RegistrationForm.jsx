import React from 'react';
import Form from '../Form/Form';
import './RegistrationForm.scss';

const RegistrationForm = () => {
  const handleFormSubmit = (formData) => {
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="registration-form">
      {/* Add images and logo here */}
      {/* Example: <img src="logo.png" alt="Logo" /> */}
      <Form onSubmit={handleFormSubmit} />
    </div>
  );
};

export default RegistrationForm;
