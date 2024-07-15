import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import "..//Styles/Rodape.css"

function Rodape() {
    return (
        <footer className="rodape">
          <Navbar bg="dark" variant="dark" expand="lg" >
            <Container>

              <Navbar.Toggle />

              <Navbar.Collapse>
                <Nav className="ms-auto">
                  <Link className="nav-link" to="/politicas">Políticas de Privacidade</Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </footer>
    );
}

export default Rodape;