import React from 'react';
import Form from '../Form/Form';
import './RegistrationForm.scss';

const RegistrationForm = () => {
  const handleFormSubmit = (formData) => {

    console.log('Form submitted:', formData);
  };

  return (
    <div className="registration-form">
      {}
      {}
      <Form onSubmit={handleFormSubmit} />
    </div>
  );
};

export default RegistrationForm;
