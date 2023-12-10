
import { Container, Row, Col } from 'react-bootstrap';


import gambarsirihgading from '../images/gambarsirih.png';

const Sirihgading = () => {
  return (
    <>
      <Container className=''>
        <Row className='tips-agleonema text-center pt-5'>
          <Col>
            <h2 className='judul'>Cara Merawat Tanaman Hias Sirih Gading</h2>
            <img className='gambarlidah img-fluid pt-4'
              src={gambarsirihgading}
              alt='sirihgading'
              style={{ width: '100%', maxWidth: '600px', height: 'auto' }} />
          </Col>
        </Row>
      </Container>

      <Container className='pt-5 pb-5'>
        <Row>
          <Col className='bahan pt-5'>
            <h5 >Bahan Yang Diperlukan :</h5>
            <ul>
              <li>Siapkan pot untuk tanaman Sirih Gading</li>
              <li>Siapkan pupuk sebagai media tanam</li>
              <li>Siapkan tanaman Sirih Gading</li>
            </ul>

          </Col>
        </Row>
        <Row >
          <Col className='pt-4 '>
            <h5>Tips & Trick</h5>
            <ol type='1'>
              <li>Memangkas tanaman secara rutin</li>
              <li>Memperbanyak tanaman </li>
              <li>Berikan pencahayaan yang cukup</li>
              <li>Jangan lupa menyiram tanaman </li>
              <li>Menggunakan tiang lumut atau moss pole</li>
              <li>Mencoba basketing, basketing adalah bentuk perbanyakan yang akan membantu sirih gading
                tumbuh lebih penuh dari
              </li>
            </ol>
          </Col>
        </Row>

        <Row >
          <Col className='pt-4 '>
            <h5>Hal yang harus diperhatikan :</h5>
            <ul>
              <li>Memeriksa kondisi tanaman</li>
              <li>Memilih pot</li>
              <li>Menjaga suhu ruangan</li>
              <li>Tidak menepatkan tanaman diruangan yang gelap</li>
              <li>Mendapatkan suhu matahari secara tidak langsung</li>
              <li>Melakukan penyiraman dengan rutin</li>
              <li>Memberikan pupuk tiap 2-3 bulan</li>
            </ul>

          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Sirihgading;
