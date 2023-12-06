

import konsultasi from '../images/konsultasi.png'


import Card from 'react-bootstrap/Card';
import Pakar1 from '../images/pakar1.png';
import Pakar2 from '../images/pakar2.png';
import Pakar3 from '../images/pakar3.png';
import Start from '../images/start.png';
const Konsultasi = () => {
  return (
    <>
      
      <div className='container1'>
        <div className='cold-md-5'>
          <div className='gambar-konsultasi'>
            <img
              src={konsultasi}
              alt=""
              align="right"
              style={{
                // height: '450px',
                width: '500px',
                marginRight: '5%',
              }}
            />
            <div className="col-md-7">
              <div className="teks-konsultasi">
                <h3>Tanaman Hias mu punya masalah ?</h3>
                <p>
                  Temukan solusi terkait permasalahan anda dalam merawat tanaman
                  hias dengan para ahlinya, selain itu anda juga bisa bertanya
                  tentang apapun seputar tanaman hias.
                </p>
                {/* <button type="button" class="btn btn-primary"
                  style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
                  Custom button
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div >
      <div style={{ paddingTop: '50px' }} className='col-md-12'>
        <div className='judul'>
          <p>Rekomendasi Pakar</p>
          <p>Pilih pakar sesuai kebutuhan anda </p>
        </div>
      </div>
      <div className='pakar'>

        <div className='col-md-3'>
          <a className="fb" href="#"><Card style={{ width: '400px', height: '530px', marginLeft: '10%', marginTop: '10px' }}>
            <img src={Pakar1} />
            <Card.Body>
              <Card.Title style={{ fontWeight: 'bold', color: 'black', fontSize: '19px' }}>Budi Gunawan</Card.Title>
              <Card.Text style={{ fontSize: '16px' }}>Ahli tanaman</Card.Text>
              <img src={Start} /> <img src={Start} /> <img src={Start} /> <img src={Start} /> <img src={Start} /> (1121)
              <Card.Title style={{ fontWeight: 'bold', color: 'black', fontSize: '19px', margin: '15px' }}>Rp.10.000</Card.Title>
            </Card.Body>
          </Card>
          </a>
        </div>
        <div className='col-md-3'>
          <a className="fb" href="#"><Card style={{ width: '400px', height: '530px', margin: '10px', marginLeft: '40%' }}>
            <img src={Pakar2} />
            <Card.Body>
              <Card.Title style={{ fontWeight: 'bold', color: 'black', fontSize: '19px' }}>Karin marina</Card.Title>
              <Card.Text style={{ fontSize: '16px' }}>Ahli tanaman</Card.Text>
              <img src={Start} /> <img src={Start} /> <img src={Start} /> <img src={Start} /> <img src={Start} /> (1121)
              <Card.Title style={{ fontWeight: 'bold', color: 'black', fontSize: '19px', margin: '15px' }}>Rp.10.000</Card.Title>
            </Card.Body>
          </Card>
          </a>
        </div>
        <div className='col-md-3'>
          <a className="fb" href="#"><Card style={{ width: '400px', height: '530px', margin: '10px', marginLeft: '70%' }}>
            <img src={Pakar3} />
            <Card.Body>
              <Card.Title style={{ fontWeight: 'bold', color: 'black', fontSize: '19px' }}>Dewi Santika</Card.Title>
              <Card.Text style={{ fontSize: '16px' }}>Ahli tanaman</Card.Text>
              <img src={Start} /> <img src={Start} /> <img src={Start} /> <img src={Start} /> <img src={Start} /> (1121)
              <Card.Title style={{ fontWeight: 'bold', color: 'black', fontSize: '19px', margin: '15px' }}>Rp.10.000</Card.Title>
            </Card.Body>
          </Card>
          </a>
        </div>
      </div>
      
    </>
  )
}
export default Konsultasi
