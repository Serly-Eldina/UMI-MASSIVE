
import { Container, Row, Col, Card, CardGroup, ListGroup } from 'react-bootstrap';
import pupuk from '../images/pupuk.png'
import pupuk2 from '../images/pupuk2.png'
import pupuk3 from '../images/pupuk3.png'
import rekomen1 from '../images/rekomen1.png'
import rekomen2 from '../images/rekomen2.png'
import rekomen3 from '../images/rekomen3.png'
import rekomen4 from '../images/rekomen4.png'
import rekomenartikel1 from '../images/rekomenartikel1.png'
import rekomenartikel2 from '../images/rekomenartikel2.png'
import rekomenartikel3 from '../images/rekomenartikel3.png'
import rekomenartikel4 from '../images/rekomenartikel4.png'
import rekomenartikel5 from '../images/rekomenartikel5.png'


const Video2 = () => {
  return (
    <Container className='Video-Youtube' >
      <Row>
        <Col className='Video1' sm={8}>

          <div className="ratio ratio-16x9 mt-5">
            <iframe
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/X0ALh8MWd1A"
              title="YouTube video"
              allowFullScreen
            ></iframe>
          </div>

        <div className='py-4 mb-0'>
        <Card>
      <Card.Header> <h3>Cara Memperbanyak Monstera Variegata Auto Berhasil</h3></Card.Header>
      <Card.Body>
        <Card.Title>Berikut ini merupakan cara merawat tanaman hias anda agar lebih sehat :</Card.Title>
        <Card.Text>
        <ol type='1'>
          <li>Memiliki komitmen </li>
            <li>Rutin memberikan pupuk</li>
            <li>Mengenali kebutuhan Tanaman hias</li>
            <li>Sentuh Tanaman SEBELUM di siram </li>
            <li>Mengunakan media tanam yang tepat</li>
            <li>Menjemur Tanaman Hias secara teratur</li>
            <li>Memperhatikan intensitas air</li>
            <li>Melakukan re poting</li>
            <li>Menjaga kebersihan Tanaman</li>
            <li>Rutin memangkas Tanaman Hias</li>
            <li>Memastikan Tanaman bebas dari hama </li>
            <li>Memangkas rumput liar</li>
        </ol>
          </Card.Text>
      </Card.Body>
      </Card>
        </div>

       <div className='py-0 mb-5'>
       <h3>Video Lainnya</h3> <hr></hr>
       <Card>
       <CardGroup>
      
       <Card>
       
            <Card.Img src={pupuk} />
            <Card.Body>
              <Card.Text>
                <h6 style={{color: '#044F1E', fontWeight: 'bold'}}>Jangan pernah mencampur pupuk ini!</h6>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card>
          <Card.Img src={pupuk3} />
            <Card.Body>
              
              <Card.Text>
              <h6 style={{color: '#044F1E', fontWeight: 'bold'}}>Cara memindahkan tanaman</h6>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card>
          <Card.Img src={pupuk2} />
            <Card.Body>
             
              <Card.Text>
              <h6 style={{color: '#044F1E', fontWeight: 'bold'}}>Cara menghemat pemberian pupuk</h6>
              </Card.Text>
            </Card.Body>
          </Card>

       </CardGroup>
      </Card>
       </div>

        </Col>
        
        <Col className='Video-Rekomendasi py-5' sm={4}>
          <Card className='px-4 py-3'>
              <h5>Rekomendasi Video</h5> 
             
                <CardGroup className=' mb-0 mt-3'>
                  <Card className=' border-0'>
                      <Card.Img src={rekomen1} />
                  </Card>
                  <Card className='px-3 py-2 border-0'>
                     <h6 style={{color: '#044F1E', fontWeight: 'bold'}}>Cara Merawat Kembali Monstera Adansonii</h6>
                      <h7>Sisi Lain Tumbuhan</h7>
                  </Card>
                </CardGroup> 
<hr></hr>
                <CardGroup>
                  <Card className=' border-0'>
                      <Card.Img src={rekomen2} />
                  </Card>
                  <Card className='px-3 py-2 border-0'>
                     <h6 style={{color: '#044F1E', fontWeight: 'bold'}}>Tips Aglonema Rimbun Subur- Cepat Beranak Subur</h6>
                      <h7>Menanam aglonema</h7>
                  </Card>
                </CardGroup>
                <hr></hr>

                <CardGroup>
                  <Card className=' border-0'>
                      <Card.Img src={rekomen3} />
                  </Card>
                  <Card className='px-3 py-2 border-0'>
                     <h6 style={{color: '#044F1E', fontWeight: 'bold'}}>Tips perawatan & pupuk aglaonema terbaik </h6>
                      <h7>Perawatan aglonema</h7>
                  </Card>
                </CardGroup>
                <hr></hr>

                <CardGroup>
                  <Card className=' border-0'>
                      <Card.Img src={rekomen4} />
                  </Card>
                  <Card className='px-3 py-2 border-0'>
                     <h6 style={{color: '#044F1E', fontWeight: 'bold'}}>Cara Merimbunkan Dan Menyuburkan Janda Bolong</h6>
                      <h7>Tips Janda Bolong</h7>
                  </Card>
                </CardGroup>
                <hr></hr>


          </Card>

          <Card className='px-4 py-3 mt-5'>
              <h5>Baca Artikel</h5> 
             
                <CardGroup className=' mb-0 mt-3'>
                  <Card className=' border-0'>
                      <Card.Img src={rekomenartikel1} />
                  </Card>
                  <Card className='px-3 py-2 border-0'>
                     <h6 style={{color: '#044F1E', fontWeight: 'bold'}}>Cara merawat daun agar tidak terserang hama</h6>
                      <h7>Cara membasmi hama perlu diketahui..</h7>
                  </Card>
                </CardGroup> 
<hr></hr>
                <CardGroup>
                  <Card className=' border-0'>
                      <Card.Img src={rekomenartikel2} />
                  </Card>
                  <Card className='px-3 py-2 border-0'>
                     <h6 style={{color: '#044F1E', fontWeight: 'bold'}}>Cara membasmi hama tanaman secara alami</h6>
                      <h7>Hama adalah hewan atau tumbuhan yang..</h7>
                  </Card>
                </CardGroup>
                <hr></hr>

                <CardGroup>
                  <Card className=' border-0'>
                      <Card.Img src={rekomenartikel3} />
                  </Card>
                  <Card className='px-3 py-2 border-0'>
                     <h6 style={{color: '#044F1E', fontWeight: 'bold'}}>Cara merawat tanaman hias Aglaonema </h6>
                      <h7>Aglaonema masih berasal dari suku..</h7>
                  </Card>
                </CardGroup>
                <hr></hr>

                <CardGroup>
                  <Card className=' border-0'>
                      <Card.Img src={rekomenartikel3} />
                  </Card>
                  <Card className='px-3 py-2 border-0'>
                     <h6 style={{color: '#044F1E', fontWeight: 'bold'}}>Cara merawat tanaman hias Kaktus Koboi</h6>
                      <h7>Kaktus koboi sangat difavoritkan..</h7>
                  </Card>
                </CardGroup>
                <hr></hr>

                <CardGroup>
                  <Card className=' border-0'>
                      <Card.Img src={rekomenartikel5} />
                  </Card>
                  <Card className='px-3 py-2 border-0 mb-4'>
                     <h6 style={{color: '#044F1E', fontWeight: 'bold'}}>Cara merawat anggrek bulan</h6>
                      <h7>Menanam anggrek bulan sebenarnya..</h7>
                  </Card>
                </CardGroup>
                <hr></hr>


          </Card>

          
        </Col>

      </Row>
    </Container>
    
  );
}

export default Video2;
