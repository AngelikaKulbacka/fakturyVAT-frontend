import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Row, Col, Form } from 'react-bootstrap';
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
                        <Form.Label style={{fontSize: 20 }}>
                            Rodzaj dokumentu: 
                            Faktura VAT
                        </Form.Label>
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
                    <Col>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Miejsce wystawienia</Form.Label>
                                <Form.Control/>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col>
                    <Form>
                        <Form.Group className="mb-3">
                                <Form.Label>Data sprzedaży</Form.Label>
                                <Form.Control type='date' onChange={date => setDate(date)} />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <Container style={{ width: "100%" }}>
                <Row>
                <Col>
                    <Form.Group>
                        <Form.Check
                        type="radio"
                        label="Firma"
                        name="radios1"
                        id="radio1"
                        />
                        <Form.Check
                        type="radio"
                        label="Osoba"
                        name="radios1"
                        id="radio2"
                        />
                    </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group>
                        <Form.Check
                        type="radio"
                        label="Firma"
                        name="radios2"
                        id="radio3"
                        />
                        <Form.Check
                        type="radio"
                        label="Osoba"
                        name="radios2"
                        id="radio4"
                        />
                    </Form.Group>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Sprzedawca</Form.Label>
                                <Form.Control placeholder="Nazwa firmy" />
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Nabywca</Form.Label>
                                <Form.Control placeholder="Nazwa firmy" />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>NIP</Form.Label>
                                <Form.Control />
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>NIP</Form.Label>
                                <Form.Control />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Ulica</Form.Label>
                                <Form.Control />
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Ulica</Form.Label>
                                <Form.Control />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Miasto / kod</Form.Label>
                                <Form.Control />
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Miasto / kod</Form.Label>
                                <Form.Control />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <Navbar>
            <Container style={{ backgroundColor: "#e3e3e3", margin: '20px', marginTop: 20 }}>
                <Navbar.Brand style={{fontSize: 17}}>Nazwa towaru lub obsługi</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Row>
                        <Col>
                            <Navbar.Text>
                                Jm.
                            </Navbar.Text>
                        </Col>
                        <Col>
                            <Navbar.Text>
                                Ilość
                            </Navbar.Text>
                        </Col>
                        <Col>
                            <Navbar.Text>
                                Cena netto
                            </Navbar.Text>
                        </Col>
                        <Col>
                            <Navbar.Text>
                                Wartość netto
                            </Navbar.Text>
                        </Col>
                        <Col>
                            <Navbar.Text>
                                Stawka VAT
                            </Navbar.Text>
                        </Col>
                        <Col>
                            <Navbar.Text>
                                Kwota VAt
                            </Navbar.Text>
                        </Col>
                        <Col>
                            <Navbar.Text>
                                Wartość brutto
                            </Navbar.Text>
                        </Col>
                    </Row>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </Container>
    );
};

export default InvoicingForm;