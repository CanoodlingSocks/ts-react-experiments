import Container from "react-bootstrap/Container";
import Nav from 'react-bootstrap/Nav';
import Navbar from "react-bootstrap/Navbar"
import ChubbyLogo from "./chubby-logo";

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <ChubbyLogo />{' '}
                        Lelas CodeLab
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="login">Log In</Nav.Link>
                            <Nav.Link href="react-bootstrap">React Bootstrap</Nav.Link>
                            <Nav.Link href="calendar">Calendar</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;