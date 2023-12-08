import { Container, Row, Col } from 'react-bootstrap';

import gambarlidahmertua from '../images/gambarlidahmertua.png'



const lidahmertua = () => {
  return (
    <>
      <Container className=''>
        <Row className='tips-lidahmertua text-center pt-5'>
          <Col>
            <h2 className='judul'>Cara Merawat Tanaman Hias Lidah Mertua</h2>
            <img className='gambarlidah img-fluid pt-4' src={gambarlidahmertua} alt='Aglaonema' />
          </Col>
        </Row>
      </Container>
      <Container className='pt-5 pb-5'>
        <Row>
          <Col className='bahan pt-5'>
            <h5 >Bahan Yang Diperlukan :</h5>
            <ul>
              <li>Siapkan pot untuk tanaman Lidah Mertua</li>
              <li>Siapkan tanah sebagai media tanam</li>
              <li>Siapkan tanaman sanseviera</li>
            </ul>

          </Col>
        </Row>
        <Row >
          <Col className='pt-4 '>
            <h5>Tips & Trick</h5>
            <ol type='1'>
              <li>Pertama, pastikan agar memilih pot tanaman yang terbuat dari plastik dan memiliki lubang
                pada bagian bawahnya supaya air bisa mengalir keluar dengan mudah.</li>
              <li>Perlu menggunakan tanah atau media tanam yang tidak mudah menyerap air. Sebab lidah
                mertua bisa cepat membusuk jika tanahnya terlalu basah dan lembab.</li>
              <li>Tanamkan bibit tanaman Sansevieria ke dalam media tanam dan
                biarkanlah selama beberapa waktu supaya ia bisa tumbuh dengan subur.</li>
              <li>Pastikan juga untuk selalu merawatnya dengan baik sesuai tips yang sudah dijelaskan sebelumnya.</li>
            </ol>
          </Col>
        </Row>

        <Row >
          <Col className='pt-4 '>
            <h5>Hal yang harus diperhatikan :</h5>
            <ul>
              <li>Jangan terlalu sering disiram</li>
              <li>Tempatkan diruangan yang teduh</li>
              <li>Berikan Pupuk</li>
              <li>Gunakan Pestisida</li>
            </ul>

          </Col>
        </Row>
      </Container>

    </>
  )
}
export default lidahmertua
