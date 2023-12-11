
import { useState,  } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import fotologin from '../images/fotologin.png';
import logologin from '../images/logologin.png';
import googlelogo from '../images/googlelogo.png'

import validation from './RegisterValidation';

import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const Register = () => {

  const [values, setValues] = useState({
    name: '',
    email: '',
    password: ''
  })
  const navigate = useNavigate();
  const [errors, setErrors] = useState({})
  const handleInput = (event) => {
    setValues(prev => ({ ...prev, [event.target.name]: event.target.value }))
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validation(values));
    const hasErrors = Object.values(errors).some(error => error !== "");
 
    if (!hasErrors) {
       axios.post('http://localhost:8001/Register', { ...values })
          .then(res => {
             navigate('/Login');
          })
          .catch(err => console.log(err));
    }
 }
 

  return (
    <Container className="login-container d-flex flex-column align-items-center justify-content-center mt-5">
      <Row className="login-content align-items-center mb-5">
        {/* Login Form on the Left */}
        <Col className="login-form d-flex flex-column align-items-center justify-content-center"
        style={{
          borderRadius: '10px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          height: '550px',
        }}>
          <img
            src={logologin}
            alt="Login Image"
            style={{ width: '90px', height: '60px' }}
            className="mb-4 mt-4"
          />
          <h3 className="mb-4">Sign up to your Account</h3>
          {/* Google Login Button */}
          <div className="d-flex justify-content-center mb-3">
            <Button
              variant="outline-danger"
              
              className="mb-3 d-flex align-items-center google-login-button">
              <img className='mx-2' style={{height:'25px', width:'25px'}}
                src={googlelogo}/>
              Sign up with Google
            </Button>
          </div>
          <div className="text-center">
            <p>atau</p>
          </div>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="text-start mb-3" controlId="formBasicName">
              <Form.Control
                type="text"
                name="name"
                placeholder="Nama Lengkap"
                onChange={handleInput}/>
                {errors.name && <span className='text-danger'>{errors.name}</span>}
            </Form.Group>
            <Form.Group className="text-start mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                name="email"
                placeholder="Alamat email"
                onChange={handleInput} />
              {errors.email && <span className='text-danger'>{errors.email}</span>}
            </Form.Group>
            <Form.Group className="text-start mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleInput} />
              {errors.password && <span className='text-danger'>{errors.password}</span>}
            </Form.Group>
            <Button
              variant="secondary"
              type="submit"
              style={{
                backgroundColor: '#34745C',
                display: 'block',
                margin: 'auto',
                height: '35px',
                width:'220px'
                }}>
              Sign Up
            </Button>
            {/* Register below the login button */}
            <p className="mt-3 text-center mb-5">
              Sudah Punya Akun? <a href="/Login" style={{color:'#34745C'}}>Masuk</a>
            </p>
          </Form>
        </Col>
        {/* Image on the Right */}
        <Col className="image-login" >
          <img
            src={fotologin}
            alt="Login Image"
            className="img-fluid "
            style={{width:'450px',
            borderRadius: '10px',
          }}/>
        </Col>
      </Row>
    </Container>
  );
};



export default Register