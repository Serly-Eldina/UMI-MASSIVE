
import { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import fotologin from '../images/fotologin.png';
import logologin from '../images/logologin.png';
import googlelogo from '../images/googlelogo.png'


const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login validation or send data to the server here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  useEffect(() => {
    // Load the Google API for sign-in
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/platform.js';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.gapi.load('auth2', () => {
        window.gapi.auth2.init({
          client_id: 'YOUR_GOOGLE_CLIENT_ID',
        });
      });
    };
  }, []);

  const handleGoogleLogin = () => {
    const auth2 = window.gapi.auth2.getAuthInstance();
    auth2.signIn().then((googleUser) => {
      const profile = googleUser.getBasicProfile();
      console.log('ID: ' + profile.getId());
      console.log('Name: ' + profile.getName());
      console.log('Email: ' + profile.getEmail());
      console.log('Image URL: ' + profile.getImageUrl());
    });
  };

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
              onClick={handleGoogleLogin}
              className="mb-3 d-flex align-items-center google-login-button">
              <img className='mx-2' style={{height:'25px', width:'25px'}}
                src={googlelogo}/>
              Sign up with Google
            </Button>
          </div>
          <div className="text-center">
            <p>atau</p>
          </div>
          <Form onSubmit={handleLogin}>
            <Form.Group className="text-start mb-3" controlId="formBasicEmail">
              <Form.Control
                type="name"
                placeholder="Nama Lengkap"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="text-start mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Alamat email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="text-start mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
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
              Sudah Punya Akun? <a href="#" style={{color:'#34745C'}}>Masuk</a>
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