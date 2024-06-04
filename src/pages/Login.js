// src/pages/Login.js
import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { login } from '../JS/Actions/AuthActions';
import { useNavigate } from 'react-router-dom';
import './Login.css';  // Importez le fichier CSS

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState({});

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    dispatch(login(user, navigate));
  };

  return (
    <div className="login-container">
      <Container>
        <Form className="login-form">
          <h2 className="login-title">Login</h2>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email" onChange={(e) => handleChange(e)} type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" onChange={(e) => handleChange(e)} type="password" placeholder="Enter your password" />
          </Form.Group>
          <Button onClick={() => handleLogin()} variant="primary" className="login-button">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
