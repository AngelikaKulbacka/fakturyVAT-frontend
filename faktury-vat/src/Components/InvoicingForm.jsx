import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Row, Col, Form, ButtonGroup, Button, Dropdown, DropdownButton } from 'react-bootstrap';
import { useState } from 'react';
import NavbarComponent from './navbar';

const InvoicingForm = () => {

    const [date, setDate] = useState(new Date());

    const [value,setValue]=useState('');
    const handleSelect=(e)=>{
        console.log(e);
        setValue(e)
    }

    const [isPersonSelected1, setPersonSelected1] = useState(false);

    const handleRadioButtonChange1 = (event) => {
        if (event.target.id === 'radio2') {
            setPersonSelected1(true);
        } else {
            setPersonSelected1(false);
        }
    };

    const [isPersonSelected2, setPersonSelected2] = useState(false);

    const handleRadioButtonChange2 = (event) => {
        if (event.target.id === 'radio4') {
            setPersonSelected2(true);
        } else {
            setPersonSelected2(false);
        }
    };

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
            <Container style={{ width: "100%", marginTop: 20 }}>
                <Row>
                <Col>
                    <Form.Group className="d-flex align-items-center" style={{ display: 'flex', flexDirection: 'row' }}>
                        <ButtonGroup style={{ marginRight: 20 }}>
                            <Button variant="secondary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-folder2" viewBox="0 0 16 16">
                                    <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v7a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 12.5v-9zM2.5 3a.5.5 0 0 0-.5.5V6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5zM14 7H2v5.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V7z"/>
                                </svg>
                                <span class='visually-hidden'>Button</span>
                            </Button>
                            <Button variant="secondary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                                </svg>
                                <span class='visually-hidden'>Button</span>
                            </Button>
                            <Button variant="secondary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
                                    <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
                                    <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
                                </svg>
                                <span class='visually-hidden'>Button</span>
                            </Button>
                            <Button variant="secondary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-circle" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
                                </svg>
                                <span class='visually-hidden'>Button</span>
                            </Button>
                        </ButtonGroup>
                        <Form.Check
                        type="radio"
                        label="Firma"
                        name="radios1"
                        id="radio1"
                        onChange={handleRadioButtonChange1}
                        />
                        <Form.Check
                        style={{ marginLeft: 20 }}
                        type="radio"
                        label="Osoba"
                        name="radios1"
                        id="radio2"
                        onChange={handleRadioButtonChange1}
                        />
                    </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group className="d-flex align-items-center" style={{ display: 'flex', flexDirection: 'row' }}>
                    <ButtonGroup style={{ marginRight: 20 }}>
                            <Button variant="secondary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-folder2" viewBox="0 0 16 16">
                                    <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v7a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 12.5v-9zM2.5 3a.5.5 0 0 0-.5.5V6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5zM14 7H2v5.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V7z"/>
                                </svg>
                                <span class='visually-hidden'>Button</span>
                            </Button>
                            <Button variant="secondary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                                </svg>
                                <span class='visually-hidden'>Button</span>
                            </Button>
                            <Button variant="secondary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
                                    <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
                                    <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
                                </svg>
                                <span class='visually-hidden'>Button</span>
                            </Button>
                            <Button variant="secondary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-circle" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
                                </svg>
                                <span class='visually-hidden'>Button</span>
                            </Button>
                        </ButtonGroup>
                        <Form.Check
                        type="radio"
                        label="Firma"
                        name="radios2"
                        id="radio3"
                        onChange={handleRadioButtonChange2}
                        />
                        <Form.Check
                        style={{ marginLeft: 20 }}
                        type="radio"
                        label="Osoba"
                        name="radios2"
                        id="radio4"
                        onChange={handleRadioButtonChange2}
                        />
                    </Form.Group>
                    </Col>
                </Row>
            </Container>
            <Container style={{ marginTop: 10 }}>
                <Row>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Sprzedawca</Form.Label>
                                {!isPersonSelected1 && (
                                    <Form.Control placeholder="Nazwa firmy" />
                                )}
                                {isPersonSelected1 && (
                                    <>
                                        <Form.Control placeholder="Imię" style={{ marginBottom: 10 }} />
                                        <Form.Control placeholder="Nazwisko" style={{ marginBottom: 10 }} />
                                        <Form.Label>PESEL</Form.Label>
                                        <Form.Control />
                                    </>
                                )}
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3">
                            <Form.Label>Nabywca</Form.Label>
                                {!isPersonSelected2 && (
                                    <Form.Control placeholder="Nazwa firmy" />
                                )}
                                {isPersonSelected2 && (
                                    <>
                                        <Form.Control placeholder="Imię" style={{ marginBottom: 10 }} />
                                        <Form.Control placeholder="Nazwisko" style={{ marginBottom: 10 }} />
                                        <Form.Label>PESEL</Form.Label>
                                        <Form.Control />
                                    </>
                                )}
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
                                <Form.Label>Ulica i numer domu</Form.Label>
                                <Form.Control />
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Ulica i numer domu</Form.Label>
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
                <Button style={{ margin: 5 }} variant="outline-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
                        <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
                        <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
                    </svg>
                    <span class='visually-hidden'>Button</span>
                </Button>
                <Navbar.Brand style={{fontSize: 17}}>Nazwa towaru lub obsługi</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse style={{ marginLeft: 175 }}>
                    <Row>
                        <Col>
                            <Navbar.Text>
                                Jm.
                            </Navbar.Text>
                        </Col>
                        <Col>
                            <Navbar.Text style={{ marginLeft: 70 }}>
                                Ilość
                            </Navbar.Text>
                        </Col>
                        <Col>
                            <Navbar.Text style={{ marginLeft: 50 }}>
                                Cena netto
                            </Navbar.Text>
                        </Col>
                        <Col>
                            <Navbar.Text style={{ marginLeft: 20 }}>
                                Wartość netto
                            </Navbar.Text>
                        </Col>
                        <Col>
                            <Navbar.Text style={{ marginLeft: 15 }}>
                                Stawka VAT
                            </Navbar.Text>
                        </Col>
                        <Col>
                            <Navbar.Text style={{ marginLeft: 30 }}>
                                Kwota VAT
                            </Navbar.Text>
                        </Col>
                        <Col>
                            <Navbar.Text style={{ marginLeft: 10 }}>
                                Wartość brutto
                            </Navbar.Text>
                        </Col>
                    </Row>
                </Navbar.Collapse>
            </Container>
            </Navbar>
            <Container>
                <Row style={{ marginRight: 10 }}>
                    <Col xs={4}>
                    <Form.Group className="d-flex align-items-center" style={{ display: 'flex', flexDirection: 'row' }}>
                        <ButtonGroup style={{ marginRight: 10 }}>
                                <Button variant="secondary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                                    </svg>
                                    <span class='visually-hidden'>Button</span>
                                </Button>
                                <Button variant="secondary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                                    </svg>
                                    <span class='visually-hidden'>Button</span>
                                </Button>
                            </ButtonGroup>
                            <Form>
                                <Form.Group className="d-flex align-items-center">
                                    <Form.Control />
                                </Form.Group>
                            </Form>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form className="d-flex align-items-center" style={{ marginLeft: 10 }}>
                            <Form.Group>
                                <DropdownButton id="dropdown-basic-button" variant="outline-secondary" title="szt.">
                                    <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">3</Dropdown.Item>
                                </DropdownButton>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col>
                        <Form className="d-flex align-items-center" style={{ marginRight: 10 }}>
                            <Form.Group className="mb-3">
                                <Form.Control placeholder="1" />
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col>
                        <Form className="d-flex align-items-center" style={{ marginRight: 10 }}>
                            <Form.Group className="mb-3">
                                <Form.Control placeholder="0.00" />
                                <Form.Label style={{ marginTop: 15 }}>Razem</Form.Label>
                                <Form.Label style={{ marginTop: 65 }}>Do zapłaty</Form.Label>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col>
                        <Form className="d-flex align-items-center" style={{ marginRight: 10 }}>
                            <Form.Group className="mb-3">
                                <Form.Control placeholder="0.00" />
                                <Form.Control style={{ marginTop: 10 }} placeholder="0.00" />
                                <Form.Control style={{ marginTop: 10 }} placeholder="0.00" />
                                <Form.Control style={{ marginTop: 10 }} placeholder="0.00" />
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col>
                        <Form className="d-flex align-items-center" style={{ marginRight: 10 }}>
                            <Form.Group className="mb-3">
                            <DropdownButton id="dropdown-basic-button" variant="outline-secondary" title="Stawka">
                                    <Dropdown.Item href="#/action-1">23%</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">8%</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">5%</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">0%</Dropdown.Item>
                                </DropdownButton>
                                <Form.Control style={{ marginTop: 58 }} placeholder="23%" />
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col>
                        <Form className="d-flex align-items-center" style={{ marginRight: 10 }}>
                            <Form.Group className="mb-3">
                                <Form.Control placeholder="0.00" />
                                <Form.Control style={{ marginTop: 10 }} placeholder="0.00" />
                                <Form.Control style={{ marginTop: 10 }} placeholder="0.00" />
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col>
                        <Form className="d-flex align-items-center" style={{ marginRight: 10 }}>
                            <Form.Group className="mb-3">
                                <Form.Control placeholder="0.00" />
                                <Form.Control style={{ marginTop: 10 }} placeholder="0.00" />
                                <Form.Control style={{ marginTop: 10 }} placeholder="0.00" />
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
                                <Form.Label>Data płatności</Form.Label>
                                <Form.Control type='date' onChange={date => setDate(date)} />
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3">
                            <Form.Label>Sposób płatności</Form.Label>
                            <DropdownButton id="dropdown-basic-button" variant="outline-secondary" title="Sposób">
                                    <Dropdown.Item href="#/action-1">Przelew</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">BLIK</Dropdown.Item>
                                </DropdownButton>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Termin płatności</Form.Label>
                                <Form.Control type='date' onChange={date => setDate(date)} />
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Numer konta</Form.Label>
                                <Form.Control/>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                <Button variant="outline-secondary" size="md" href="/dokumenty" style={{ marginBottom: 40 }}>
                    Zapisz
                </Button>
            </Container>
        </Container>
    );
};

export default InvoicingForm;