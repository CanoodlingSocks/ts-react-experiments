import React, { useState} from 'react';
import { useNavigate, Navigate} from "react-router-dom";
import { PasswordInput } from '../shared/Form-components/password-input';
import { SubmitButton } from '../shared/Buttons/buttons';
import Form from 'react-bootstrap/Form';

interface User {
  email: string;
  password: string;
}

const Login = () => {

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [checkboxChecked, setCheckboxChecked] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  if (isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const user: User | null = JSON.parse(localStorage.getItem('user') || 'null');
    if (user && user.email === email && user.password === password) {
      localStorage.setItem("isLoggedIn", "true");
      console.log('Logged in!');
      navigate("/test", { replace: true }); 
    } else {
      console.log('Invalid email or password');
    }
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
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
        <Form className="rounded p-4 p-sm-3" onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
            type="email" 
            placeholder="Enter email" 
            onChange={handleEmailChange}
            />
            <Form.Text className="text-muted">
              We use your data *evil laugh*
            </Form.Text>
          </Form.Group>

          <PasswordInput showPassword={showPassword} toggleVisibility={toggleVisibility} handlePasswordChange={handlePasswordChange}/>

          <Form.Group className="mb-3">
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

          <SubmitButton label="Submit" />
          <span style={{ margin: '0 5px' }}>or</span>
          <a href="/register">Register here!</a>
        </Form>
      </div>
    </>
  );
};

export default Login;