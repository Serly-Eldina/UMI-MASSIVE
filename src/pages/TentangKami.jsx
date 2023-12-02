
import tentangkami from '../images/tentangkami.png';
import tentangkami1 from '../images/tentangkami1.png';
import layanan1 from '../images/layanan1.png';
import layanan2 from '../images/layanan2.png';
import layanan3 from '../images/layanan3.png';
import '../css/tentangkami.css';

const TentangKami = () => {
    return (
        <>
           
            <div>
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
            </div>

            <div style={{ paddingTop: '50px' }} className='col-md-12'>
                <div className='rencana'>
                    <div className='judul'>
                        <p>Layanan Yang Anda Dapatkan</p>
                        <p>Ikuti Instruksi untuk lebih lanjut</p>
                    </div>

                    <div className='isi'>

                        <div className='col-md-4'>
                            <div className='isi1'>
                                <div style={{ width: '18rem' }}>
                                    <img src={layanan1} />
                                    <div>
                                        <div style={{ fontWeight: 'bolder' }}>Penyiraman yang Tepat</div>
                                        <div className='textrencana' style={{ marginTop: '23px' }}>
                                            Tentukan jadwal penyiraman berdasarkan jenis tanaman, kondisi iklim, dan musim. Pastikan tanah tidak terlalu kering atau terlalu basah.
                                        </div>
                                    </div>
                                </div>
                            </div> </div>

                        <div className='col-md-4'>
                            <div className='isi2'>
                                <div style={{ width: '18rem' }}>
                                    <img src={layanan2} />
                                    <div>
                                        <div style={{ fontWeight: 'bolder' }}>Pemupukan Rutin</div>
                                        <div className='textrencana' style={{ marginTop: '23px' }}>
                                            Berikan tanaman nutrisi yang diperlukan dengan memilih pupuk yang sesuai dengan jenis tanaman dan fase pertumbuhannya.
                                        </div>
                                    </div>
                                </div></div></div>

                        <div className='col-md-4'>
                            <div className='isi3'>
                                <div style={{ width: '18rem' }}>
                                    <img src={layanan3} />
                                    <div>
                                        <div style={{ fontWeight: 'bolder' }}>Perhatikan Pencahayaan</div>
                                        <div className='textrencana' style={{ marginTop: '23px' }}>
                                            Beberapa tanaman membutuhkan sinar matahari langsung, dan ada yang di tempat teduh Pahami preferensi pencahayaan tanaman Anda.
                                        </div>
                                    </div>
                                </div></div></div>
                    </div>
                </div>
            </div>

            
        </>
    )
}

export default TentangKami