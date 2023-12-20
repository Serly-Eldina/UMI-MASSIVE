import { Container, Row, Col } from 'react-bootstrap';


import gambarmonstera from '../images/gambarmonstera.png';

const Monstera = () => {
  return (
    <>
    <Container className=''>
      <Row className='tips-agleonema text-center pt-5'>
        <Col>
          <h2 className='judul'>Cara Merawat Tanaman Hias Aglaonema</h2>
          <img
              className='gambarlidah img-fluid pt-4'
              src={gambarmonstera}
              alt='Aglaonema'
              style={{ width: '100%', maxWidth: '600px', height: 'auto' }}
            />
        </Col>
      </Row>
      </Container>

      <Container className='pt-5 pb-5'>
      <Row>
        <Col className='bahan pt-5'>
          <h5 >Bahan Yang Diperlukan :</h5>
          <ul>
            <li>Siapkan pot untuk tanaman</li>
            <li>Siapkan tanah sebagai media tanam</li>
            <li>Siapkan tanaman Monstera</li>
          </ul>
          
        </Col>
      </Row>
      <Row >
        <Col className='pt-4 '>
        <h5>Tips & Trick</h5>
        <ol type='1'>
          <li>Perhatikan media tanam janda bolong, kamu bisa memilih menggunakan tanah gambut atau air</li>
          <li>Penyiraman yang rutin bisa dilakukan dua kali sehari, tetapi jangan sampai berlebihan karena akan membusuk.</li>
          <li>Letakkan di suhu yang tepat dan penyinaran yang cukup, jangan langsung terkena sinar matahari yang terlalu terik</li>
          <li>Supaya tumbuh subur, janda bolong perlu kamu beri pupuk di awal penanaman dan saat sudah semakin besar</li>
          <li>Ganti pot secara berkala jika tanaman sudah membesar dan semakin banyak supaya akar tanaman bisa tumbuh secara leluasa</li>
          <li>Pasang penyangga dan beri ruang supaya tumbuhan bisa merambat dan tetap tumbuh dengan baik</li>
        </ol>
        </Col>
      </Row>


      </Container>
    </>

  )
}

export default Monstera