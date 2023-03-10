import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

interface PasswordInputProps {
  showPassword: boolean;
  toggleVisibility: () => void;
  handlePasswordChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PasswordInput = ({ showPassword, toggleVisibility, handlePasswordChange }: PasswordInputProps) => {
  return (
    <Form.Group className="mb-3" style={{ marginBottom: "1rem" }}>
      <Form.Label>Password</Form.Label>
      <InputGroup>
        <FormControl
          type={showPassword ? "text" : "password"} 
          placeholder="Password"
          aria-label="Password"
          pattern="^(?=.*\d).{4,8}$"
          required
          id="password"
          onChange={handlePasswordChange}
        />
        <Button variant="outline-secondary" onClick={toggleVisibility}>
          <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
        </Button>
        <Form.Control.Feedback type="invalid" style={{ position: "absolute", marginTop: "40px" }}>
          Must contain a number and be at least 4 and max 8 characters long
        </Form.Control.Feedback>
      </InputGroup>
    </Form.Group>
  );
};