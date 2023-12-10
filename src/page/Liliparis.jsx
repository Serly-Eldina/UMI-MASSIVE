import { Container, Row, Col } from 'react-bootstrap';


import gambarliliparis from '../images/gambarliliparis.png';

const Liliparis = () => {
  return (
    <>
      <Container className=''>
        <Row className='tips-agleonema text-center pt-5'>
          <Col>
            <h2 className='judul'>Cara Merawat Tanaman Hias Aglaonema</h2>
            <img
              className='gambarlidah img-fluid pt-4'
              src={gambarliliparis}
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
              <li>Siapkan pot untuk tanaman Agloenema</li>
              <li>Siapkan tanah sebagai media tanam</li>
              <li>Siapkan tanaman Aglaoenema</li>
            </ul>

          </Col>
        </Row>
        <Row >
          <Col className='pt-4 '>
            <h5>Tips & Trick</h5>
            <ol type='1'>
              <li>Pilih tanah atau media tanam dengan drainase yang baik</li>
              <li>Beri naungan yang teduh atau jauhkan dari sinar matahari langsung</li>
              <li>Jaga agar kelembapan dan suhu ruangan sedang dan konsisten.</li>
              <li>Siram tanaman lili paris Anda dengan air suling atau air murni.</li>
              <li>Jaga agar tanah tetap lembap, tetapi tidak basah</li>
              <li>Beri pupuk sekali atau dua kali dalam sebulan saat musim kemarau</li>
              <li>Pindahkan tanaman lili paris Anda jika tanaman sudah tumbuh hingga keluar potnya</li>
              <li>Kembang biakkan tanaman besar</li>
              <li>Pangkas daun-daun kering dengan gunting</li>
              <li>Atasi tungau laba-laba dengan insektisida alami</li>
              <li>tasi tanaman yang warnanya memucat dengan mengurangi paparan sinar matahari</li>
            </ol>
          </Col>
        </Row>

        <Row >
          <Col className='pt-4 '>
            <h5>Hal yang harus diperhatikan :</h5>
            <ul>
              <li>
                Tanaman lili paris baik untuk membersihkan udara dari partikel polutan. Tanaman ini
                bahkan ditanam di pesawat antariksa untuk membersihkan udara</li>
              <li>Lili paris beracun bagi kucing, meski tampaknya tidak bagi binatang lainnya.
                Namun, mencegah semua jenis hewan peliharaan memakan tanaman ini merupakan hal yang lebih bijaksana</li>
            </ul>

          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Liliparis