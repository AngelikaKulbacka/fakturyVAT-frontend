import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, DropdownButton, Dropdown, Button } from 'react-bootstrap';
import { useState } from 'react';
import NavbarComponent from './navbar';

const EditProductDataForm = () => {

    return (
        <Container>
            <NavbarComponent />
            <Container style={{ margin: '20px', marginTop: 100, width: "30%" }}>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Nazwa towaru lub obsługi</Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Form>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Jm.</Form.Label>
                            <DropdownButton id="dropdown-basic-button" variant="outline-secondary" title="szt.">
                                    <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">3</Dropdown.Item>
                                </DropdownButton>
                    </Form.Group>
                </Form>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Cena netto</Form.Label>
                        <Form.Control placeholder="0.00" />
                    </Form.Group>
                </Form>
                <Button variant="outline-secondary" size="sm" href="/dokumenty">
                    Zapisz
                </Button>
            </Container>
        </Container>
    );
};

export default EditProductDataForm;
