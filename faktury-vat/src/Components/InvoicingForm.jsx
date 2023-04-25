import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, Row, Col, Dropdown, Form, DropdownButton } from 'react-bootstrap';
import { useState } from 'react';
import NavbarComponent from './navbar';

const InvoicingForm = () => {

    const [date, setDate] = useState(new Date());

    const [value,setValue]=useState('');
    const handleSelect=(e)=>{
        console.log(e);
        setValue(e)
    }

    return (
        <Container>
            <NavbarComponent/>
            <Navbar>
            <Container style={{ backgroundColor: "#e3e3e3", margin: '20px', marginTop: 80 }}>
                <Navbar.Brand href="#home">Faktura VAT</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    Zalogowany jako: <a href="#login">Mark Otto</a>
                </Navbar.Text>
                </Navbar.Collapse>
            </Container>
            </Navbar>
            <Container style={{ width: "100%" }}>
                <Row>
                    <Col>
                        <Form.Label>Rodzaj dokumentu:</Form.Label>
                        <Form.Label>Faktura VAT</Form.Label>
                    </Col>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Numer</Form.Label>
                                <Form.Control placeholder="01/03/2023" />
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col>
                    <Form>
                        <Form.Group className="mb-3">
                                <Form.Label>Data wystawienia</Form.Label>
                                <Form.Control type='date' onChange={date => setDate(date)} />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
            </Container>
    );
};

export default InvoicingForm;