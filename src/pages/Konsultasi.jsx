import { Container, Row, Col, Button, Image,Card,CardGroup} from 'react-bootstrap';

import konsultasi from '../images/konsultasi.png'



import Pakar1 from '../images/pakar1.png';
import Pakar2 from '../images/pakar2.png';
import Pakar3 from '../images/pakar3.png';
import Start from '../images/start.png';
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
            <Image style={{ width: "100%", height: "100%" }}
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
      <Card className="mb-3 mx-4">
        <Card.Img src={Pakar1}  />
        <Card.Body>
          <Card.Title>Budi Gunawan</Card.Title>
          <Card.Text>
          Ahli tanaman
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="mb-3 mx-4">
        <Card.Img src={Pakar2} />
        <Card.Body>
          <Card.Title>Karin Marina</Card.Title>
          <Card.Text>
          Ahli tanaman
          </Card.Text>
          <img src={Start} /> <img src={Start} /> <img src={Start} /> <img src={Start} /> <img src={Start} /> (1121)
        </Card.Body>
      </Card>

      <Card className="mb-3 mx-4">
        <Card.Img src={Pakar3}/>
        <Card.Body>
          <Card.Title>Dewi Santika</Card.Title>
          <Card.Text>
          Ahli tanaman
          </Card.Text>
        </Card.Body>
      </Card>
      
    </CardGroup>
    
      {/* batas baru */}
      
    </>
  )
}
export default Konsultasi
