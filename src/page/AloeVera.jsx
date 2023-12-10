
import { Container, Row, Col } from 'react-bootstrap';


import gambaraloevera from '../images/gambaraloevera.png';

const Aloevera = () => {
  return (
    <>
    <Container className=''>
      <Row className='tips-agleonema text-center pt-5'>
        <Col>
          <h2 className='judul'>Cara Merawat Tanaman Hias Aloe Vera</h2>
          <img className='gambarlidah img-fluid pt-4'  src={gambaraloevera} alt='aloevera' />
        </Col>
      </Row>
      </Container>

      <Container className='pt-5 pb-5'>
      <Row>
        <Col className='bahan pt-5'>
          <h5 >Bahan Yang Diperlukan :</h5>
          <ul>
            <li>Siapkan pot untuk tanaman Aloe Vera</li>
            <li>Siapkan pupuk sebagai media tanam</li>
            <li>Siapkan tanaman Aloe Vera</li>
          </ul>
          
        </Col>
      </Row>
      <Row >
        <Col className='pt-4 '>
        <h5>Tips & Trick</h5>
        <ol type='1'>
          <li>Pemilihan wadah atau pot</li>
            <li>Perhatikan lubang drainase</li>
              <li>Pilih wadah yang memiliki lubang sama</li>
              <li>Hindari penggunaan tanah kebun</li>
              <li>Taburi tanah atau pupuk dengan bubuk hormon supaya tanamannya cepat bertumbuh</li>
        </ol>
        </Col>
      </Row>

      <Row >
        <Col className='pt-4 '>
        <h5>Hal yang harus diperhatikan :</h5>
        <ul>
          <li>Biarkan kering</li>
          <li>Banyak orang yang salah paham bahwa semakin banyak air yang diberikan akan membuat tanaman hidup.</li>
          <li>Beri lebih banyak sinar matahari</li>
          <li>Jangan memberikan pot kecil</li>
          <li>Suhu yang tepat</li>
          <li>Beri pupuk secukupnya</li>
        </ul>

        </Col>
      </Row>
      </Container>
      </>
  );
};

export default Aloevera;
