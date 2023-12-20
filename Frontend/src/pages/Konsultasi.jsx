
import { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Image, Card, CardGroup, Modal } from 'react-bootstrap';
import konsultasi from '../images/konsultasi.png';
import imagebudi from '../images/konsulbudi.jpeg';
import imagekarin from '../images/konsulkarin.jpeg';
import imagedewi from '../images/konsuldewi.jpeg';
import axios from 'axios'; 

const Konsultasi = () => {
  const [loginStatus, setLoginStatus] = useState('');
  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
    checkLoginStatus();
  }, []);

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

  const handleChatButtonClick = (consultantId) => {
    if (loginStatus === 'Success') {
      console.log(`Memulai obrolan dengan konsultan ID: ${consultantId}`);
      window.location.href = `/konsul${consultantId.charAt(0).toUpperCase() + consultantId.slice(1)}`;
    } else {
      setShowLoginModal(true);
    }
  };

  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
  };
  return (
    <>
      <Container fluid className='mt-4 mb-5 pb-5'>
        <Row className="justify-content-center align-items-center">
          <Col md lg={{ span: 6, offset: 1 }} className='d-flex align-items-center'>
            <Container className="mt-5">
              <h1>Tanaman Hias mu punya masalah ?</h1><br />
              <p style={{ textAlign: 'justify' }}>
                Temukan solusi terkait permasalahan anda dalam merawat tanaman
                hias dengan para ahlinya, selain itu anda juga bisa bertanya
                tentang apapun seputar tanaman hias.
              </p><br />
              <Button type="button" className="btn btn-secondary btn-custom" >Mulaisekarang</Button>
            </Container>
          </Col>
          <Col md lg={{ span: 4, offset: 1 }} className='ml-md-5 mt-3 text-center' >
            <Image
              style={{ width: "100%", height: "100%" }}
              src={konsultasi}
              alt="Login Image"
              className="img-fluid mt-3"
            />
          </Col>
        </Row>
      </Container>

      <Container className='mb-4 pt-5 mt-5'>
        <h3>Rekomendasi Pakar</h3>
        <h5>Pilih pakar sesuai kebutuhan anda</h5>
      </Container>


      <CardGroup className="mx-5 px-4 mb-4 pb-4 ">
        <Card  style={{ width: '14rem', margin: '0.5rem' }}>
          <Card.Img variant="top" src={imagebudi} />
          <Card.Body >
          <Card.Title>Budi Gunawan</Card.Title>
          <Card.Text >
            Pengusaha tanaman hias berpengalaman dengan usaha 5 tahun, mengubah setiap tanaman menjadi karya seni.
          </Card.Text>
          <Card.Text className='text-start' >
            Rp10.000
          </Card.Text>
            <Button
              variant="success"
              style={{ position: 'absolute', bottom: '0', right: '0', margin: '1rem' }}
              onClick={() => handleChatButtonClick('budi')}>
              Chat
            </Button>
          </Card.Body>
        </Card>


        <Card style={{ width: '14rem', margin: '0.5rem' }}>
          <Card.Img variant="top" src={imagekarin} />
          <Card.Body >
          <Card.Title>Karin Marina</Card.Title>
          <Card.Text>
            Pengusaha tanaman hias berpengalaman dengan usaha 5 tahun, mengubah setiap tanaman menjadi karya seni.
          </Card.Text>
          <Card.Text className='text-start' >
            Rp10.000
          </Card.Text>
            <Button
              variant="success"
              style={{ position: 'absolute', bottom: '0', right: '0', margin: '1rem' }}
              onClick={() => handleChatButtonClick('karin')}>
              Chat
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '14rem', margin: '0.5rem' }}>
          <Card.Img variant="top" src={imagedewi} />
          <Card.Body >
          <Card.Title>Dewi Santika</Card.Title>
          <Card.Text>
            Pengusaha tanaman hias berpengalaman dengan usaha 5 tahun, mengubah setiap tanaman menjadi karya seni.
          </Card.Text>
          <Card.Text className='text-start' >
            Rp10.000
          </Card.Text>
            <Button
              variant="success"
              style={{ position: 'absolute', bottom: '0', right: '0', margin: '1rem' }}
              onClick={() => handleChatButtonClick('dewi')}>
              Chat
            </Button>
          </Card.Body>
        </Card>
      </CardGroup>



      <Modal show={showLoginModal} onHide={handleCloseLoginModal}>
        <Modal.Header closeButton>
          <Modal.Title>Notifikasi</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Anda belum login. Silahkan login terlebih dahulu untuk memulai konsultasi.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseLoginModal}>
            Cancel
          </Button>
          <Button variant="success" href="/Login">
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )  
}

export default Konsultasi;
