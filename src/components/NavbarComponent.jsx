
import { Navbar, Nav, Button, Container, Form } from 'react-bootstrap';

import logosementara from '../images/logosementara.png';
import logonav from '../images/logonav.png';

const NavbarComponent = () => {
  return (
    <div>
      <Navbar expand="lg"  style={{ backgroundColor: 'rgba(48, 113, 86, 0.2)' }}>
        <Container fluid>
          <Navbar.Brand>
            <img src={logonav} alt='logo' style={{ marginLeft: '20%', width: '90px', height: '60px', paddingBottom: '10px' }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav variant="underline" defaultActiveKey="/home" className="navbar-custom mx-auto me-auto me-2 my-2 my-lg-0" navbarScroll>
              <Nav.Link href="/">Beranda</Nav.Link>
              <Nav.Link href="tentangkami">Tentang Kami</Nav.Link>
              <Nav.Link href="Informasi">Informasi</Nav.Link>
              <Nav.Link href="Konsultasi">Konsultasi</Nav.Link>
            </Nav>
            <Form className="d-flex mb-2 mb-lg-0" style={{ marginRight: '20px' }}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <Navbar.Brand className="mt-2 mt-lg-0">
              <a href="UserProfile"> <img src={logosementara} alt='logo' /></a>
            </Navbar.Brand>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
