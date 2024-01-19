import React, { useState } from 'react';
import { Form, Button, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import NavBar from '../Pages/NavBar';

const LoginForm = () => {
  const [loginType, setLoginType] = useState('driver'); // default login type

  const handleLoginTypeChange = (type) => {
    setLoginType(type);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your login logic here based on the selected loginType
    console.log(`Logging in as ${loginType}`);
  };

  return (
   <>
    <div>
      <NavBar/>
    </div >
    <div className='mt-20'>
    <Form   onSubmit={handleSubmit}>
      <ToggleButtonGroup
        type="radio"
        name="loginType"
        value={loginType}
        onChange={handleLoginTypeChange}
      >
        <ToggleButton value="driver">Driver</ToggleButton>
        <ToggleButton value="admin">Admin</ToggleButton>
      </ToggleButtonGroup>

      <Form.Group controlId="formUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter your username" />
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter your password" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Log In
      </Button>
    </Form>
    </div>
    </>
  );
};

export default LoginForm;
