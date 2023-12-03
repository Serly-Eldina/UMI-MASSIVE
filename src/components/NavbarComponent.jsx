
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import NavbarBS from 'react-bootstrap/Navbar';

import logosementara from '../assets/logosementara.png'
import logonav from '../images/logonav.png'

const NavbarComponent = () => {
  return (
    <div>
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
              <Nav.Link href="Konsultasi">Konsultasi</Nav.Link>
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
    </div>
  )
}

export default NavbarComponent