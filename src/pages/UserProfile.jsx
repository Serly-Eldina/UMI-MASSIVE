import { Container, Row, Button, Form, Col } from 'react-bootstrap';
import fotoprofile from '../images/fotoprofile.png';

function userprofile() {
  return (
    <>
      <Container className='mt-5 mb-5'>
        <Row>
          <Col className='foto-profile text-center' xs={{ order: 1, span: 12 }} md={{ order: 1, span: 6 }}>
            <img src={fotoprofile} alt="fotoprofile" />
            <div className='center mt-2'>
              <Button className='mx-4 mt-4' id='button-edit' variant="success">
                Edit
              </Button>
              <Button className='mx-4 mt-4' id='button-logout' variant="success">
                Logout
              </Button>
            </div>
          </Col>

          <Col className='isi-form pt-5' xs={{ order: 2, span: 12 }} md={{ order: 2, span: 6 }}>
            <div className='col-md-10'>
              <div id='form-profile' className='container2'>
                <h5 className='mb-4'>Account Setting</h5>
                <Form.Floating className="mb-4">
                  <Form.Control id="floatingInputCustom" type="name" placeholder="name" />
                  <label htmlFor="floatingInputCustom">Name</label>
                </Form.Floating>
                <Form.Floating className="mb-4">
                  <Form.Control id="floatingInputCustom" type="status" placeholder="Bekerja" />
                  <label htmlFor="floatingInputCustom">Status</label>
                </Form.Floating>
                <Form.Floating className="mb-4">
                  <Form.Control id="floatingInputCustom" type="email" placeholder="name@example.com" />
                  <label htmlFor="floatingInputCustom">Email address</label>
                </Form.Floating>
                <Form.Floating className='mb-4'>
                  <Form.Control id="floatingPasswordCustom" type="password" placeholder="Password" />
                  <label htmlFor="floatingPasswordCustom">Password</label>
                </Form.Floating>
                <Button variant="success" className='mb-4'>
                  Save
                </Button>{' '}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default userprofile;
