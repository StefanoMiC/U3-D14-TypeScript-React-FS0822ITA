import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, ChangeEvent, FormEvent } from "react";

const FormComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkboxValue, setCheckboxValue] = useState(false);

  const navigate = useNavigate();

  const handleFirstNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(firstName, lastName, checkboxValue);

    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" value={firstName} onChange={handleFirstNameChange} />
        {/* <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Surname</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter last name"
          value={lastName}
          onChange={e => {
            setLastName(e.target.value);
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Check
          type="checkbox"
          label="Check me out"
          checked={checkboxValue}
          onChange={e => {
            setCheckboxValue(e.target.checked);
          }}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
export default FormComponent;
