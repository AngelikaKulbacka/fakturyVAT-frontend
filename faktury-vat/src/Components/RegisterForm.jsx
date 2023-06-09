import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Breadcrumb } from 'react-bootstrap';
import validator from 'validator';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AuthService from '../Service/AuthService';


const RegisterForm = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
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

    let navigate = useNavigate();

    useEffect(() => {
        if (AuthService.isUserLoggedIn()) {
            navigate("/");
            return;
        }
    });

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsFormSubmitted(true);
        if (!isEmailValid) {
            return;
        }

        if (!passwordRegex.test(formData.password)) {
            alert("Hasło powinno zawierać minimum 8 znaków, w tym jedną małą literę, jedną dużą literę, jedną liczbę oraz jeden znak specjalny");
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            alert("Hasła się nie zgadzają");
            return;
        }

        await axios.post("http://localhost:8080/register", formData).then(() => {
            navigate("/login");
        }).catch(() => {
            console.log("Something went wrong");
        })
    };

    return (
        <div className="d-flex flex-column align-items-center">
            <h2 style={{ padding: '40px' }}>Rejestracja</h2>
            <Form onSubmit={handleSubmit} className="w-50 d-flex flex-column align-items-center">
                <Form.Group>
                    <Form.Label>
                        Imię:
                        <Form.Control type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} />
                    </Form.Label>
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        Nazwisko:
                        <Form.Control type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} />
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
                <Button style={{ margin: '20px' }} variant="outline-success" className="button" type='submit'>
                      Załóż konto
                </Button>
                <Breadcrumb>
                    <Breadcrumb.Item href="http://localhost:3000/login">Możesz też się zalogować.</Breadcrumb.Item>
                </Breadcrumb>
            </Form>
        </div>
    );
};

export default RegisterForm;
