
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import NavbarBS from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import beranda1 from '../images/beranda1.png';
import Card from 'react-bootstrap/Card';
import rencana1 from '../images/rencana1.png';
import rencana2 from '../images/rencana2.png';
import rencana3 from '../images/rencana3.png';
import nutrisi from '../images/nutrisi.png';
import gabung from '../images/gabung.png';
import janda from '../images/jandabolong.png';
import buttonwood from '../images/buttonwood.png';
import peony from '../images/peony.png';
import sepatu from '../images/bungasepatu.png';
import user from '../images/user.png'
import logosementara from '../assets/logosementara.png'





const Home = () => {
  return (
    <>
      <NavbarBS expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <NavbarBS.Brand ><img src={logosementara} alt='logo' /></NavbarBS.Brand>
          <NavbarBS.Toggle aria-controls="navbarScroll" />
          <NavbarBS.Collapse id="navbarScroll">
            <Nav
              className="navbar-custom me-auto my-2 my-lg-0"
              style={{ maxHeight: 'auto' }}
              navbarScroll
            >

              <Nav.Link href="/">Beranda</Nav.Link>
              <Nav.Link href="Login">Tentang Kami</Nav.Link>
              <Nav.Link href="Register">Informasi</Nav.Link>
              <Nav.Link href="#action2">Konsultasi</Nav.Link>

            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </NavbarBS.Collapse>
        </Container>
      </NavbarBS>

      <div className='container1'>
        <div className='container2'>
          <p>Mulailah untuk Merawat Tanaman</p>
          <p>Hiasmu</p>
          <p>Selamat datang di Tanaman Hias, di mana setiap detik adalah perjalanan</p>
          <p>baru dalam merawat kehidupan hijau. Mari jelajahi, belajar, dan berbagi</p>
          <p>cinta terhadap tanaman hias. Inilah tempatnya, di mana setiap kuncup</p>
          <p>adalah awal dari petualangan yang tak terlupakan.</p>
          <button type="button" className="btn btn-success" >Selengkapnya</button>
        </div>
        <div className='container3'>
          <img
            src={beranda1}
            alt="Login Image"
          />
        </div>
      </div>


      <div className='rencana'>
        <div className='judul'>
          <p>Memulai Rencana Anda dengan benar</p>
          <p>Ikuti Instruksi untuk lebih lanjut</p>
        </div>

        <div className='isi'>
          <div className='isi1'>
            <div style={{ width: '18rem' }}>
              <img src={rencana1} />
              <div>
                <div style={{ fontWeight: 'bolder' }}>Penyiraman yang Tepat</div>
                <div className='textrencana' style={{ marginTop: '23px' }}>
                  Tentukan jadwal penyiraman berdasarkan jenis tanaman, kondisi iklim, dan musim. Pastikan tanah tidak terlalu kering atau terlalu basah.
                </div>
              </div>
            </div>
          </div>

          <div className='isi2'>
            <div style={{ width: '18rem' }}>
              <img src={rencana2} />
              <div>
                <div style={{ fontWeight: 'bolder' }}>Pemupukan Rutin</div>
                <div className='textrencana' style={{ marginTop: '23px' }}>
                  Berikan tanaman nutrisi yang diperlukan dengan memilih pupuk yang sesuai dengan jenis tanaman dan fase pertumbuhannya.
                </div>
              </div>
            </div></div>

          <div className='isi3'>
            <div style={{ width: '18rem' }}>
              <img src={rencana3} />
              <div>
                <div style={{ fontWeight: 'bolder' }}>Perhatikan Pencahayaan</div>
                <div className='textrencana' style={{ marginTop: '23px' }}>
                  Beberapa tanaman membutuhkan sinar matahari langsung, dan ada yang di tempat teduh Pahami preferensi pencahayaan tanaman Anda.
                </div>
              </div>
            </div></div>
        </div>
      </div>

      <div className='nutrisi'>
        <div className='gambarnutrisi'>
          <img
            src={nutrisi}
            alt="Login Image"
          />
        </div>

        <div className='textnutrisi'>
          <div className='judulnutrisi' style={{ width: '500px' }}>Penuhi Nutrisi tanaman anda dengan baik</div>

          <div className='listnutrisi'>
            <p>1. Awasi tanaman Anda untuk tanda-tanda kekurangan nutrisi, seperti daun kuning atau pertumbuhan yang lambat.</p>
            <p>2. Sebelum memberikan nutrisi tambahan, lakukan analisis tanah untuk mengetahui tingkat keasaman (pH) dan kandungan nutrisinya. </p>
            <p>3. Pilih pupuk yang sesuai dengan jenis tanaman hias Anda. Pupuk umumnya mengandung tiga elemen utama: nitrogen (N), fosfor (P), dan kalium (K).</p>
            <p>4. Tentukan jadwal pemupukan yang konsisten sepanjang musim tumbuh. </p>
            <p>5. Pastikan tanaman menerima cukup air, karena nutrisi larut dalam air dan diserap oleh akar tanaman.</p>
          </div>

        </div>
      </div>

      <div className='gabung'>
        <div className='textnutrisi'>
          <div className='judulnutrisi' style={{ width: '500px' }}>Bergabung bersama kami
            untuk merawat tanaman anda</div>
          <div className='listnutrisi'>
            <p>1. Dapatkan informasi terbaru tentang tren tanaman hias, perawatan terbaru, dan inovasi di dunia Tanaman Hias.</p>
            <p>2. Saling berbagi pengalaman dan pengetahuan dengan anggota komunitas lainnya. Tanyakan pertanyaan dan dapatkan jawaban dari mereka yang memiliki pengalaman serupa.  </p>
            <p>3. Dapat berkonsultasi dengan ahli dalam bidang tanaman hias untuk menanyakan masalah tanaman hias anda.</p>
          </div>
        </div>

        <div className='gambarnutrisi'>
          <img
            src={gabung}
            alt="Login Image"
          />
        </div>
      </div>


      <div className='artikel'>
        <p>Artikel</p>

        <div className='artikel1'>
          <div><Card style={{ width: '270px', height: '530px', marginLeft: '70px', marginTop: '10px' }}>
            <img src={janda} />
            <Card.Body>
              <Card.Title style={{ fontWeight: 'bold', color: '#044F1E', fontSize: '19px' }}>Janda Bolong (Monstera)</Card.Title>
              <Card.Text style={{ fontSize: '16px', marginTop: '20px' }}>
                Tanaman kekinian Monstera atau dikenal sebagai nama tanaman janda bolong menjadi tanaman hias unik yang berasal dari daerah tropis Amerika yang menjadikan banyak peminat di tahun ini.
              </Card.Text>
              <img src={user} />
            </Card.Body>
          </Card></div>
          <div><Card style={{ width: '270px', height: '530px', margin: '10px' }}>
            <img src={buttonwood} />
            <Card.Body>
              <Card.Title style={{ fontWeight: 'bold', color: '#044F1E', fontSize: '19px' }}>Pohon Buttonwood</Card.Title>
              <Card.Text style={{ fontSize: '16px', marginTop: '20px' }}>
                Buttonwood adalah pohon yang bercabang rendah, berbatang banyak, semak, selalu hijau dengan tinggi rata-rata 35 kaki, dan sering dikaitkan dengan komunitas bakau.
              </Card.Text>
              <img src={user} style={{ marginTop: '25px' }} />
            </Card.Body>
          </Card></div>
          <div><Card style={{ width: '270px', height: '530px', margin: '10px' }}>
            <img src={peony} />
            <Card.Body>
              <Card.Title style={{ fontWeight: 'bold', color: '#044F1E', fontSize: '19px' }}>Bunga Peony</Card.Title>
              <Card.Text style={{ fontSize: '16px', marginTop: '20px' }}>
                Bunga peony merupakan salah satu tanaman hias yang berasal dari Asia, Eropa, dan Amerika Utara hingga Barat.
              </Card.Text>
              <img src={user} style={{ marginTop: '73px' }} />
            </Card.Body>
          </Card></div>
          <div><Card style={{ width: '270px', height: '530px', margin: '10px' }}>
            <img src={sepatu} />
            <Card.Body>
              <Card.Title style={{ fontWeight: 'bold', color: '#044F1E', fontSize: '19px' }}>Bunga Sepatu</Card.Title>
              <Card.Text style={{ fontSize: '16px', marginTop: '20px' }}>
                Bunga sepatu adalah tanaman yang kaya akan antioksidan. Antioksidan ini sangatlah baik untuk tubuh kita dan membantu dalam menangkal radikal bebas yang bisa.
              </Card.Text>
              <img src={user} style={{ marginTop: '26px' }} />
            </Card.Body>
          </Card></div>
        </div>

      </div>

    </>
  )
}

export default Home