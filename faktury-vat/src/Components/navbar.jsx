import React from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import AuthService from '../Service/AuthService';

const NavbarComponent = () => {
    const changeBackground = () => {
      let header = document.getElementsByClassName("header-nav")[0];
      if (window.scrollY < 200) {
        header.classList.remove("sticky");
      } else {
        header.classList.add("sticky");
      }
    };

    window.addEventListener("scroll", changeBackground);
    return (
      <>
        <Navbar
          className="header-nav"
          fixed="top"
          collapseOnSelect
          bg="dark"
          expand="lg"
        >
          <Fade left cascade>
          <Navbar.Brand style={{ marginLeft: 50 }} href="#home" className="brand-name ml-5">
          Fakturowo
          </Navbar.Brand>
          </Fade>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse style={{ right: 50, position: 'absolute' }} id="responsive-navbar-nav">
            <Nav className="ml-auto mr-5">
              <Fade right cascade>
              <Nav.Link className="px-3" href="/">
                Start
              </Nav.Link>
              <Nav.Link className="px-3" href="/wystaw">
                Wystaw
              </Nav.Link>
              <Nav.Link className="px-3" href="/dokumenty">
                Dokumenty
              </Nav.Link>

              {
                (!AuthService.isUserLoggedIn()) 
                  ? <Nav.Link
                  className="px-3"
                  rel="noopener noreferrer"
                  href={"/login"}
                >
                  <Button variant="outline-success" className="button">Zaloguj</Button>
                </Nav.Link> :
                <Button
                variant="outline-success"
                className="button"
                style={{color: 'red', visibility: AuthService.isUserLoggedIn() ? 'none' : 'visible'}}
                onClick={() => {
                  AuthService.logout();
                  window.location.reload(true);
                } }>Wyloguj</Button>
              }    
              </Fade>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
}

export default NavbarComponent;