import { Container, Row, Col } from 'react-bootstrap';


import gambarpeacelily from '../images/gambarpeacelily.png';

const Peacelily = () => {
  return (
    <>
      <Container className=''>
        <Row className='tips-agleonema text-center pt-5'>
          <Col>
            <h2 className='judul'>Cara Merawat Tanaman Hias Peacelily</h2>
            <img
              className='gambarlidah img-fluid pt-4'
              src={gambarpeacelily}
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
              <li>Siapkan pot untuk tanaman Peacelily</li>
              <li>Siapkan tanah sebagai media tanam</li>
              <li>Siapkan tanaman Peacelily</li>
            </ul>

          </Col>
        </Row>
        <Row >
          <Col className='pt-4 '>
            <h5>Tips & Trick</h5>
            <ol type='1'>
              <li>Pertama, pastikan agar memilih pot tanaman yang terbuat dari plastik dan memiliki
                lubang pada bagian bawahnya supaya air bisa mengalir keluar dengan mudah.</li>
              <li>Perlu menggunakan tanah atau media tanam yang tidak mudah menyerap air. Sebab Peacelily
                bisa cepat membusuk jika tanahnya terlalu basah dan lembab.</li>
              <li>Tanamkan bibit tanaman Sansevieria ke dalam media tanam dan biarkanlah selama beberapa
                waktu supaya ia bisa tumbuh dengan subur.</li>
              <li>Pastikan juga untuk selalu merawatnya dengan baik sesuai tips yang sudah dijelaskan sebelumnya.</li>
            </ol>
          </Col>
        </Row>

        <Row >
          <Col className='pt-4 '>
            <h5>Hal yang harus diperhatikan :</h5>
            <ul>
              <li>Konsisten dalam penyiraman setiap harinya</li>
              <li>Peace lily adalah tanaman yang tumbuh diiklim tropis, sehingga ia sangat menyukai kelembaban.</li>
              <li>Memberikan pupuk setiap bulan saja sudah cukup, karena terlalu banyak pupuk juga dapat menghambat pertumbuhan peace lily.</li>

            </ul>

          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Peacelily