import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Fade from "react-reveal/Fade";


const HomeForm = () => {


  return (
    <Navbar className="d-flex flex-column align-items-center">
        <Container>
            <Fade left cascade>
            <Navbar.Brand href="/" style={{ fontSize: 40 }}>
                Fakturowo
            </Navbar.Brand>
            </Fade>
            <Nav className="justify-content-end" >
                <Nav.Item>
                    <Nav.Link href="/">Start</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/wystaw">Wystaw</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="link-2">Dokumenty</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/register">Utwórz konto</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/login">Zaloguj</Nav.Link>
                </Nav.Item>
            </Nav>
        </Container>
        <Container style={{ marginTop: 80 }}>
            <Fade top cascade>
                <section className="div-1">
                    <h1 className="my-1 head-div-first-text">Wystawiaj faktury online</h1>
                    <h1 className="head-div-second-text">za darmo!</h1>
                    <p className="head-div-fourth-text">
                        Darmowy program do wystawiania faktur oraz innych dokumentów księgowych dla małych i średnich firm oraz dla 
                        osób prywatnych z obsługą wszystkich plików JPK. Program jest bardzo prosty i intuicyjny, przekonaj się jak łatwe
                        może być wystawianie faktur przez internet.
                    </p>
                </section>
            </Fade>
        </Container>
        <Container style={{ marginTop: 80 }}>
            <Fade top cascade>
                <section className="div-1">
                    <h1 className="my-1 head-div-first-text">Oszczędność czasu i pieniędzy</h1>
                    <p className="head-div-fourth-text">
                        Wiemy jak cenny jest Twój czas. Dlatego tworząc nasz serwis od początku stawialiśmy na ergonomię i szybkość
                        działania. Kazdy dokument wystawisz w ciągu minuty. Jednym kliknięciem wyślesz dokument do odpowiedniej osoby.
                    </p>
                </section>
            </Fade>
        </Container>
        <Container style={{ marginTop: 80 }}>
            <Fade top cascade>
                <section className="div-1">
                    <h1 className="my-1 head-div-first-text">Dostęp z każdego miejsca</h1>
                    <p className="head-div-fourth-text">
                        Nie chcesz być ograniczony programem fakturowym, który działa tylko w siedzibie Twojej firmy? Z nami wystawisz
                        fakturę gdziekolwiek jesteś, wystarczy komputer lub telefon z dostępem do internetu! Wystawianie faktur jest
                        napprawdę proste.
                    </p>
                </section>
            </Fade>
        </Container>
    </Navbar>
  );
};

export default HomeForm;



