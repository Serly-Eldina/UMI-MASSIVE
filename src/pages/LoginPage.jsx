import { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import fotologin from '../images/fotologin.png';
import logologin from '../images/logologin.png';
<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.min.css';
=======
import '../css/login.css';
>>>>>>> 14b04bc0144be7acac16f4f3bf7da3a18829e8ea

const LoginPage = () => {
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
    <Container className="login-container">
      <Row className="login-content">
        {/* Login Form on the Left */}
        <Col md={6} className="login-form d-flex flex-column align-items-center justify-content-center">
          <img
            src={logologin}
            alt="Login Image"
            style={{ width: '90px', height: '60px' }}
            className="mb-4"
          />
          <h3 className="mb-4">Log in to your Account</h3>

          {/* Google Login Button (centered horizontally) */}
          <div className="d-flex justify-content-center mb-3">
            <Button
              variant="outline-danger"
              onClick={handleGoogleLogin}
              className="d-flex align-items-center google-login-button"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="Google Logo"
                className="google-logo me-2"
              />
              Login with Google
            </Button>
          </div>

          {/* Additional text or content below the button */}
          <div className="text-center">
            <p>atau</p>
          </div>

          <Form onSubmit={handleLogin}>
            <Form.Group className="text-start mb-3" controlId="formBasicEmail">
              
              <Form.Control
                type="email"
                placeholder="Enter email"
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

            {/* Forgot Password on the right */}
            <p className="text-end mt-4">
              <a href="#">Forgot Password?</a>
            </p>
            
            <Button
              variant="primary"
              type="submit"
              style={{
                backgroundColor: '#34745C',
                display: 'block',
                margin: 'auto',
                height: '35px',
                marginTop: '20px',
              }}
            >
              Login
            </Button>
           

            {/* Register below the login button */}
            <p className="mt-3 text-center">
              Belum Punya Akun? <a href="#">Register</a>
            </p>
          </Form>
        </Col>

        {/* Image on the Right */}
        <Col md={6} className="login-image text-center">
          <img
            src={fotologin}
            alt="Login Image"
            className="img-fluid"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
