import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { logout } from '../../firebase/auth'
import { UsuarioContext } from '../../contexts/UsuarioContext'

const Header = () => {
  const usuario = useContext(UsuarioContext)
  const navigate = useNavigate();

  function handleLogout(){
    logout().then( ()=> {
      navigate("/")
    })
  }

  return (
    <header>
<header>
            <Navbar bg="warning" variant="warning" expand="md">
                <Container fluid>
                    <Link to="/login">
                        <img src="/images/icone.png" width="270"/>
                    </Link>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                    <Nav className="ms-auto">
                            {usuario && <Link className="nav-link" to="/filmes">filmes</Link>}
                            {!usuario && <Link className="nav-link" to="/login">Login</Link>}
                            {!usuario && <Link className="nav-link" to="/cadastro">Cadastro</Link>}
                            <Link className="nav-link" to="/ajuda">Ajuda</Link>
                            {usuario && <span className="text-light nav-link">{usuario.displayName}</span>}
                            {usuario && <Button variant="outline-light" onClick={handleLogout}>
                                Sair
                            </Button>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    </header>
  )
}

export default Header