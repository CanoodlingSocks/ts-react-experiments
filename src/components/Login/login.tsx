import React, { useState } from 'react';
import { PasswordInput } from '../shared/Form-components/password-input';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = () => {
  const [validated, setValidated] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [checkboxChecked, setCheckboxChecked] = useState<boolean>(false);

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

  const handleCheckboxChange = () => {
    setCheckboxChecked(!checkboxChecked);
  };

  return (
    <>
      <div className="color-overlay d-flex justify-content-center align-items-center" style={{ position: 'absolute', zIndex: 2 }}>
        <Form className="rounded p-4 p-sm-3">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We use your data *evil laugh*
            </Form.Text>
          </Form.Group>

          <PasswordInput showPassword={showPassword} toggleVisibility={toggleVisibility} />

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Check here to sell me your firstborn"
              checked={checkboxChecked}
              onChange={handleCheckboxChange}
              disabled={checkboxChecked}
            />
            {checkboxChecked && (
              <Form.Text className="evil-laugh">No takebacksies!</Form.Text>
            )}
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Login;