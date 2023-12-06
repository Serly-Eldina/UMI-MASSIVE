import { Container, Row, Col, Image, Card, CardGroup } from 'react-bootstrap';

import informasi from '../images/informasi.png'
import apaitu from '../images/apaitu.png'
import tanah1 from '../images/tanah1.png'
import tanah2 from '../images/tanah2.png'
import tanah3 from '../images/tanah3.png'

import tips1 from '../images/tips1.png'
import tips2 from '../images/tips2.png'
import tips3 from '../images/tips3.png'
import tips4 from '../images/tips4.png'

const Informasi = () => {
  return (
    <>
      <Col >
        <div className='px-5 img-fluid'
          style={{
            background: `url(${informasi})`,
            height: '200px',
            display: 'flex',
            alignItems: 'center', 
            
          }}>
          <h2 style={{ margin: 0, color: '#DDE1E6' }}>
            Tips & Trik Merawat <br />
            Tanaman Hias
          </h2>
        </div>
      </Col>

      <Container fluid className='mt-5 pt-5 px-4 py-5 mb-5'>
        <Row className="justify-content-center align-items-center">

          <Col md lg={{ span: 6, offset: 1 }} className=' align-items-center'>
            <h2>Apa Itu Tanaman Hias ?</h2> <br />
            <p>Tanaman hias merupakan tumbuhan yang biasa
              ditanam orang sebagai hiasan. Umumnya pengertian hiasan adalah hiasan di dalam rumah,
              atau tamantaman umum, karena di ditanam di rumah atau ditanam di taman, otomatis
              ukuran tanam tidak terlalu besar dan rimbun. Pada umumnya tanaman hias dapat di
              golongkan menjadi tanaman hias bunga dan tanaman hias daun. Tanaman hias bunga
              merupakan tanaman hias dengan bagian bunga yang menarik. Adapun tanaman hias daun
              merupakan tanaman daun yang menarik. Dalam hal ini perlu di ketahui bahwa organ
              daun terdiri dari pelepah, tangkai, dan helaian oleh karena itu tanaman yang
              mempunyai pelepah menarik.</p>
          </Col>
          <Col md lg={{ span: 4, offset: 1 }} className=' mt-3 text-center'  >
            <Image src={apaitu} style={{ width: "90%", height: "90%" }}
              alt="gambar kanan" />
          </Col>
        </Row>
      </Container>

      <Container className='mb-5 pb-5'>
        <Row className="justify-content-center pt-5">
          <Col >
            <h3>Jenis Tanah</h3>
            <p>Berikut jenis Tanah Yang Bagus Untuk Tanaman Hias</p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col sm={4} className='isi1 mt-4 pt-4 d-flex  d-flex flex-column align-items-center'>
            <img src={tanah1} alt="tanah1" className="mb-4" />
            <h5 className="text-center">Tanah Geluh</h5>
            <p style={{ textAlign: 'justify' }}>
              Geluh merupakan tanah dengan kandungan yang terdiri dari pasir, debu, tanah liat,
              dan humus dalam komposisi yang seimbang. Tanah ini memiliki gizi tinggi yang baik bagi
              tanaman karena kandungannya. Kondisi pH berpengaruh pada kemampuan tanaman untuk tumbuh
              menjadi nutrisi untuk organisme lain seperti cacing tanah.Tanah geluh tinggi memiliki
              kalsium yang lebih tinggi dibanding beberapa jenis tanah lain.
            </p>
          </Col>

          <Col sm={4} className='isi2 mt-4 pt-4 d-flex flex-column align-items-center'>
            <img src={tanah2} alt="tanah2" className="mb-4" />
            <h5 className="text-center">Tanah Berpasir</h5>
            <p style={{ textAlign: 'justify' }}>
              Tanah berpasir adalah jenis tanah yang cocok untuk tanaman hias. Pasir berasal dari bebatuan
              yang terkikis. Tanah jenis ini cenderung kurang baik dalam penyerapan air juga lebih cepat
              panas saat musim panas Oleh karena itu penggunaan tanah berpasir harus dicampur dengan bahan
              organik lain seperti pupuk kandang atau kompos untuk menahan air dan meningkatkan nutrisi di
              dalam tanah.
            </p>
          </Col>

          <Col sm={4} className='isi3 mt-4 pt-4 d-flex flex-column align-items-center'>
            <img src={tanah3} alt="tanah3" className="mb-4" />
            <h5 className="text-center">Tanah Liat</h5>
            <p style={{ textAlign: 'justify' }}>
              Tanah liat adalah jenis tanah padat yang memiliki unsur hara yang tinggi. Tanah liat memiliki
              karakteristik padat, tapi lembut dan mudah dibentuk. Tanah liat juga lengket saat basah dan
              keras saat mengering.Karakteristik ini membuat tanah liar sulit menyerap air. karena itu
              tanah liat perlu dicampur dengan pasir, pupuk kompos, dan gipsum.

            </p>
          </Col>
        </Row>
      </Container >

      <Container className='mb-5' >
        <div style={{
          backgroundColor: '#34745C',
          borderRadius: '40px 0 40px 0',
          display: 'inline-block',
          padding: '0 35px',
        }}>
          <h4 style={{ color: '#ffff', fontWeight: 'bold', }}>
            Tips & Trik
          </h4>
        </div>
      </Container>


      <CardGroup className="mx-5 px-4 mb-4 pb-4" >
        <Card className="mb-3 mx-4">
          <Card.Img src={tips1} />
          <Card.Body>
            <Card.Title className="text-center" style={{ color: '#34745C', fontWeight: 'bold' }}>Lidah Mertua</Card.Title>
            <Card.Text style={{ textAlign: 'justify' }}>
              Tanaman lidah mertua dikenal juga dengan sebutan Sansevieria. Bentuknya berupa daun panjang
              dan runcing degan tekstur tebal dan keras. lidah mertua juga mampu menyerap karbon monoksida
              dan karbon dioksida
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="mb-3 mx-4">
          <Card.Img src={tips2} />
          <Card.Body>
            <Card.Title className="text-center" style={{ color: '#34745C', fontWeight: 'bold' }}>Sirih Gading</Card.Title>
            <Card.Text style={{ textAlign: 'justify' }}>
              Sirih gading termasuk tanaman hias dalam ruangan yang sangat mudah dirawat.Tanaman hias dalam
              ruangan ini bisa tumbuh dengan baik ketika ditanam melalui media tanah maupun air.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="mb-3 mx-4">
          <Card.Img src={tips3} />
          <Card.Body>
            <Card.Title className="text-center" style={{ color: '#34745C', fontWeight: 'bold' }}>Peace Lily</Card.Title>
            <Card.Text style={{ textAlign: 'justify' }}>
              Tanaman hias lili perdamaian juga termasuk salah satu tanaman yang cocok di dalam ruangan
              karena mampu menyerap polutan dengan baik.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="mb-3 mx-4">
          <Card.Img src={tips4} />
          <Card.Body>
            <Card.Title className="text-center" style={{ color: '#34745C', fontWeight: 'bold' }}>Aloe Vera</Card.Title>
            <Card.Text style={{ textAlign: 'justify' }}>
              Aloe vera atau lidah buaya dapat tumbuh subur di dalam ruangan. Tanaman ini juga menyukai
              cahaya matahari yang tidak langsung, jadi memang baik untuk diletakkan di teras atau dalam ruangan.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>

      <Container className='mb-5' >
        <div style={{
          backgroundColor: '#34745C',
          borderRadius: '40px 0 40px 0',
          display: 'inline-block',
          padding: '0 35px',
        }}>
          <h4 style={{ color: '#ffff', fontWeight: 'bold', }}>
            Video Tuturial
          </h4>
        </div>
      </Container>


      <CardGroup className="mx-5 px-4 mb-4 pb-4" >
        <Card className="mb-3 mx-4">
          <Card.Img src={tips1} />
          <Card.Body>
            <Card.Title className="text-center" style={{ color: '#34745C', fontWeight: 'bold' }}>Lidah Mertua</Card.Title>
            <Card.Text style={{ textAlign: 'justify' }}>
              Tanaman lidah mertua dikenal juga dengan sebutan Sansevieria. Bentuknya berupa daun panjang
              dan runcing degan tekstur tebal dan keras. lidah mertua juga mampu menyerap karbon monoksida
              dan karbon dioksida
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="mb-3 mx-4">
          <Card.Img src={tips2} />
          <Card.Body>
            <Card.Title className="text-center" style={{ color: '#34745C', fontWeight: 'bold' }}>Sirih Gading</Card.Title>
            <Card.Text style={{ textAlign: 'justify' }}>
              Sirih gading termasuk tanaman hias dalam ruangan yang sangat mudah dirawat.Tanaman hias dalam
              ruangan ini bisa tumbuh dengan baik ketika ditanam melalui media tanah maupun air.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="mb-3 mx-4">
          <Card.Img src={tips3} />
          <Card.Body>
            <Card.Title className="text-center" style={{ color: '#34745C', fontWeight: 'bold' }}>Peace Lily</Card.Title>
            <Card.Text style={{ textAlign: 'justify' }}>
              Tanaman hias lili perdamaian juga termasuk salah satu tanaman yang cocok di dalam ruangan
              karena mampu menyerap polutan dengan baik.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="mb-3 mx-4">
          <Card.Img src={tips4} />
          <Card.Body>
            <Card.Title className="text-center" style={{ color: '#34745C', fontWeight: 'bold' }}>Aloe Vera</Card.Title>
            <Card.Text style={{ textAlign: 'justify' }}>
              Aloe vera atau lidah buaya dapat tumbuh subur di dalam ruangan. Tanaman ini juga menyukai
              cahaya matahari yang tidak langsung, jadi memang baik untuk diletakkan di teras atau dalam ruangan.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </>
  )
}

export default Informasi