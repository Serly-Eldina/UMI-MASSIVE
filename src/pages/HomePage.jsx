
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
import logonav from '../images/logonav.png'
import '../css/hompage.css'





const Home = () => {
  return (
    <>
      <NavbarBS expand="lg" className="bg-body-tertiary" sticky='top'>
        <Container fluid>
          <NavbarBS.Brand>
            <img src={logonav} alt='logo' style={{ marginLeft:'20%' , width: '90px', height: '60px', paddingBottom: '10px' }} />
          </NavbarBS.Brand>
          <NavbarBS.Toggle aria-controls="navbarScroll" />
          <NavbarBS.Collapse id="navbarScroll">
            <Nav
              className="navbar-custom me-auto me-2 my-2 my-lg-0"
              style={{ maxHeight: 'auto', marginLeft: '300px' }}
              navbarScroll

            >
              <Nav.Link href="/">Beranda</Nav.Link>
              <Nav.Link href="tentangkami">Tentang Kami</Nav.Link>
              <Nav.Link href="Informasi">Informasi</Nav.Link>
              <Nav.Link href="#action2">Konsultasi</Nav.Link>
            </Nav>
            <Form className="d-flex" style={{ marginRight: '20px' }}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <NavbarBS.Brand>
              <img src={logosementara} alt='logo' />
            </NavbarBS.Brand>
          </NavbarBS.Collapse>
        </Container>
      </NavbarBS>

      <div className="col-md-12">
        <div className='container1'>

          <div className='col-md-8'>
            <div className='container2'>
              <p>Mulailah untuk Merawat Tanaman</p>
              <p>Hiasmu</p>
              <p>Selamat datang di Tanaman Hias, di mana setiap detik adalah perjalanan</p>
              <p>baru dalam merawat kehidupan hijau. Mari jelajahi, belajar, dan berbagi</p>
              <p>cinta terhadap tanaman hias. Inilah tempatnya, di mana setiap kuncup</p>
              <p>adalah awal dari petualangan yang tak terlupakan.</p>
              <button type="button" className="btn btn-success" >Selengkapnya</button>
            </div>
          </div>

          <div className='col-md-4'>
            <div className='container3'>
              <img
                src={beranda1}
                alt="Login Image"
              />
            </div>
          </div>

        </div>
      </div>

      <div style={{paddingTop:'50px'}} className='col-md-12'>
        <div className='rencana'>
          <div className='judul'>
            <p>Memulai Rencana Anda dengan benar</p>
            <p>Ikuti Instruksi untuk lebih lanjut</p>
          </div>

          <div className='isi'>

            <div className='col-md-4'>
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
              </div> </div>

            <div className='col-md-4'>
              <div className='isi2'>
                <div style={{ width: '18rem' }}>
                  <img src={rencana2} />
                  <div>
                    <div style={{ fontWeight: 'bolder' }}>Pemupukan Rutin</div>
                    <div className='textrencana' style={{ marginTop: '23px' }}>
                      Berikan tanaman nutrisi yang diperlukan dengan memilih pupuk yang sesuai dengan jenis tanaman dan fase pertumbuhannya.
                    </div>
                  </div>
                </div></div></div>

            <div className='col-md-4'>
              <div className='isi3'>
                <div style={{ width: '18rem' }}>
                  <img src={rencana3} />
                  <div>
                    <div style={{ fontWeight: 'bolder' }}>Perhatikan Pencahayaan</div>
                    <div className='textrencana' style={{ marginTop: '23px' }}>
                      Beberapa tanaman membutuhkan sinar matahari langsung, dan ada yang di tempat teduh Pahami preferensi pencahayaan tanaman Anda.
                    </div>
                  </div>
                </div></div></div>
          </div>
        </div>
      </div>

      <div className='col-md-12'>
        <div className='nutrisi'>

          <div className='col-md-5'>
            <div className='gambarnutrisi'>
              <img
                src={nutrisi}
                alt="Login Image"
              />
            </div></div>

          <div className='col-md-7'>
            <div className='textnutrisi'>
              <div className='judulnutrisi' style={{ width: '500px' }}>Penuhi Nutrisi tanaman anda dengan baik</div>

              <div className='listnutrisi'>
                <p>1. Awasi tanaman Anda untuk tanda-tanda kekurangan nutrisi, seperti daun kuning atau pertumbuhan yang lambat.</p>
                <p>2. Sebelum memberikan nutrisi tambahan, lakukan analisis tanah untuk mengetahui tingkat keasaman (pH) dan kandungan nutrisinya. </p>
                <p>3. Pilih pupuk yang sesuai dengan jenis tanaman hias Anda. Pupuk umumnya mengandung tiga elemen utama: nitrogen (N), fosfor (P), dan kalium (K).</p>
                <p>4. Tentukan jadwal pemupukan yang konsisten sepanjang musim tumbuh. </p>
                <p>5. Pastikan tanaman menerima cukup air, karena nutrisi larut dalam air dan diserap oleh akar tanaman.</p>
              </div>

            </div></div>

        </div>
      </div>

      <div className='col-md-12'>
        <div className='gabung'>

          <div className='col-md-6'>
            <div className='textgabung'>
              <div className='judulnutrisi' style={{ width: '500px' }}>Bergabung bersama kami
                untuk merawat tanaman anda</div>
              <div className='listgabung'>
                <p>1. Dapatkan informasi terbaru tentang tren tanaman hias, perawatan terbaru, dan inovasi di dunia Tanaman Hias.</p>
                <p>2. Saling berbagi pengalaman dan pengetahuan dengan anggota komunitas lainnya. Tanyakan pertanyaan dan dapatkan jawaban dari mereka yang memiliki pengalaman serupa.  </p>
                <p>3. Dapat berkonsultasi dengan ahli dalam bidang tanaman hias untuk menanyakan masalah tanaman hias anda.</p>
              </div>
            </div></div>

          <div className='col-md-6'>
            <div className='gambargabung'>
              <img
                src={gabung}
                alt="Login Image"
              />
            </div></div>

        </div></div>

      <div className='col-md-12'>
        <div className='artikel'>
          <p>Artikel</p>


          <div className='artikel1'>

            <div className='col-md-3'>
              <a className="fb" href="#"><Card style={{ width: '270px', height: '530px', marginLeft: '22%', marginTop: '10px' }}>
                <img src={janda} />
                <Card.Body>
                  <Card.Title style={{ fontWeight: 'bold', color: '#044F1E', fontSize: '19px' }}>Janda Bolong (Monstera)</Card.Title>
                  <Card.Text style={{ fontSize: '16px', marginTop: '20px' }}>
                    Tanaman kekinian Monstera atau dikenal sebagai nama tanaman janda bolong menjadi tanaman hias unik yang berasal dari daerah tropis Amerika yang menjadikan banyak peminat di tahun ini.
                  </Card.Text>
                  <img src={user} />
                </Card.Body>
              </Card>
              </a>
            </div>

            <div className='col-md-3'>
              <a className="fb" href="#"><Card style={{ width: '270px', height: '530px', margin: '10px', marginLeft: '15%' }}>
                <img src={buttonwood} />
                <Card.Body>
                  <Card.Title style={{ fontWeight: 'bold', color: '#044F1E', fontSize: '19px' }}>Pohon Buttonwood</Card.Title>
                  <Card.Text style={{ fontSize: '16px', marginTop: '20px' }}>
                    Buttonwood adalah pohon yang bercabang rendah, berbatang banyak, semak, selalu hijau dengan tinggi rata-rata 35 kaki, dan sering dikaitkan dengan komunitas bakau.
                  </Card.Text>
                  <img src={user} style={{ marginTop: '25px' }} />
                </Card.Body>
              </Card></a></div>

            <div className='col-md-3'>
              <a className="fb" href="#"><Card style={{ width: '270px', height: '530px', margin: '10px', marginLeft: '8%' }}>
                <img src={peony} />
                <Card.Body>
                  <Card.Title style={{ fontWeight: 'bold', color: '#044F1E', fontSize: '19px' }}>Bunga Peony</Card.Title>
                  <Card.Text style={{ fontSize: '16px', marginTop: '20px' }}>
                    Bunga peony merupakan salah satu tanaman hias yang berasal dari Asia, Eropa, dan Amerika Utara hingga Barat.
                  </Card.Text>
                  <img src={user} style={{ marginTop: '73px' }} />
                </Card.Body>
              </Card></a></div>

            <div className='col-md-3'>
              <a className="fb" href="#"><Card style={{ width: '270px', height: '530px', margin: '10px', marginLeft: '0%' }}>
                <img src={sepatu} />
                <Card.Body>
                  <Card.Title style={{ fontWeight: 'bold', color: '#044F1E', fontSize: '19px' }}>Bunga Sepatu</Card.Title>
                  <Card.Text style={{ fontSize: '16px', marginTop: '20px' }}>
                    Bunga sepatu adalah tanaman yang kaya akan antioksidan. Antioksidan ini sangatlah baik untuk tubuh kita dan membantu dalam menangkal radikal bebas yang bisa.
                  </Card.Text>
                  <img src={user} style={{ marginTop: '26px' }} />
                </Card.Body>
              </Card></a></div>

          </div>
        </div> </div>

      <div className='bawah'>
        <p>Sistem Informasi Perawatan Tanaman Hias</p>
        <p>Sistem Informasi Perawatan Tanaman Hias</p>
        <div className='baris2bawah'>
          <div className='notelpbawah'>No.telp : +62876363778</div>
          <div className='emailbawah'>Email : tanamhs@gmail.com</div>
        </div>
        <div className='logososialmedia'>


          <a className="fb" href="https://www.facebook.com/">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" /></svg>
          </a>

          <a className="fb" href="https://www.instagram.com/">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16" >
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
            </svg>
          </a>

          <a className="fb" href="https://twitter.com/">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15" />
            </svg>
          </a>

          <a className="fb" href="https://youtube.com">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
              <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408z" />
            </svg>
          </a>
        </div>

        <hr></hr>

        <p style={{ color: '#ffff', textAlign: 'center', fontSize: '15px' }}>©2023 TanamanHias</p>
      </div>

    </>
  )
}

export default Home