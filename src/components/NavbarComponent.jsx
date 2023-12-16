import { Navbar, Nav, Button, Container, Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'; // Mengganti Nav.Link dengan NavLink
import logosementara from '../images/logosementara.png';
import logonav from '../images/logonav.png';

const NavbarComponent = () => {
  return (
    <>
      <Navbar expand="lg" style={{ backgroundColor: 'rgba(48, 113, 86, 0.2)' }}>
        <Container fluid>
          <Navbar.Brand>
            <img src={logonav} alt='logo' style={{ marginLeft: '10px', width: '90px', height: '60px', paddingBottom: '10px' }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav variant="underline" defaultActiveKey="/home" className="navbar-custom mx-auto me-auto me-2 my-2 my-lg-0" navbarScroll>
              <NavLink to="/" exact className="nav-link" activeClassName="active">Beranda</NavLink>
              <NavLink to="/tentangkami" className="nav-link" activeClassName="active">Tentang Kami</NavLink>
              <NavLink to="/informasi" className="nav-link" activeClassName="active">Informasi</NavLink>
              <NavLink to="/konsultasi" className="nav-link" activeClassName="active">Konsultasi</NavLink>
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
            <NavLink to="/profile" style={{ textDecoration: 'none' }}>
              <Navbar.Brand className="logo-profile mt-2 mt-lg-0">
                <img src={logosementara} alt='logo' />
              </Navbar.Brand>
            </NavLink>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
