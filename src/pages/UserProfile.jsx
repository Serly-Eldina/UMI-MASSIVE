import NavbarComponent from '../components/NavbarComponent';
import Button from 'react-bootstrap/Button';
import fotoprofile from '../images/fotoprofile.png'
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/userprofile.css';




function userprofile() {
    return (
        <>

      <main>

      <Row>
        <Col>
      <div className='container2'>
        <div className='center'>
        <img src={fotoprofile} alt="fotoprofile" />
        </div>
        <div className='center'>
        <Button id='button-edit' variant="success">Edit</Button>{' '}
      <Button id='button-logout' variant="success">Logout</Button>{' '}
        </div>
      
      </div>

        
        </Col>
        <Col>
      <div className='col-md-10'>
            <div className='container3'>
            <div id='form-profile' className='container2'>
        <h5 className='mb-4'>Account Setting</h5>
        <Form.Floating className="mb-4">
        <Form.Control
          id="floatingInputCustom"
          type="name"
          placeholder="name"
        />
        <label htmlFor="floatingInputCustom">Name</label>
      </Form.Floating>
        <Form.Floating className="mb-4">
        <Form.Control
          id="floatingInputCustom"
          type="status"
          placeholder="Bekerja"
        />
        <label htmlFor="floatingInputCustom">Status</label>
      </Form.Floating>
        <Form.Floating className="mb-4">
        <Form.Control
          id="floatingInputCustom"
          type="email"
          placeholder="name@example.com"
        />
        <label htmlFor="floatingInputCustom">Email address</label>
      </Form.Floating>
      <Form.Floating className='mb-4'>
        <Form.Control
          id="floatingPasswordCustom"
          type="password"
          placeholder="Password"
        />
        <label htmlFor="floatingPasswordCustom">Password</label>
      </Form.Floating>
      <Button variant="success" className='mb-4'>Save</Button>{' '}

      </div>
            </div>
          </div>
        </Col>
      </Row>



      </main>

      </>

      

    );
  }

export default userprofile;

