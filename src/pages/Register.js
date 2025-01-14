import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../JS/Actions/AuthActions';
import './Register.css';  // Importez le fichier CSS

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [newUser, setNewUser] = useState({});

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleRegister = () => {
    dispatch(register(newUser, navigate));
  };

  return (
    <div className="register-container">
      <Container>
        <Form className="register-form">
          <h2 className="register-title">Register</h2>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control name="name" onChange={(e) => handleChange(e)} type="text" placeholder="Enter your name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email" onChange={(e) => handleChange(e)} type="email" placeholder="Enter your email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" onChange={(e) => handleChange(e)} type="password" placeholder="Enter your password" />
          </Form.Group>
          <Button onClick={handleRegister} variant="primary" className="register-button">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Register;
