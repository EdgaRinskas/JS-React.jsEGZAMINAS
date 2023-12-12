import React from 'react';
import Form from '../Form/Form';
import './RegistrationForm.scss';

const RegistrationForm = ({ onSubmit }) => {
  const handleFormSubmit = (formData) => {
    console.log('Form submitted:', formData);
    onSubmit(formData);
    alert('Form submitted successfully!');
  };

  return (
    <div className="registration-form">
      <Form onSubmit={handleFormSubmit} />
    </div>
  );
};

export default RegistrationForm;
