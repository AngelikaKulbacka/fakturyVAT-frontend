import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Row, Col, Navbar, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import NavbarComponent from './navbar';
import {useLocation} from 'react-router-dom';
import axios from "axios";

<script src="https://facebook.github.io/react/js/jsfiddle-integration.js"></script>

const EditCompanyDataForm = () => {
    const [isPersonSelected, setPersonSelected] = useState(false);

    const handleRadioButtonChange = (event) => {
        if (event.target.id === 'radio2') {
            setPersonSelected(true);
        } else {
            setPersonSelected(false);
        }
    };

    const location = useLocation();
    let data = location.state;
    console.log(data);


    const [buyerPerson, setBuyerPerson] = useState([]);

    const loadBuyerPerson = async () => {
        const result = await axios.get('http://localhost:8080/get-all-buyer-person/' + data.buyer);
        setBuyerPerson(result.data);
    }

    const [buyerCompany, setBuyerCompany] = useState([]);

    const loadBuyerCompany = async () => {
        const result = await axios.get('http://localhost:8080/get-all-buyer-company/' + data.buyer);
        setBuyerCompany(result.data);
    }

    useEffect(() => {
        loadBuyerPerson();
    }, []);

    useEffect(() => {
        loadBuyerCompany();
    }, []);

    console.log('dawwd');
    console.log(data.buyer);
    console.log(buyerPerson);
    console.log(buyerCompany);

    return (
        <Container>
            <NavbarComponent />
            <Container style={{ margin: '20px', marginTop: 100, width: "100%" }}>
            <div style={{width: "100%"}}>        
                {/* <div>{JSON.stringify(data)}</div> */}
                <p>Numer {data.noInvoice}</p>
                <p>Data wystawienia {data.dateIssueInvoice}</p>
                <p>Miejsce wystawienia {data.placeIssue}</p>
                <p>Data sprzedazy {data.dateSale}</p>
                <p>Cena calkowita {data.totalValue} zl</p>
                <p>Numer konta {data.accountNumber}</p>
            </div>
                {/* <Row>
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
                        <Form.Label>Sprzedawca</Form.Label>
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
                        <Form.Control defaultValue={data.test} />
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
                </Button> */}
            </Container>
        </Container>
    );
};

export default EditCompanyDataForm;
