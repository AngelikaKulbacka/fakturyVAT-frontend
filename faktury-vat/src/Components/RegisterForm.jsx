import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import validator from 'validator';


const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    email: ''
  });
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleEmailChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setIsEmailValid(validator.isEmail(value));
  };  

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsFormSubmitted(true);
    if (isEmailValid) {
      try {
        const response = await axios.post('http://localhost:8080/register', formData);
        // obsługa odpowiedzi z API
      } catch (error) {
        // obsługa błędów zapytania HTTP
      }
    }
  };

  return (
    <div className="d-flex flex-column align-items-center">
        <h2 style={{ padding: '40px' }}>Rejestracja</h2>
        <Form onSubmit={handleSubmit} className="w-50 d-flex flex-column align-items-center">
            <Form.Group>
                <Form.Label>
                    Nazwa użytkownika:
                    <Form.Control type="text" name="username" value={formData.username} onChange={handleInputChange} />
                </Form.Label>
            </Form.Group>
            <Form.Group>
                <Form.Label>
                    Email:
                    <Form.Control type="email" name="email" value={formData.email} onChange={handleEmailChange} />
                    {isFormSubmitted && !isEmailValid && <div style={{ color: 'red' }}>Niepoprawny format emaila</div>}
                </Form.Label>
            </Form.Group>
            <Form.Group>
                <Form.Label>
                    Hasło:
                    <Form.Control type="password" name="password" value={formData.password} onChange={handleInputChange} />
                </Form.Label>
            </Form.Group>
            <Form.Group>
                <Form.Label>
                    Potwierdź hasło:
                    <Form.Control type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} />
                </Form.Label>
            </Form.Group>
            <Button type="submit" style={{ margin: '20px' }}>Załóż konto</Button>
        </Form>
    </div>
  );
};

export default RegisterForm;
