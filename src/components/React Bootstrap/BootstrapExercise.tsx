import { Container, Row, Col, Button } from "react-bootstrap";

const BootstrapExercise = () => {
    return (
        <Container fluid style={{height:"90vh", overflow: "hidden"}}>
            <Row style={{color:"white"}} className="center justify-content-md-center align-items-center">
                <Col md="auto">
                    <h1 className="bg-box">Boostrap Exercise Page</h1>
                </Col>
            </Row>
            <Row className="justify-content-center text-center">
                <Col className="bg-box" md={4} lg={2} xl={2}>
                <Button  style={{ width: "50%", margin: "5px"}} href="accordion">Accordions</Button>
                <Button style={{ width: "50%", margin: "5px"}} href="#">Boostrap Example 2</Button>
                <Button style={{ width: "50%", margin: "5px"}} href="#">Boostrap Example 3</Button>
                </Col>
            </Row>
        </Container>
    )

}

export default BootstrapExercise;