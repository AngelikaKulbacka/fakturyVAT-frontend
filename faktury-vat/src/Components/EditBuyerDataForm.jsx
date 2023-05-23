import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Row, Col, Navbar, Button } from 'react-bootstrap';
import { useState } from 'react';
import NavbarComponent from './navbar';

const EditBuyerDataForm = () => {
    const [isPersonSelected, setPersonSelected] = useState(false);

    const handleRadioButtonChange = (event) => {
        if (event.target.id === 'radio2') {
            setPersonSelected(true);
        } else {
            setPersonSelected(false);
        }
    };

    return (
        <Container>
            <NavbarComponent />
            <Container style={{ margin: '20px', marginTop: 100, width: "40%" }}>
                <Row>
                    <Col>
                        <Form.Group className="d-flex align-items-center" style={{ display: 'flex', flexDirection: 'row' }}>
                            <Form.Check
                                type="radio"
                                label="Firma"
                                name="radios1"
                                id="radio1"
                                onChange={handleRadioButtonChange}
                            />
                            <Form.Check
                                style={{ marginLeft: 20 }}
                                type="radio"
                                label="Osoba"
                                name="radios1"
                                id="radio2"
                                onChange={handleRadioButtonChange}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Form style={{ marginTop: 20 }}>
                    <Form.Group className="mb-3">
                        <Form.Label>Nabywca</Form.Label>
                        {!isPersonSelected && (
                            <Form.Control placeholder="Nazwa firmy" />
                        )}
                        {isPersonSelected && (
                            <>
                                <Form.Control placeholder="Imię" style={{ marginBottom: 10 }} />
                                <Form.Control placeholder="Nazwisko" style={{ marginBottom: 10 }} />
                                <Form.Label>PESEL</Form.Label>
                                <Form.Control />
                            </>
                        )}
                    </Form.Group>
                </Form>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>NIP</Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Form>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Ulica i numer domu</Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Form>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Miasto / kod</Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Form>
                <Button variant="outline-secondary" size="sm" href="/dokumenty">
                    Zapisz
                </Button>
            </Container>
        </Container>
    );
};

export default EditBuyerDataForm;
