import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Row, Col, Form, ButtonGroup, Button, Dropdown, DropdownButton } from 'react-bootstrap';
import { useState } from 'react';
import NavbarComponent from './navbar';
import AuthService from '../Service/AuthService';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const InvoicingForm = () => {

    let navigate = useNavigate();
    if (!AuthService.isUserLoggedIn()) {
        navigate('/');
    }
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

    const [invoice, setInvoice] = useState({
        noInvoice: "",
        dateIssueInvoice: Date(),
        placeIssue: "",
        dateSale: Date(),
        seller: AuthService.getLoggedInUserEmail(),
        buyer: "",
        methodPayment: "przelew",
        accountNumber: "",
        totalValue: 0.0,
        priceInWords: ""
    })

    const onInputChange = (e) => {
        setInvoice({ ...invoice, [e.target.name]: e.target.value });
    };

    const [companySeller, setCompanySeller] = useState({
        nameCompany: "",
        nip: "",
        street: "",
        buildingNumber: "",
        aparmentNumber: -1,
        city: "",
        postcode: "",
    })

    const [companyBuyer, setCompanyBuyer] = useState({
        nameCompany: "",
        nip: "",
        street: "",
        buildingNumber: "",
        aparmentNumber: -1,
        city: "",
        postcode: "",
    })

    const [personSeller, setPersonSeller] = useState({
        firstName: "",
        surname: "",
        nip: "",
        pesel: "",
        street: "",
        buildingNumber: "",
        apartmentNumber: -1,
        city: "",
        postcode: "",
    })

    const [personBuyer, setPersonBuyer] = useState({
        firstName: "",
        surname: "",
        nip: "",
        pesel: "",
        street: "",
        buildingNumber: "",
        apartmentNumber: -1,
        city: "",
        postcode: "",
    })


    const [nip1, setNip1] = useState("");
    const [buildingNumber1, setBuildingNumber1] = useState("");
    const [nip2, setNip2] = useState("");
    const [buildingNumber2, setBuildingNumber2] = useState("");

    const [street1, setStreet1] = useState("");
    const [street2, setStreet2] = useState("");

    const [city1, setCity1] = useState("");
    const [city2, setCity2] = useState("");

    const onInputChangeCompanySeller = (e) => {
        setCompanySeller({ ...companySeller, [e.target.name]: e.target.value });
    };

    const onInputChangeCompanyBuyer = (e) => {
        setCompanyBuyer({ ...companyBuyer, [e.target.name]: e.target.value });
    };

    const onInputChangePersonSeller = (e) => {
        setPersonSeller({ ...personSeller, [e.target.name]: e.target.value });
    };

    const onInputChangePersonBuyer = (e) => {
        setPersonBuyer({ ...personBuyer, [e.target.name]: e.target.value });
    };
    

    const handleSave = async () => {
        // Access the form data in the `formData` state variable
        
        
        
        console.log(invoice);
        
        if (doZaplaty === 0) {
            window.alert('wylicz kwote');
            return;
        }

        if (isPersonSelected1) {
            personSeller.nip = nip1;
            personSeller.buildingNumber = buildingNumber1;
            personSeller.city = city1;
            personSeller.street = street1;
            console.log(personSeller);


            await axios.post("http://localhost:8080/seller-person", personSeller).then(() => {
        }).catch(() => {
            console.log("Something went wrong");
        })
        } else {
            companySeller.nip = nip1;
            companySeller.buildingNumber = buildingNumber1;
            companySeller.city = city1;
            companySeller.street = street1;
            console.log(companySeller);

            await axios.post("http://localhost:8080/seller-company", companySeller).then(() => {
        }).catch(() => {
            console.log("Something went wrong");
        })
        }
      
        
        if (isPersonSelected2) {
            personBuyer.nip = nip2;
            personBuyer.buildingNumber = buildingNumber2;
            personBuyer.city = city2;
            personBuyer.street = street2;
            console.log(personBuyer);
            setInvoice({ ...invoice, "nip": nip2 });
            await axios.post("http://localhost:8080/buyer-person", personBuyer).then(() => {
        }).catch(() => {
            console.log("Something went wrong");
        })
        } else {
            companyBuyer.nip = nip2;
            companyBuyer.buildingNumber = buildingNumber2;
            companyBuyer.city = city2;
            companyBuyer.street = street2;
            console.log(companyBuyer);
            setInvoice({ ...invoice, "nip": nip2 });
            await axios.post("http://localhost:8080/buyer-company", companyBuyer).then(() => {
        }).catch(() => {
            console.log("Something went wrong");
        })
        }

        // Perform operations to save the data to a database
        // For example, you can make an API call using Axios or fetch
      
        // Clear the form data if needed
        //setFormData({});

        await axios.post("http://localhost:8080/invoice-vat", invoice).then(() => {
            navigate("/");
        }).catch(() => {
            console.log("Something went wrong");
        })
      };

      const [stawka, setStawka] = useState(23);
      const [cenaNetto, setCenaNetto] = useState(0.0);
      const [ilosc, setIlosc] = useState(1);
      const [kwotaVat, setKwotaVat] = useState(0.0);
      const [doZaplaty, setDoZaplaty] = useState(0.0);

    return (
        <Container>
            <NavbarComponent/>
            <Navbar>
            <Container style={{ backgroundColor: "#e3e3e3", margin: '20px', marginTop: 80 }}>
                <Navbar.Brand href="#home">Faktura VAT</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    Zalogowany jako: <a href="#login">{AuthService.getLoggedInUserEmail()}</a>
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
                                <Form.Control placeholder="01/03/2023" name='noInvoice' value={invoice.noInvoice} onChange={(e)=>onInputChange(e)}/>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col>
                    <Form>
                        <Form.Group className="mb-3">
                                <Form.Label>Data wystawienia</Form.Label>
                                <Form.Control type='date' value={invoice.dateIssueInvoice}
                                 //onChange={date => setDate(date)}
                                 name='dateIssueInvoice'
                                 onChange={(e) => onInputChange(e)}
                                  />
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Miejsce wystawienia</Form.Label>
                                <Form.Control value={invoice.placeIssue} name='placeIssue' onChange={(e) => onInputChange(e)}/>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col>
                    <Form>
                        <Form.Group className="mb-3">
                                <Form.Label>Data sprzedaży</Form.Label>
                                <Form.Control type='date' onChange={(e) => onInputChange(e)} name='dateSale' value={invoice.dateSale} />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>


            


            <Container style={{ width: "100%", marginTop: 20 }}>
                <Row>
                <Col>
                    <Form.Group className="d-flex align-items-center" style={{ display: 'flex', flexDirection: 'row' }}>
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
                                    <Form.Control placeholder="Nazwa firmy" name='nameCompany' value={companySeller.nameCompany} onChange={(e) => onInputChangeCompanySeller(e)} />)}
                                {isPersonSelected1 && (
                                    <>
                                        <Form.Control placeholder="Imię" style={{ marginBottom: 10 }}
                                          name='firstName' value={personSeller.firstName} onChange={(e) => onInputChangePersonSeller(e)} />
                                        <Form.Control placeholder="Nazwisko" style={{ marginBottom: 10 }} 
                                        name='surname' value={personSeller.surname} onChange={(e) => onInputChangePersonSeller(e)}/>
                                        <Form.Label>PESEL</Form.Label>
                                        <Form.Control name='pesel' value={personSeller.pesel} onChange={(e) => onInputChangePersonSeller(e)}/>
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
                                    <Form.Control placeholder="Nazwa firmy"
                                    name='nameCompany' value={companyBuyer.nameCompany} onChange={(e) => onInputChangeCompanyBuyer(e)} />
                                )}
                                {isPersonSelected2 && (
                                    <>
                                        <Form.Control placeholder="Imię" style={{ marginBottom: 10 }}
                                        name='firstName' value={personBuyer.firstName} onChange={(e) => onInputChangePersonBuyer(e)} />
                                        <Form.Control placeholder="Nazwisko" style={{ marginBottom: 10 }} 
                                        name='surname' value={personBuyer.surname} onChange={(e) => onInputChangePersonBuyer(e)}/>
                                        <Form.Label>PESEL</Form.Label>
                                        <Form.Control name='pesel' value={personBuyer.pesel} onChange={(e) => onInputChangePersonBuyer(e)}/>
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
                                <Form.Control value={nip1} onChange={(e) => {
                                    setNip1(e.currentTarget.value)
                                    } }/>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>NIP</Form.Label>
                                <Form.Control value={nip2} onChange={(e) => {
                                    setNip2(e.currentTarget.value)
                                    } }/>
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
                                <Form.Control value={city1} onChange={(e) => {setCity1(e.currentTarget.value)} }/>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Ulica i numer domu</Form.Label>
                                <Form.Control value={city2} onChange={(e) => {setCity2(e.currentTarget.value)} }/>
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
                                <Form.Control value={street1} onChange={(e) => {setStreet1(e.currentTarget.value)} }/>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Miasto / kod</Form.Label>
                                <Form.Control value={street2} onChange={(e) => {setStreet2(e.currentTarget.value)} }/>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <Navbar>
            <Container style={{ backgroundColor: "#e3e3e3", margin: '20px', marginTop: 20 }}>
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
                            <Form>
                                <Form.Group className="d-flex align-items-center">
                                    <Form.Control />
                                </Form.Group>
                            </Form>
                        </Form.Group>
                    </Col>
                    {/* <Col>
                        <Form className="d-flex align-items-center" style={{ marginLeft: 10 }}>
                            <Form.Group>
                                <DropdownButton id="dropdown-basic-button" variant="outline-secondary" title="szt.">
                                    <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">3</Dropdown.Item>
                                </DropdownButton>
                            </Form.Group>
                        </Form>
                    </Col> */}
                    <Col>
                        <Form className="d-flex align-items-center" style={{ marginRight: 10 }}>
                            <Form.Group className="mb-3">
                                <Form.Control value={ilosc} onChange={e=> {
                                    if (e.target.value < 1) {
                                        return;
                                    }
                                    setIlosc(e.target.value);
                                }}/>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col>
                        <Form className="d-flex align-items-center" style={{ marginRight: 10 }}>
                            <Form.Group className="mb-3">
                                <Form.Control value={cenaNetto} onChange={e=> {
                                    if (e.target.value < 0) {
                                        return;
                                    }
                                    setCenaNetto(e.target.value)
                                }
                                } placeholder="0.00" />
                           
                                <Form.Label style={{ marginTop: 65 }}>Do zapłaty</Form.Label>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col>
                        <Form className="d-flex align-items-center" style={{ marginRight: 10 }}>
                            <Form.Group className="mb-3">
                                <Form.Control readOnly="true" placeholder="0.00" />
                                <Form.Control style={{ marginTop: 10 }} placeholder="0.00" />
                                <Form.Control value={doZaplaty} style={{ marginTop: 10 }} placeholder="0.00" />
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col>
                        <Form className="d-flex align-items-center" style={{ marginRight: 10 }}>
                            <Form.Group className="mb-3">
                            <DropdownButton onSelect={(e) => {
                                setStawka(e);
                            }} id="dropdown-basic-button" variant="outline-secondary" title={stawka}>
                                    <Dropdown.Item eventKey="23">23%</Dropdown.Item>
                                    <Dropdown.Item eventKey="8">8%</Dropdown.Item>
                                    <Dropdown.Item eventKey="5">5%</Dropdown.Item>
                                    <Dropdown.Item eventKey="0">0%</Dropdown.Item>
                                </DropdownButton>
                                <Form.Control style={{ marginTop: 58 }} readOnly="true" placeholder={stawka} />
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col>
                        <Form className="d-flex align-items-center" style={{ marginRight: 10 }}>
                            <Form.Group className="mb-3">
                                <Form.Control value={kwotaVat} readOnly='true' placeholder="0.00" />
                                <Form.Control value={kwotaVat} readOnly='true' style={{ marginTop: 10 }} placeholder="0.00" />
                                <Form.Control value={kwotaVat} readOnly='true' style={{ marginTop: 10 }} placeholder="0.00" />
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col>
                        <Form className="d-flex align-items-center" style={{ marginRight: 10 }}>
                            <Form.Group className="mb-3">
                                <Form.Control placeholder="0.00" readOnly='true' />
                                <Form.Control style={{ marginTop: 10 }} readOnly='true' placeholder="0.00" />
                                <Form.Control style={{ marginTop: 10 }} readOnly='true' placeholder="0.00" />
                            </Form.Group>
                        </Form>
                    </Col>
                    <Button onClick={(e) => {
                        let total = ilosc * cenaNetto + (ilosc * cenaNetto * (stawka / 100))
                        setKwotaVat(ilosc * cenaNetto * (stawka / 100));
                        setDoZaplaty(total);
                        setInvoice({ ...invoice, "totalValue": total });
                    }}>Wylicz</Button>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Data płatności</Form.Label>
                                <Form.Control type='date' name='dateSale' value={invoice.dateSale} onChange={e => onInputChange(e)} />
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col>
                        {/* <Form>
                            <Form.Group className="mb-3">
                            <Form.Label>Sposób płatności</Form.Label>
                            <DropdownButton name='methodPayment' onSelect={e =>onInputChange(e)} id="dropdown-basic-button" variant="outline-secondary" title="Sposób">
                                    <Dropdown.Item eventKey="przelew">Przelew</Dropdown.Item>
                                    <Dropdown.Item eventKey="blik">BLIK</Dropdown.Item>
                                </DropdownButton>
                            </Form.Group>
                        </Form> */}
                    </Col>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Numer konta</Form.Label>
                                <Form.Control name='accountNumber' value={invoice.accountNumber} onChange={e => onInputChange(e)}/>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                <Button variant="outline-secondary" size="md" onClick={handleSave}
                // href="/dokumenty"
                 style={{ marginBottom: 40 }}>
                    Zapisz
                </Button>
            </Container>
        </Container>
    );
};

export default InvoicingForm;