import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { PasswordInput } from "../shared/Form-components/password-input";

const Register = () => {
  const [validated, setValidated] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  const toggleVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <>
      <div className="color-overlay d-flex justify-content-center align-items-center" style={{ position: 'absolute', zIndex: 2 }}>
      <Form className="rounded p-4 p-sm-3" noValidate validated={validated} onSubmit={handleSubmit} style={{ paddingBottom: "1rem" }}>
            <Form.Group className="mb-3" controlId="">
                <Form.Label>First Name</Form.Label>
                <Form.Control 
                type="text" 
                placeholder="Knut" 
                required
                />
            </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Register Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
            <Form.Control.Feedback type="invalid" style={{  marginTop: "5px" }}>
              Please enter a valid email address.
            </Form.Control.Feedback>
          </Form.Group>

          <PasswordInput showPassword={showPassword} toggleVisibility={toggleVisibility} />
    <div style={{  marginTop: "45px", marginRight: "20px" }}>
          <Button variant="primary" type="submit" style={{ marginRight: "10px" }} >
            Register
          </Button>
          <Button variant="secondary" type="reset">Reset</Button>
    </div>
        <div className="mt-3">
          Already have an account? <a href="/login">Log in here</a>
        </div>
        </Form>
      </div>
    </>
  );
};

export default Register;