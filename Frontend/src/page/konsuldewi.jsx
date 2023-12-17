import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import imagedewi from '../images/konsuldewi.jpeg'
import ratingbudi from '../images/Ratingbudi.png'

function Konsuldewi() {
    return (
        <>
            <div>
                <div>
                    <Container>
                        <h3 style={{ marginBlock: 50, }}>Konsultasi</h3>
                    </Container>
                </div>
                <div>
                    <div>
                        <Container>
                            <Row>
                                <Col>
                                    <img className='konsuljpeg' src={imagedewi} alt='konsuljpeg' />

                                    <h3 style={{ marginBlock: 30, }}>Biografi</h3>
                                    <p style={{ marginBottom: 50, }}>Dewi Santika, Pengusaha tanaman hias berpengalaman yang sudah membuka beberapa cabang dalam penjualan tanaman hias, beragam tanaman hias sudah di kembangbiakkan. Keberhasilannya, banyak bisnis penjualan tanaman hiasnya di beberapa lokasi, sudah ahli dalam mengatasi beberapa permasalahan tanaman hias dan sering mengikuti pelatihan perawatan mengenai tanaman hias.</p>
                                </Col>
                                <Col>
                                    <h2>Dewi Santika</h2>
                                    <p style={{ marginBlock: 30 }}>Temukan solusi anda dengan konsultasi bersama para pakar tanaman hias</p>
                                    <img src={ratingbudi} alt="ratingbudi" />
                                    <hr style={{
                                        background: "#000000",
                                        height: "2px",
                                        border: "none",
                                        marginBlock: 20
                                    }} />

                                    <div style={{ marginBlock: 20 }}>
                                        <h4><b>Rp. 10.000 - Rp. 15.000</b></h4>

                                        <p>*Diskon 10% sampai dengan akhir bulan*</p>
                                    </div>

                                    <hr style={{
                                        background: "#000000",
                                        height: "3px",
                                        border: "none",
                                        marginBlock: 20
                                    }} />

                                    <Button variant="success" onClick={() => window.open('https://wa.me/6282289050368', '_blank')}>Mulai Chat</Button>{' '}
                                    {' '}


                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Konsuldewi;