import React, { useState } from "react";
import Form from "./components/Form/Form";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import "./App.scss";

const App = () => {
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  const handleSignUp = () => {
    setShowRegistrationForm(true);
  };

  const handleFormSubmit = (formData) => {
    console.log("Form submitted:", formData);
  };

  return (
    <div className="form_container">
      <img src="src/assets/exam.png" alt="Exam" className="picture" />
      <Form onSubmit={handleFormSubmit} />
      {showRegistrationForm && <RegistrationForm />}
    </div>
  );
};

export default App;
