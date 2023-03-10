import { Container, Row, Col } from "react-bootstrap";

const Test = () => {
    return (
        <Container>
        <Row className="justify-content-center m-5">
            <Col md={5} className="text-center" style={{color:"white"}}>
                <h1 className="bg-box">Test page should only be available for logged in users!</h1>
            </Col>
        </Row>
    </Container>
    )
}

export default Test;