import React from 'react';
import { Container, Row, Col, Button, Image, Card, CardGroup } from 'react-bootstrap';

import konsultasi from '../images/konsultasi.png';
import Pakar1 from '../images/pakar1.png';
import Pakar2 from '../images/pakar2.png';
import Pakar3 from '../images/pakar3.png';
import Start from '../images/start.png';
import imagebudi from '../images/konsulbudi.jpeg'
import imagekarin from '../images/konsulkarin.jpeg'
const Konsultasi = () => {
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


      <CardGroup className="mx-5 px-4 mb-4 pb-4">
        <Card style={{ width: '14rem', margin: '0.5rem' }}>
        <Card.Img variant="top" src={imagebudi}/>

            <Card.Title>Budi Gunawan</Card.Title>
            <Card.Text >
                Pengusaha tanaman hias berpengalaman dengan usaha 5 tahun, mengubah setiap tanaman menjadi karya seni.
            </Card.Text>
            <Card.Text className='text-start' >
              Rp10.000
            </Card.Text>
            <Card.Body className="text-end">
            <Button variant="success" href="/KonsultanBudi">Chat</Button>
          </Card.Body>
        </Card>


        <Card style={{ width: '14rem', margin: '0.5rem' }}>
        <Card.Img variant="top" src={imagekarin}/>
        
            <Card.Title>Karin Marina</Card.Title>
            <Card.Text>
            Pengusaha tanaman hias berpengalaman dengan usaha 5 tahun, mengubah setiap tanaman menjadi karya seni.
            </Card.Text>
            <Card.Text className='text-start' >
              Rp10.000
            </Card.Text>
            <Card.Body className="text-end">
            <Button variant="success">Chat</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '14rem', margin: '0.5rem' }}>
          <Card.Img variant="top" src={Pakar3} />
            <Card.Title>Dewi Santika</Card.Title>
            <Card.Text>
            Pengusaha tanaman hias berpengalaman dengan usaha 5 tahun, mengubah setiap tanaman menjadi karya seni.
            </Card.Text>
            <Card.Text className='text-start' >
              Rp10.000
            </Card.Text>
            <Card.Body className="text-end">
            <Button variant="success">Chat</Button>
          </Card.Body>
        </Card>
      </CardGroup>
    </>
  )
}

export default Konsultasi;
