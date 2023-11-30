import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import NavbarBS from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';




function userprofile() {
    return (

        <>
        <NavbarBS expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <NavbarBS.Brand href="#">ini logo</NavbarBS.Brand>
          <NavbarBS.Toggle aria-controls="navbarScroll" />
          <NavbarBS.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Beranda</Nav.Link>
              <Nav.Link href="#action2">Tentang Kami</Nav.Link>
              <Nav.Link href="#action2">Informasi</Nav.Link>
              <Nav.Link href="#action2">Konsultasi</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </NavbarBS.Collapse>
        </Container>
      </NavbarBS>

      <Container>
      <row>
        <Col xs={6} md={4}>
          <Image src="holder.js/171x180" rounded />
        </Col>
        <Col xs={6} md={4}>
          <Image src="holder.js/171x180" roundedCircle />
        </Col>
        <Col xs={6} md={4}>
          <Image src="holder.js/171x180" thumbnail />
        </Col>
      </row>
    </Container>
      

      </>

      

    );
  }

export default userprofile;