import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Fade from "react-reveal/Fade";
import NavbarComponent from './navbar';


const HomeForm = () => {


  return (
    <Container>
        <NavbarComponent/>
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
      </Container><Container style={{ marginTop: 80 }}>
              <Fade top cascade>
                  <section className="div-1">
                      <h1 className="my-1 head-div-first-text">Oszczędność czasu i pieniędzy</h1>
                      <p className="head-div-fourth-text">
                          Wiemy jak cenny jest Twój czas. Dlatego tworząc nasz serwis od początku stawialiśmy na ergonomię i szybkość
                          działania. Kazdy dokument wystawisz w ciągu minuty. Jednym kliknięciem wyślesz dokument do odpowiedniej osoby.
                      </p>
                  </section>
              </Fade>
          </Container><Container style={{ marginTop: 80 }}>
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
    </Container>
  );
};

export default HomeForm;



