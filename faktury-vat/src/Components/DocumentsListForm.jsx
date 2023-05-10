import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Row, Col, Form, Modal, Input, Button } from 'react-bootstrap';
import { useState } from 'react';
import NavbarComponent from './navbar';

const DocumentsListForm = () => {

    return (
        <Container>
            <NavbarComponent/>
            <Navbar>
                <Container style={{ backgroundColor: "#e3e3e3", margin: '20px', marginTop: 80 }}>
                    <Navbar.Brand href="#home">Lista dokumentów</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Zalogowany jako: <a href="#login">Mark Otto</a>
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
                        <tr>
                            <td>Dokument1</td>
                            <td>
                                <Button variant="outline-secondary" size="sm">
                                    Edytuj
                                </Button>
                            </td>
                            <td>
                                <Button variant="outline-secondary" size="sm">
                                    Edytuj
                                </Button>
                            </td>
                            <td>
                                <Button variant="outline-secondary" size="sm">
                                    Edytuj
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td>Dokument2</td>
                            <td>
                                <Button variant="outline-secondary" size="sm">
                                    Edytuj
                                </Button>
                            </td>
                            <td>
                                <Button variant="outline-secondary" size="sm">
                                    Edytuj
                                </Button>
                            </td>
                            <td>
                                <Button variant="outline-secondary" size="sm">
                                    Edytuj
                                </Button>
                            </td>
                        </tr>
                         
 
                        <tr>
                            <td>Dokument3</td>
                            <td>
                                <Button variant="outline-secondary" size="sm">
                                    Edytuj
                                </Button>
                            </td>
                            <td>
                                <Button variant="outline-secondary" size="sm">
                                    Edytuj
                                </Button>
                            </td>
                            <td>
                                <Button variant="outline-secondary" size="sm">
                                    Edytuj
                                </Button>
                            </td>
                        </tr>
 
                        <tr>
                            <td>Dokument4</td>
                            <td>
                                <Button variant="outline-secondary" size="sm">
                                    Edytuj
                                </Button>
                            </td>
                            <td>
                                <Button variant="outline-secondary" size="sm">
                                    Edytuj
                                </Button>
                            </td>
                            <td>
                                <Button variant="outline-secondary" size="sm">
                                    Edytuj
                                </Button>
                            </td>
                        </tr>
 
 
                        <tr>
                            <td>Dokument5</td>
                            <td>
                                <Button variant="outline-secondary" size="sm">
                                    Edytuj
                                </Button>
                            </td>
                            <td>
                                <Button variant="outline-secondary" size="sm">
                                    Edytuj
                                </Button>
                            </td>
                            <td>
                                <Button variant="outline-secondary" size="sm">
                                    Edytuj
                                </Button>
                            </td>
                        </tr>
 
 
                        <tr>
                            <td>Dokument6</td>
                            <td>
                                <Button variant="outline-secondary" size="sm">
                                    Edytuj
                                </Button>
                            </td>
                            <td>
                                <Button variant="outline-secondary" size="sm">
                                    Edytuj
                                </Button>
                            </td>
                            <td>
                                <Button variant="outline-secondary" size="sm">
                                    Edytuj
                                </Button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>   
        </div>   
        </Container>
    );
};

export default DocumentsListForm;