
import { Container, Row, Col } from 'react-bootstrap';

const Video1 = () => {
  return (
    <Container className='Video-Youtube'>
      <Row>
        <Col className='Video1'>
          <h2>Video YouTube</h2>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/eXti7Z5S4TQ"
              title="YouTube video"
              allowFullScreen
            ></iframe>
          </div>
        </Col>
        <Col className='Video-Rekomendasi'>
        <h5>Video rekomendasi</h5>
        <div className="judul-deskripsi">
                        <p className="judul-video-rekomendasi"> Cara membuat laci mini dari kardus</p>
                        <div>
                            <p>Bahan-bahan:</p>
                            <p>• Kardus 2 ply ( Ketebalan +-6mm )</p>
                            <p>• Wallpaper / Wallsticker...</p>
                        </div>
                    </div>
        </Col>


      </Row>
    </Container>
  );
}

export default Video1;
