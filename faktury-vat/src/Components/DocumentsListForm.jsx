import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import NavbarComponent from './navbar';
import AuthService from '../Service/AuthService';
import { Link } from "react-router-dom";
import axios from "axios";


const DocumentsListForm = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        // Fetch data from Spring Boot API
        axios.get('http://localhost:8080/invoices-vat/' + AuthService.getLoggedInUserEmail())
        .then(response => {
            console.log(response.data.length);
            setItems(response.data)
        } )
        .catch(error => console.log(error));
    }, []);

    return (
        <Container>
            <NavbarComponent/>
            <Navbar>
                <Container style={{ backgroundColor: "#e3e3e3", margin: '20px', marginTop: 80 }}>
                    <Navbar.Brand href="#home">Lista dokumentów</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Zalogowany jako: <a href="#login">{AuthService.getLoggedInUserEmail()}</a>
                    </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div class="row">
                <div class="table-responsive " >
                 <table class="table table-striped table-hover table-bordered">
                 <thead>
                        <tr>
                            <th>Nazwa </th>
                            <th>Dane firmy</th>
                            <th>Dane kontrahentów</th>
                            <th>Dane towarów/usług </th>
                        </tr>
                    </thead>
                    <tbody>

                        {items.map((item, index) => (
                        <tr key={item.id}>
                            <td>Dokument1</td>
                            <td>
                                <Link to={'/companydata'} state={item}>
                                    <Button variant="outline-secondary" size="sm">
                                        Edytuj
                                    </Button>
                                </Link>
                            </td>
                            <td>
                                <Link to={'/buyerdata'} state={item}>
                                    <Button variant="outline-secondary" size="sm">
                                        Edytuj
                                    </Button>
                                </Link>
                            </td>
                            <td>
                                <Link to={'/productdata'} state={item}>
                                    <Button variant="outline-secondary" size="sm">
                                        Edytuj
                                    </Button>
                                </Link> 
                            </td>
                        </tr>))}

                        {/* <tr>
                            <td>Dokument1</td>
                            <td>
                                <Button variant="outline-secondary" size="sm" href="/companydata">
                                    Edytuj
                                </Button>
                            </td>
                            <td>
                                <Button variant="outline-secondary" size="sm" href="/buyerdata">
                                    Edytuj
                                </Button>
                            </td>
                            <td>
                                <Button variant="outline-secondary" size="sm" href="/productdata">
                                    Edytuj
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td>Dokument2</td>
                            <td>
                                <Button variant="outline-secondary" size="sm" href="/companydata">
                                    Edytuj
                                </Button>
                            </td>
                            <td>
                                <Button variant="outline-secondary" size="sm" href="/buyerdata">
                                    Edytuj
                                </Button>
                            </td>
                            <td>
                                <Button variant="outline-secondary" size="sm" href="/productdata">
                                    Edytuj
                                </Button>
                            </td>
                        </tr>
                         
 
                        <tr>
                            <td>Dokument3</td>
                            <td>
                                <Button variant="outline-secondary" size="sm" href="/companydata">
                                    Edytuj
                                </Button>
                            </td>
                            <td>
                                <Button variant="outline-secondary" size="sm" href="/buyerdata">
                                    Edytuj
                                </Button>
                            </td>
                            <td>
                                <Button variant="outline-secondary" size="sm" href="/productdata">
                                    Edytuj
                                </Button>
                            </td>
                        </tr>
 
                        <tr>
                            <td>Dokument4</td>
                            <td>
                                <Button variant="outline-secondary" size="sm" href="/companydata">
                                    Edytuj
                                </Button>
                            </td>
                            <td>
                                <Button variant="outline-secondary" size="sm" href="/buyerdata">
                                    Edytuj
                                </Button>
                            </td>
                            <td>
                                <Button variant="outline-secondary" size="sm" href="/productdata">
                                    Edytuj
                                </Button>
                            </td>
                        </tr>
 
 
                        <tr>
                            <td>Dokument5</td>
                            <td>
                                <Button variant="outline-secondary" size="sm" href="/companydata">
                                    Edytuj
                                </Button>
                            </td>
                            <td>
                                <Button variant="outline-secondary" size="sm" href="/buyerdata">
                                    Edytuj
                                </Button>
                            </td>
                            <td>
                                <Button variant="outline-secondary" size="sm" href="/productdata">
                                    Edytuj
                                </Button>
                            </td>
                        </tr>
 
 
                        <tr>
                            <td>Dokument6</td>
                            <td>
                                <Button variant="outline-secondary" size="sm" href="/companydata">
                                    Edytuj
                                </Button>
                            </td>
                            <td>
                                <Button variant="outline-secondary" size="sm" href="/buyerdata">
                                    Edytuj
                                </Button>
                            </td>
                            <td>
                                <Button variant="outline-secondary" size="sm" href="/productdata">
                                    Edytuj
                                </Button>
                            </td>
                        </tr> */}
                    </tbody>
                </table>
            </div>   
        </div>   
        </Container>
    );
};

export default DocumentsListForm;