import { useState } from "react";
import { Form} from "react-bootstrap";
import { PasswordInput } from "../shared/Form-components/password-input";
import { SubmitButton, ResetButton, ButtonContainer } from "../shared/Buttons/buttons";

const Register = () => {
  const [validated, setValidated] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const toggleVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      return;
    }
    const firstName = (document.getElementById('firstName') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const password = (document.getElementById("password") as HTMLInputElement).value;
    const userData = {
      firstName,
      email,
      password,
    };
    localStorage.setItem("user", JSON.stringify(userData));
    setValidated(true);
    alert('User data saved successfully');
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
                id="firstName"
                />
            </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Register Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required id="email"/>
            <Form.Control.Feedback type="invalid" style={{  marginTop: "5px" }}>
              Please enter a valid email address.
            </Form.Control.Feedback>
          </Form.Group>
          <PasswordInput showPassword={showPassword} toggleVisibility={toggleVisibility} />
    <ButtonContainer>
      <SubmitButton label="Register"/>
      <ResetButton />
      </ButtonContainer>
        <div className="mt-3">
          Already have an account? <a href="/login">Log in here</a>
        </div>
        </Form>
      </div>
    </>
  );
};

export default Register;