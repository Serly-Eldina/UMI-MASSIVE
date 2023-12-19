// UserProfile.jsx
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Form, Modal } from 'react-bootstrap';
import fotoprofile from '../images/fotoprofile.png';
import axios from 'axios';

function UserProfile() {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [loginStatus, setLoginStatus] = useState('');

  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [modifiedUserData, setModifiedUserData] = useState({});
  const [originalUserData, setOriginalUserData] = useState({});


  useEffect(() => {
    const fetchData = async () => {
      await checkLoginStatus();
      if (loginStatus === 'Success') {
        await fetchUserProfile();
      }
    };

    fetchData();
  }, [loginStatus]);
  const checkLoginStatus = async () => {
    try {
      const response = await axios.post('http://localhost:8001/check-login', {
        email: localStorage.getItem('loggedInUserEmail'),
      });
      setLoginStatus(response.data);
    } catch (error) {
      console.error('Error checking login status:', error);
    }
  };

  const fetchUserProfile = async () => {
    try {
      const userEmail = localStorage.getItem('loggedInUserEmail');
      const response = await axios.get(`http://localhost:8001/getUserProfile/${encodeURIComponent(userEmail)}`);

      if (response.data) {
        setUserData(response.data);
        setOriginalUserData(response.data); // Set data lama di sini
        console.log('Fetched user data:', response.data);
      } else {
        console.error('Empty user data response');
      }
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value
    }));
  };

  const [showLogoutConfirmationModal, setShowLogoutConfirmationModal] = useState(false);

  const handleLogout = async () => {
    setShowLogoutConfirmationModal(true);
  };

  const handleLogoutConfirmed = async () => {
    try {
      await axios.post('http://localhost:8001/logout', {
        email: localStorage.getItem('loggedInUserEmail'),
      });

      localStorage.removeItem('loggedInUserEmail');
      window.location.href = '/Login';
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  const handleLogoutCancel = () => {
    setShowLogoutConfirmationModal(false);
  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    // Menyimpan data yang akan diubah
    const userEmail = localStorage.getItem('loggedInUserEmail');
    const updatedUserData = {
      name: userData.name,
      email: userData.email,
      password: userData.password,
    };

    setModifiedUserData(updatedUserData);

    // Menampilkan modal konfirmasi
    setShowConfirmationModal(true);
  };
  const handleSaveConfirmed = async () => {
    try {
      const userEmail = localStorage.getItem('loggedInUserEmail');
      const updatedUserData = {
        name: userData.name,
        email: userData.email,
        password: userData.password,
      };

      await axios.post(`http://localhost:8001/updateUserProfile/${encodeURIComponent(userEmail)}`, updatedUserData);

      console.log('User data updated successfully:', updatedUserData);
      // Setelah berhasil disimpan, sembunyikan modal dan reset data yang akan diubah
      setShowConfirmationModal(false);
      setModifiedUserData({});
    } catch (error) {
      console.error('Error updating user profile:', error);
      // Tambahkan logika untuk menangani kesalahan, misalnya menampilkan pesan kesalahan kepada pengguna
    }
  };

  const handleCancel = () => {
    // Mereset data ke data lama
    setUserData(originalUserData);
    setShowConfirmationModal(false);
    setModifiedUserData({});
  };



  return (
    <>
      {loginStatus === 'Success' ? (
        <Container className='mt-5 mb-5'>
          <Row>
            <Col className='foto-profile text-center' xs={{ order: 1, span: 12 }} md={{ order: 1, span: 6 }}>
              <img src={fotoprofile} alt="fotoprofile" />
              <div className='center mt-2'>
                <Button className='mx-4 mt-4' id='button-edit' variant="success">
                  Edit
                </Button>
                <Button className='mx-4 mt-4' id='button-logout' variant="success" onClick={handleLogout}>
                  Logout
                </Button>

                <Modal show={showLogoutConfirmationModal} onHide={handleLogoutCancel}>
                  <Modal.Header closeButton>
                    <Modal.Title>Confirmation</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    Are you sure you want to logout?
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleLogoutCancel}>
                      Cancel
                    </Button>
                    <Button variant="success" onClick={handleLogoutConfirmed}>
                      Logout
                    </Button>
                  </Modal.Footer>
                </Modal>

              </div>
            </Col>
            <Col className='isi-form pt-5' xs={{ order: 2, span: 12 }} md={{ order: 2, span: 6 }}>
              <div className='col-md-10'>
                <div id='form-profile' className='container2'>
                  <h5 className='mb-4'>Account Setting</h5>
                  <Form.Group className="mb-4">
                    <Form.Control
                      type="text"
                      placeholder="Name"
                      name="name"
                      value={userData.name}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Control
                      type="email"
                      placeholder="Email address"
                      name="email"
                      value={userData.email}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={userData.password}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Button variant="success" className='mb-4' onClick={handleSubmit}>
                    Save
                  </Button>{' '}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      ) : (
        <Container className=' mt-5 mb-5'>
          <Row>
            <Col>
              <h4>Silahkan Login Untuk Mengakses Profil</h4>
              <Link to="/Login">
                <Button type="button" className="btn btn-secondary btn-custom" >Login</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      )}
      <Modal show={showConfirmationModal} onHide={() => setShowConfirmationModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to update your profile?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleSaveConfirmed}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UserProfile;
