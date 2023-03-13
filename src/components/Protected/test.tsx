import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import protectedAuthorize from "./protectedAuthorize";

interface Props {
  isLoggedIn: boolean;
}  

const Test = ({ isLoggedIn }: Props) => {
  // const navigate = useNavigate();

  // if (!isLoggedIn) {
  //   navigate("/login");
  //   return null;
  // }

  return (
    <Container>
      <Row className="justify-content-center m-5">
        <Col md={5} className="text-center" style={{color:"white"}}>
        <div>
      {isLoggedIn ? <h2>You are logged in!</h2> : <h2>Please log in.</h2>}
      <p>This is a protected route that requires authentication.</p>
    </div>
        </Col>
      </Row>
    </Container>
  );
}

const ProtectedTest = protectedAuthorize(Test)
export default ProtectedTest;