import { Link } from 'react-router-dom';
import { Container, Row, Col, Image, Card, CardGroup } from 'react-bootstrap';
import informasi from '../images/informasi.png'
import infoapaitu from '../images/infoapaitu.png'
import tanah1 from '../images/tanah1.png'
import tanah2 from '../images/tanah2.png'
import tanah3 from '../images/tanah3.png'
import tips1 from '../images/tips1.png'
import tips2 from '../images/tips2.png'
import tips3 from '../images/tips3.png'
import tips4 from '../images/tips4.png'
import tips5 from '../images/tips5.png'
import tips6 from '../images/tips6.png'
import tips7 from '../images/tips7.png'
import tips8 from '../images/tips8.png'
import video1 from '../images/video1.png'
import videoke2 from '../images/videoke2.png'
import video2 from '../images/video2.png'
import video4 from '../images/video4.png'



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
            <h1>Apa Itu Tanaman Hias ?</h1> <br />
           <h6><p>Tanaman hias merupakan tumbuhan yang biasa
              ditanam orang sebagai hiasan. Umumnya pengertian hiasan adalah hiasan di dalam rumah,
              atau tamantaman umum, karena di ditanam di rumah atau ditanam di taman, otomatis
              ukuran tanam tidak terlalu besar dan rimbun. Pada umumnya tanaman hias dapat di
              golongkan menjadi tanaman hias bunga dan tanaman hias daun. Tanaman hias bunga
              merupakan tanaman hias dengan bagian bunga yang menarik. Adapun tanaman hias daun
              merupakan tanaman daun yang menarik. Dalam hal ini perlu di ketahui bahwa organ
              daun terdiri dari pelepah, tangkai, dan helaian oleh karena itu tanaman yang
              mempunyai pelepah menarik.</p></h6> 
          </Col>
          <Col md lg={{ span: 4, offset: 1 }} className=' mt-3 text-center'  >
            <Image src={infoapaitu} style={{ width: "90%", height: "90%" }}
              alt="gambar kanan" />
          </Col>
        </Row>
      </Container>

      <Container className='mb-5 pb-5'>
        <Row className="justify-content-center pt-5">
          <Col >
            <h2>Jenis Tanah</h2>
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
{/* artikel */}
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
        <Link to="/lidahmertua" className="card-link">
    <Card.Img src={tips1} />
    <Card.Body>
      <h3><Card.Title className="text-center" style={{ color: '#34745C', fontWeight: 'bold' }}>Lidah Mertua</Card.Title></h3>
      <Card.Text style={{ textAlign: 'justify' }}>
        Tanaman lidah mertua dikenal juga dengan sebutan Sansevieria. Bentuknya berupa daun panjang
        dan runcing degan tekstur tebal dan keras. Lidah mertua juga mampu menyerap karbon monoksida
        dan karbon dioksida
      </Card.Text>
    </Card.Body>
  </Link>
        </Card>

        <Card className="mb-3 mx-4">
        <Link to="/SirihGading" className="card-link">
          <Card.Img src={tips2} />
          <Card.Body>
            <h3><Card.Title className="text-center" style={{ color: '#34745C', fontWeight: 'bold' }}>Sirih Gading</Card.Title></h3>
            <Card.Text style={{ textAlign: 'justify' }}>
              Sirih gading termasuk tanaman hias dalam ruangan yang sangat mudah dirawat.Tanaman hias dalam
              ruangan ini bisa tumbuh dengan baik ketika ditanam melalui media tanah maupun air.
            </Card.Text>
          </Card.Body>
          </Link>
        </Card>

        <Card className="mb-3 mx-4">
        <Link to="/PeaceLily" className="card-link">
          <Card.Img src={tips3} />
          <Card.Body>
            <h3><Card.Title className="text-center" style={{ color: '#34745C', fontWeight: 'bold' }}>Peace Lily</Card.Title></h3>
            <Card.Text style={{ textAlign: 'justify' }}>
              Tanaman hias lili perdamaian juga termasuk salah satu tanaman yang cocok di dalam ruangan
              karena mampu menyerap polutan dengan baik.
            </Card.Text>
          </Card.Body>
          </Link>
        </Card>

        <Card className="mb-3 mx-4">
        <Link to="/AloeVera" className="card-link">
          <Card.Img src={tips4} />
          <Card.Body>
           <h3> <Card.Title className="text-center" style={{ color: '#34745C', fontWeight: 'bold' }}>Aloe Vera</Card.Title></h3>
           <Card.Text style={{ textAlign: 'justify' }}>
              Aloe vera atau lidah buaya dapat tumbuh subur di dalam ruangan. Tanaman ini juga menyukai
              cahaya matahari yang tidak langsung, jadi memang baik untuk diletakkan di teras atau dalam ruangan.
            </Card.Text>
          </Card.Body>
          </Link>
        </Card>
      </CardGroup>

      <CardGroup className="mx-5 px-4 mb-4 pb-4" >
        <Card className="mb-3 mx-4">
        <Link to="/Bromeila" className="card-link">
          <Card.Img src={tips5} />
          <Card.Body>
            <h3><Card.Title className="text-center" style={{ color: '#34745C', fontWeight: 'bold' }}>Bromeilad</Card.Title></h3>
           <Card.Text style={{ textAlign: 'justify' }}>
           Bromeliad ternyata mampu menghilangkan lebih dari 80% dari enam senyawa organik yang berbahaya!
            </Card.Text>
          </Card.Body>
          </Link>
        </Card>

        <Card className="mb-3 mx-4">
        <Link to="/Aglaonema" className="card-link">
          <Card.Img src={tips6} />
          <Card.Body>
            <h3><Card.Title className="text-center" style={{ color: '#34745C', fontWeight: 'bold' }}>Aglaonema</Card.Title></h3>
           <Card.Text style={{ textAlign: 'justify' }}>
           Aglaonema (disebut juga Aglonema) masih berasal dari suku talas-talasan atau Araceae yang tetap bisa bertahan hidup meskipun mendapat sinar matahari minim.
            </Card.Text>
          </Card.Body>
          </Link>
        </Card>

        <Card className="mb-3 mx-4">
        <Link to="/Monstera" className="card-link">
          <Card.Img src={tips7} />
          <Card.Body>
            <h3><Card.Title className="text-center" style={{ color: '#34745C', fontWeight: 'bold' }}>Monstera Deliciosa</Card.Title></h3>
            <Card.Text style={{ textAlign: 'justify' }}>
            Tanaman kekinian Monstera atau dikenal sebagai nama tanaman janda bolong menjadi tanaman hias unik yang berasal dari daerah tropis Amerika yang menjadikan banyak peminat di tahun ini.
            </Card.Text>
          </Card.Body>
          </Link>
        </Card>

        <Card className="mb-3 mx-4">
        <Link to="/Liliparis" className="card-link">
          <Card.Img src={tips8} />
          <Card.Body>
           <h3> <Card.Title className="text-center" style={{ color: '#34745C', fontWeight: 'bold' }}>Lili Paris (Spider Plant)</Card.Title></h3>
            <Card.Text style={{ textAlign: 'justify' }}>
            Lili Paris atau yang seringkali disebut chlorophytum ini merupakan sebuah tanaman hias yang dapat berfotosintesis di bawah cahaya matahari yang lemah dan juga meny
            </Card.Text>
          </Card.Body>
          </Link>
        </Card>
      </CardGroup>

{/* vid yt */}
      <Container className='mb-5' >
        <div style={{
          backgroundColor: '#34745C',
          borderRadius: '40px 0 40px 0',
          display: 'inline-block',
          padding: '0 35px',
        }}>
          <h4 style={{ color: '#ffff', fontWeight: 'bold', }}>
            Video Tutorial
          </h4>
        </div>
      </Container>



      <CardGroup className="mx-5 px-4 mb-4 pb-4" >

        <Card className="mb-3 mx-4">
        <Link to="/Video1" className="card-link">
        <Card.Img src={video1} />
          <Card.Body>
          <Card.Text>
            <h7 style={{fontWeight: 'bold', color: '#044F1E'}}>12 cara merawat tanaman hias daun dan bunga</h7>
            </Card.Text>
          </Card.Body>
          </Link>
        </Card>

        <Card className="mb-3 mx-4">
        <Link to="/Video2" className="card-link">
          <Card.Img src={videoke2} />
          <Card.Body>
            <Card.Text>
            <h7 style={{fontWeight: 'bold', color: '#044F1E'}}>Cara Memperbanyak Monstera Variegata</h7>
            </Card.Text>
          </Card.Body>
          </Link>
        </Card>

        <Card className="mb-3 mx-4">
        <Link to="/Video3" className="card-link">
          <Card.Img src={video2} />
          <Card.Body>
            <Card.Text>
            <h7 style={{fontWeight: 'bold', color: '#044F1E'}}>Cara menanam tanaman janda bolong agar subur</h7>
            </Card.Text>
          </Card.Body>
          </Link>
        </Card>
        
        <Card className="mb-3 mx-4">
        <Link to="/Video4" className="card-link">
          <Card.Img src={video4} />
          <Card.Body>
         <Card.Text>
            <h7 style={{fontWeight: 'bold', color: '#044F1E'}}>Tips Merawat Tanaman Hias Bagi Pemula</h7>
            </Card.Text>
          </Card.Body>
          </Link>
        </Card>

      </CardGroup>
    </>
  )
}

export default Informasi