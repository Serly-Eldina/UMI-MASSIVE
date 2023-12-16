import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import imagebudi from '../images/konsulbudi.jpeg'
import ratingbudi from '../images/Ratingbudi.png'

const KonsultanBudi = () => {
    return (
        <>
        <div>
            <div>
                <Container>
                    <h3 style={{marginBlock:50,  }}>Konsultasi</h3>
                </Container>
            </div>
            <div>
                <div>
                    <Container>
                        <Row>
                            <Col>
                            <img className='konsulbudi' src={imagebudi} alt='konsulbudi' />

                            <h3 style={{marginBlock: 30,}}>Biografi</h3>
                            <p style={{marginBottom: 50,}}>Budi Gunawan, pengusaha tanaman hias berpengalaman dengan usaha 5 tahun, mengubah setiap tanaman menjadi karya seni hidup. Keberhasilannya tidak hanya terletak pada bisnisnya yang sukses, tetapi juga pada cara ia menginspirasi orang untuk menciptakan kebahagiaan melalui keindahan alam di sekitarnya.</p>
                            </Col>
                            <Col>
                                <h2>Budi Gunawan</h2>
                                <p style={{marginBlock: 30}}>Temukan solusi anda dengan konsultasi bersama para pakar tanaman hias</p>
                                <img src={ratingbudi} alt="ratingbudi" />
                                <hr style={{
                                    background: "#000000",
                                    height: "2px",
                                    border: "none",
                                    marginBlock:20
                                }}/>

                                <div style={{marginBlock:20}}>
                                    <h4><b>Rp. 10.000 - Rp. 15.000/2x </b></h4>
                                
                                    <p>*Diskon 10% sampai dengan akhir bulan*</p>
                                </div>

                                <hr style={{
                                    background: "#000000",
                                    height: "3px",
                                    border: "none",
                                    marginBlock:20
                                }}/>
                               
                                <Button variant="success" onClick={() => window.open('https://wa.me/6282289050368', '_blank')}>Mulai Chat</Button>


                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
        </>
    );
};

export default KonsultanBudi;