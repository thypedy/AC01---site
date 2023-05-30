import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarD(){
    return(
        <>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/contato">Contato</Nav.Link>
            <Nav.Link href="/sobre">Sobre</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </>
    )
}
export default NavbarD