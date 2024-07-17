import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

// Link: este componente habilita o SPA (Single-Page Application)
// Obs: Se houver links externos utilize a tag <a />

function Menu() {
    return (
        <header>
            <Navbar bg="info" variant="info" expand="md">
                <Container fluid>
                    <Link to="/">
                        <img src="/images/icone.png" width="60"/>
                    </Link>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav className="ms-auto">
                            <Link className="nav-link" to="/login">Login</Link>
                            <Link className="nav-link" to="/cadastro">Cadastro</Link>
                            <Link className="nav-link" to="/contato">Contato</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Menu;