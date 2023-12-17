import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import imagekarin from '../images/konsulkarin.jpeg'
import ratingbudi from '../images/Ratingbudi.png'

function konsulkarin() {
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
                                    <img className='konsuljpeg' src={imagekarin} alt='konsuljpeg' />

                                    <h3 style={{ marginBlock: 30, }}>Biografi</h3>
                                    <p style={{ marginBottom: 50, }}>Karin Marina, Pengusaha tanaman hias berpengalaman dalam melatih dalam perawatan, beragam tanaman hias sudah di kembangbiakkan. Keberhasilannya, banyak bisnis penjualan tanaman hiasnya di beberapa lokasi, sudah ahli dalam mengatasi beberapa permasalahan tanaman hias.</p>
                                </Col>
                                <Col>
                                    <h2>Karin Marina</h2>
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

export default konsulkarin;