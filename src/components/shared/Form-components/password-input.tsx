import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

interface PasswordInputProps {
  showPassword: boolean;
  toggleVisibility: () => void;
}

export const PasswordInput = ({ showPassword, toggleVisibility }: PasswordInputProps) => {
  return (
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <InputGroup>
        <FormControl
          type={showPassword ? "text" : "password"} 
          placeholder="Password"
          aria-label="Password"
        />
        <Button variant="outline-secondary" onClick={toggleVisibility}>
          <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
        </Button>
      </InputGroup>
    </Form.Group>
  );
};