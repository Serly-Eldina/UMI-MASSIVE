import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import NavbarBS from 'react-bootstrap/Navbar';
import logonav from '../images/logonav.png';
import logosementara from '../assets/logosementara.png';
import tentangkami from '../images/tentangkami.png';
import tentangkami1 from '../images/tentangkami1.png';
import '../css/tentangkami.css';

const TentangKami = () => {
    return (
        <>
            <NavbarBS expand="lg" className="bg-body-tertiary" sticky='top'>
                <Container fluid>
                    <NavbarBS.Brand>
                        <img src={logonav} alt='logo' style={{ marginLeft:'20%' ,  width: '90px', height: '60px', paddingBottom: '10px' }} />
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
                            <Nav.Link href="Register">Informasi</Nav.Link>
                            <Nav.Link href="#action2">Konsultasi</Nav.Link>
                        </Nav>
                        <Form className="d-flex" style={{marginRight: '20px'}}>
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
            <div>
                <img
                    src={tentangkami}
                    alt=""
                    style={{
                        maxWidth: '100%',
                        height: 'auto',
                        display: 'block', // Membuat gambar tetap dalam aliran dokumen
                        margin: 'auto',   // Pusatkan gambar
                    }}
                />
            </div>

            
                    <div className="container1">
                        <div className="col-md-5">
                            <div className="gambarlaptop">
                                <img
                                    src={tentangkami1}
                                    alt="gambar tentang kami"
                                    style={{
                                        maxWidth: '100%',
                                        height: 'auto',
                                        display: 'block',
                                        margin: 'auto',
                                    }}
                                />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="teks-tentang-kami">
                                <h3>Tentang Kami</h3>
                                <p >
                                    Selamat datang di platform kami! Kami adalah sebuah aplikasi
                                    mobile dan situs web yang didedikasikan untuk menyediakan sumber
                                    daya informatif seputar tanaman hias. Dengan fokus pada
                                    mempermudah masyarakat dalam menanam dan merawat tanaman hias,
                                    kami menghadirkan berbagai fitur yang dirancang untuk memenuhi
                                    kebutuhan para penggemar tanaman hias.
                                </p>
                            </div>
                        </div>
                    </div>



        </>
    )
}

export default TentangKami