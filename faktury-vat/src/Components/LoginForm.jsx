import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Breadcrumb } from 'react-bootstrap';
import validator from 'validator';
import AuthService from '../Service/AuthService';
import { useNavigate } from 'react-router-dom';
import NavbarComponent from './navbar';
import { Container } from 'react-bootstrap';


const LoginForm = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  let navigate = useNavigate();

  useEffect(() => {
    if (AuthService.isUserLoggedIn()) {
      navigate("/");
      return;
    }
  });


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };



  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsFormSubmitted(true);

    if (!isEmailValid) {
      return;
    }

    await AuthService.login(formData).then(() => {
      AuthService.saveSuccessfulLogin(formData.email, formData.password);
      console.log(AuthService.getLoggedInUserEmail());
      navigate("/");
    }).catch(() => {
      console.log("Failed");
    })
  };

  const validateEmail = (email) => {
    setIsEmailValid(validator.isEmail(email));
  };

  return (
    <Container>
      <NavbarComponent/>
      <Container style={{ marginTop: 80 }} className="d-flex flex-column align-items-center">
        <h2 style={{ padding: '40px' }}>Logowanie</h2>
        <Form onSubmit={handleSubmit} className="w-50 d-flex flex-column align-items-center">
          <Form.Group>
            <Form.Label>
              Email:
              <Form.Control type="email" name="email" value={formData.email} onChange={(e) => {
                handleInputChange(e);
                validateEmail(e.target.value);
              }} />
              {isFormSubmitted && !isEmailValid && <div style={{ color: 'red' }}>Niepoprawny format emaila</div>}
            </Form.Label>
          </Form.Group>
          <Form.Group>
            <Form.Label>
              Hasło:
              <Form.Control type="password" name="password" value={formData.password} onChange={handleInputChange} />
            </Form.Label>
          </Form.Group>
          <Button style={{ margin: '20px' }} variant="outline-success" className="button" type='submit'>
                      Zaloguj
          </Button>
          <Breadcrumb>
            <Breadcrumb.Item href="http://localhost:3000/register">Możesz też utworzyć konto.</Breadcrumb.Item>
          </Breadcrumb>
        </Form>
      </Container>
    </Container>
  );
};

export default LoginForm;
