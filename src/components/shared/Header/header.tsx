import Container from "react-bootstrap/Container";
import Nav from 'react-bootstrap/Nav';
import Navbar from "react-bootstrap/Navbar"
import ChubbyLogo from "./chubby-logo";

const Header = () => {
    return(
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="/">
            <ChubbyLogo/>{' '}
            Lelas CodeLab
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="login">Log In</Nav.Link>
            <Nav.Link href="react-bootstrap">React Bootstrap</Nav.Link>
            <Nav.Link href="#navitem3">Nav Item 3</Nav.Link>
          </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;