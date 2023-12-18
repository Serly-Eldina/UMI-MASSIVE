import { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import fotoprofile from '../images/fotoprofile.png';
import axios from 'axios';

function UserProfile() {
  const [userData, setUserData] = useState({
    name: '',
    status: '',
    email: '',
    password: ''
  });

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    try {
      const userId = 37; // Ganti dengan ID pengguna yang sedang masuk
      const response = await axios.get(`http://localhost:8001/getUserProfile/${userId}`);
      setUserData(response.data);
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };

  const handleSave = async () => {
    try {
      const userId = 123; // Ganti dengan ID pengguna yang sedang masuk
      await axios.post(`http://localhost:8001/updateUserProfile/${userId}`, userData);
      // Mungkin tambahkan logika lain setelah data berhasil diperbarui
    } catch (error) {
      console.error('Error updating user profile:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value
    }));
  };

  return (
    <>
      <Container className='mt-5 mb-5'>
        <Row>
          <Col className='foto-profile text-center' xs={{ order: 1, span: 12 }} md={{ order: 1, span: 6 }}>
            <img src={fotoprofile} alt="fotoprofile" />
            <div className='center mt-2'>
              <Button className='mx-4 mt-4' id='button-edit' variant="success">
                Edit
              </Button>
              <Button className='mx-4 mt-4' id='button-logout' variant="success">
                Logout
              </Button>
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
                    type="text"
                    placeholder="Status"
                    name="status"
                    value={userData.status}
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
                <Button variant="success" className='mb-4' onClick={handleSave}>
                  Save
                </Button>{' '}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default UserProfile;
