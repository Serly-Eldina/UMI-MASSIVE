
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/informasi.css'

import background from '../images/tips.png'
import apaitu from '../images/apaitu.png'
import tanah1 from '../images/tanah1.png'; import tanah2 from '../images/tanah2.png'; import tanah3 from '../images/tanah3.png'
import Card from 'react-bootstrap/Card';

import tips1 from '../images/tips1.png'; import tips2 from '../images/tips2.png'; import tips3 from '../images/tips3.png'; import tips4 from '../images/tips4.png'
import tips5 from '../images/tips5.png'; import tips6 from '../images/tips6.png'; import tips7 from '../images/tips7.png'; import tips8 from '../images/tips8.png'
import tips9 from '../images/tips9.png'; import tips10 from '../images/tips10.png'; import tips11 from '../images/tips11.png'; import tips12 from '../images/tips12.png'
import tips13 from '../images/tips13.png'; import tips14 from '../images/tips14.png'; import tips15 from '../images/tips15.png'; import tips16 from '../images/tips16.png'
import play from '../images/play.png';
import video1 from '../images/video1.png'; import video2 from '../images/video2.png'; import video3 from '../images/video3.png'; import video4 from '../images/video4.png';
import video5 from '../images/video5.png'; import video6 from '../images/video6.png'; import video7 from '../images/video7.png'; import video8 from '../images/video8.png';
const informasi = () => {
    return (
        <>

            <div className="tips" style={{ backgroundImage: `url(${background})` }}>

                <div className="tips2" >
                    <p>a</p>
                    <p>Tips & Trik Merawat</p>
                    <p>Tanaman Hias</p>
                </div>
            </div>
            <div className='gabung'>
                <div className='col-md-6'>
                    <div className='textgabung'>
                        <div className='judulnutrisi' style={{ width: '500px' }}>Apa Itu Tanaman Hias ?</div>
                        <div className='listgabung'>
                            <p style={{ textAlign: 'justify' }}>Tanaman hias merupakan tumbuhan yang biasa ditanam orang sebagai hiasan. Umumnya pengertian hiasan adalah hiasan di dalam rumah, atau tamantaman umum, karena di ditanam di rumah atau ditanam di taman, otomatis ukuran tanam tidak terlalu besar dan rimbun. Pada umumnya tanaman hias dapat di golongkan menjadi tanaman hias bunga dan tanaman hias daun. Tanaman hias bunga merupakan tanaman hias dengan bagian bunga yang menarik. Adapun tanaman hias daun merupakan tanaman daun yang menarik. Dalam hal ini perlu di ketahui bahwa organ daun terdiri dari pelepah, tangkai, dan helaian oleh karena itu tanaman yang mempunyai pelepah menarik.</p> </div>
                    </div></div>
                <div className='col-md-6'>
                    <div className='gambargabung'>
                        <img
                            src={apaitu}
                            alt="Login Image"
                        />
                    </div></div>
            </div>


            <div className='jenistanah'>
                <div className='juduljenistanah'>
                    <p>Jenis Tanah</p>
                    <p>Berikut Jenis Tanah yang bagus untuk tanaman hias</p>
                </div>
                <div className='isitanah'>
                    <div className='col-md-4'>
                        <div className='isitanah1'>
                            <div style={{ width: '18rem' }}>
                                <img src={tanah1} />
                                <div>
                                    <div style={{ fontWeight: 'bolder' }}>Tanah Geluh</div>
                                    <div className='texttanah' style={{ marginTop: '23px' }}>
                                        Geluh merupakan tanah dengan kandungan yang terdiri dari pasir, debu, tanah liat, dan humus dalam komposisi yang seimbang. Tanah ini memiliki gizi tinggi yang baik bagi tanaman karena kandungannya. Kondisi pH berpengaruh pada kemampuan tanaman untuk tumbuh menjadi nutrisi untuk organisme lain seperti cacing tanah.Tanah geluh tinggi memiliki kalsium yang lebih tinggi dibanding beberapa jenis tanah lain.
                                    </div>
                                </div>
                            </div>
                        </div> </div>

                    <div className='col-md-4'>
                        <div className='isitanah1'>
                            <div style={{ width: '18rem' }}>
                                <img src={tanah2} />
                                <div>
                                    <div style={{ fontWeight: 'bolder' }}>Tanah Berpasir</div>
                                    <div className='texttanah' style={{ marginTop: '23px' }}>
                                        Tanah berpasir adalah jenis tanah yang cocok untuk tanaman hias. Pasir berasal dari bebatuan yang terkikis. Tanah jenis ini cenderung kurang baik dalam penyerapan air juga lebih cepat panas saat musim panas Oleh karena itu penggunaan tanah berpasir harus dicampur dengan bahan organik lain seperti pupuk kandang atau kompos untuk menahan air dan meningkatkan nutrisi di dalam tanah.
                                    </div>
                                </div>
                            </div>
                        </div> </div>

                    <div className='col-md-4'>
                        <div className='isitanah1'>
                            <div style={{ width: '18rem' }}>
                                <img src={tanah3} />
                                <div>
                                    <div style={{ fontWeight: 'bolder' }}>Tanah Liat</div>
                                    <div className='texttanah' style={{ marginTop: '23px' }}>
                                        Tanah liat adalah jenis tanah padat yang memiliki unsur hara yang tinggi. Tanah liat memiliki karakteristik padat, tapi lembut dan mudah dibentuk. Tanah liat juga lengket saat basah dan keras saat mengering.Karakteristik ini membuat tanah liar sulit menyerap air. karena itu tanah liat perlu dicampur dengan pasir, pupuk kompos, dan gipsum.
                                    </div>
                                </div>
                            </div>
                        </div> </div>
                </div>
            </div>


            <div className='tipsntrik'>
                <div className='kotak' style={{ backgroundColor: '#34745C' }}>
                    <p></p>
                    <p style={{ textAlign: 'center', color: '#ffff', fontWeight: 'bold', fontSize: '23px' }}>
                        Tips & Trik</p>
                </div>

                <div className='isitips'>

                    <div className='tipsbaris' style={{ marginTop: '50px' }}>
                        <div className='col-md-3'>
                            <a className="fb" href="#">
                                <Card className='kotaktips' style={{ height: '350px' }}>
                                    <img src={tips1} />
                                    <Card.Body>
                                        <Card.Title style={{ textAlign: 'center', fontSize: '20px', color: '#044F1E', fontWeight: '650' }}>Lidah Mertua</Card.Title>
                                        <Card.Text style={{ textAlign: 'justify', fontSize: '14px' }}>
                                            Tanaman lidah mertua dikenal juga dengan sebutan Sansevieria. Bentuknya berupa daun panjang dan runcing degan tekstur tebal dan keras. lidah mertua juga mampu menyerap karbon monoksida dan karbon dioksida
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </a>
                        </div>
                        <div className='col-md-3'>
                            <a className="fb" href="#">
                                <Card className='kotaktips' style={{ height: '350px' }}>
                                    <img src={tips2} />
                                    <Card.Body>
                                        <Card.Title style={{ textAlign: 'center', fontSize: '20px', color: '#044F1E', fontWeight: '650' }}>Sirih Gading</Card.Title>
                                        <Card.Text style={{ textAlign: 'justify', fontSize: '14px' }}>
                                            Sirih gading termasuk tanaman hias dalam ruangan yang sangat mudah dirawat.Tanaman hias dalam ruangan ini bisa tumbuh dengan baik ketika ditanam melalui media tanah maupun air.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </a>
                        </div>
                        <div className='col-md-3'>
                            <a className="fb" href="#">
                                <Card className='kotaktips' style={{ height: '350px' }}>
                                    <img src={tips3} />
                                    <Card.Body>
                                        <Card.Title style={{ textAlign: 'center', fontSize: '20px', color: '#044F1E', fontWeight: '650' }}>Peace Lily</Card.Title>
                                        <Card.Text style={{ textAlign: 'justify', fontSize: '14px' }}>
                                            Tanaman hias lili perdamaian juga termasuk salah satu tanaman yang cocok di dalam ruangan karena mampu menyerap polutan dengan baik.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </a>
                        </div>
                        <div className='col-md-3'>
                            <a className="fb" href="#">
                                <Card className='kotaktips' style={{ height: '350px' }}>
                                    <img src={tips4} />
                                    <Card.Body>
                                        <Card.Title style={{ textAlign: 'center', fontSize: '20px', color: '#044F1E', fontWeight: '650' }}>Aloe Vera</Card.Title>
                                        <Card.Text style={{ textAlign: 'justify', fontSize: '14px' }}>
                                            Aloe vera atau lidah buaya dapat tumbuh subur di dalam ruangan. Tanaman ini juga menyukai cahaya matahari yang tidak langsung, jadi memang baik untuk diletakkan di teras atau dalam ruangan.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </a>
                        </div>
                    </div>

                    <div className='tipsbaris'>
                        <div className='col-md-3'>
                            <a className="fb" href="#">
                                <Card className='kotaktips' style={{ height: '350px' }}>
                                    <img src={tips5} />
                                    <Card.Body>
                                        <Card.Title style={{ textAlign: 'center', fontSize: '20px', color: '#044F1E', fontWeight: '650' }}>Bromeliad</Card.Title>
                                        <Card.Text style={{ textAlign: 'justify', fontSize: '14px' }}>
                                            Bromeliad ternyata mampu menghilangkan lebih dari 80% dari enam senyawa organik yang berbahaya!
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </a>
                        </div>
                        <div className='col-md-3'>
                            <a className="fb" href="#">
                                <Card className='kotaktips' style={{ height: '350px' }}>
                                    <img src={tips6} />
                                    <Card.Body>
                                        <Card.Title style={{ textAlign: 'center', fontSize: '20px', color: '#044F1E', fontWeight: '650' }}>Lili Paris</Card.Title>
                                        <Card.Text style={{ textAlign: 'justify', fontSize: '14px' }}>
                                            Lili Paris atau yang seringkali disebut chlorophytum ini merupakan sebuah tanaman hias yang dapat berfotosintesis dibawah cahaya matahari yang lemah menyerap udara dengan zat yang berbahaya.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </a>
                        </div>
                        <div className='col-md-3'>
                            <a className="fb" href="#">
                                <Card className='kotaktips' style={{ height: '350px' }}>

                                    <img src={tips7} />
                                    <Card.Body>
                                        <Card.Title style={{ textAlign: 'center', fontSize: '20px', color: '#044F1E', fontWeight: '650' }}>Monstera Deliciosa</Card.Title>
                                        <Card.Text style={{ textAlign: 'justify', fontSize: '14px' }}>
                                            Tanaman kekinian Monstera atau dikenal sebagai nama tanaman janda bolong menjadi tanaman hias unik yang berasal dari daerah tropis Amerika yang menjadikan banyak peminat di tahun ini.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </a>
                        </div>
                        <div className='col-md-3'>
                            <a className="fb" href="#">
                                <Card className='kotaktips' style={{ height: '350px' }}>
                                    <img src={tips8} />
                                    <Card.Body>
                                        <Card.Title style={{ textAlign: 'center', fontSize: '20px', color: '#044F1E', fontWeight: '650' }}>Bunga Krisan</Card.Title>
                                        <Card.Text style={{ textAlign: 'justify', fontSize: '14px' }}>
                                            Bunga krisan atau bunga seruni yang dapat menyerap amonia, benzena, formalin, dan zat buruk lainnya. Hanya saja, bunga krisan tidak boleh terpapar sinar matahari langsung dan harus berada pada
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </a>
                        </div>
                    </div>
                    <div className='tipsbaris'>
                        <div className='col-md-3'>
                            <a className="fb" href="#">
                                <Card className='kotaktips' style={{ height: '350px' }}>
                                    <img src={tips9} />
                                    <Card.Body>
                                        <Card.Title style={{ textAlign: 'center', fontSize: '20px', color: '#044F1E', fontWeight: '650' }}>Aglaonema</Card.Title>
                                        <Card.Text style={{ textAlign: 'justify', fontSize: '14px' }}>
                                            Aglaonema (disebut juga Aglonema) masih berasal dari suku talas-talasan atau Araceae yang tetap bisa bertahan hidup meskipun mendapat sinar matahari minim.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </a>
                        </div>
                        <div className='col-md-3'>
                            <a className="fb" href="#">
                                <Card className='kotaktips' style={{ height: '350px' }}>
                                    <img src={tips10} />
                                    <Card.Body>
                                        <Card.Title style={{ textAlign: 'center', fontSize: '20px', color: '#044F1E', fontWeight: '650' }}>Kaktus Koboi</Card.Title>
                                        <Card.Text style={{ textAlign: 'justify', fontSize: '14px' }}>
                                            Kaktus koboi sangat difavoritkan dan masih hits hingga sekarang karena banyak yang menanam serta membudidayakannya.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </a>
                        </div>
                        <div className='col-md-3'>
                            <a className="fb" href="#">
                                <Card className='kotaktips' style={{ height: '350px' }}>
                                    <img src={tips11} />
                                    <Card.Body>
                                        <Card.Title style={{ textAlign: 'center', fontSize: '20px', color: '#044F1E', fontWeight: '650' }}>Pakis Jepang</Card.Title>
                                        <Card.Text style={{ textAlign: 'justify', fontSize: '14px' }}>
                                            Pakis Jepang menjadi tanaman hias daun outdoor yang sangat disukai oleh masyarakat Indonesia untuk ditanam di halaman rumah.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </a>
                        </div>
                        <div className='col-md-3'>
                            <a className="fb" href="#">
                                <Card className='kotaktips' style={{ height: '350px' }}>
                                    <img src={tips12} />
                                    <Card.Body>
                                        <Card.Title style={{ textAlign: 'center', fontSize: '20px', color: '#044F1E', fontWeight: '650' }}>Paku Tanduk Rusa</Card.Title>
                                        <Card.Text style={{ textAlign: 'justify', fontSize: '14px' }}>
                                            Dinamakan paku tanduk rusa karena tanaman hias daun outdoor ini memiliki bentuk daun yang mirip dengan tanduk rusa.

                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </a>
                        </div>
                    </div>
                    <div className='tipsbaris'>
                        <div className='col-md-3'>
                            <a className="fb" href="#">
                                <Card className='kotaktips' style={{ height: '350px' }}>
                                    <img src={tips13} />
                                    <Card.Body>
                                        <Card.Title style={{ textAlign: 'center', fontSize: '20px', color: '#044F1E', fontWeight: '650' }}>Sansevieria</Card.Title>
                                        <Card.Text style={{ textAlign: 'justify', fontSize: '14px' }}>
                                            Sansevieria atau yang lebih dikenal dengan nama lidah mertua adalah tanaman hias yang mampu menyerap kadar karbondioksida dalam jumlah besar sehingga bisa membuat udara di depan rumah jadi lebih segar.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </a>
                        </div>
                        <div className='col-md-3'>
                            <a className="fb" href="#">
                                <Card className='kotaktips' style={{ height: '350px' }}>
                                    <img src={tips14} />
                                    <Card.Body>
                                        <Card.Title style={{ textAlign: 'center', fontSize: '20px', color: '#044F1E', fontWeight: '650' }}>Canna</Card.Title>
                                        <Card.Text style={{ textAlign: 'justify', fontSize: '14px' }}>
                                            Canna tak hanya memiliki daun yang apik, tapi juga ada bunga yang membuat tampilannya lebih cantik. Warna bunga dari canna adalah orange agak kemerahan.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </a>
                        </div>
                        <div className='col-md-3'>
                            <a className="fb" href="#">
                                <Card className='kotaktips' style={{ height: '350px' }}>
                                    <img src={tips15} />
                                    <Card.Body>
                                        <Card.Title style={{ textAlign: 'center', fontSize: '20px', color: '#044F1E', fontWeight: '650' }}>Siklok</Card.Title>
                                        <Card.Text style={{ textAlign: 'justify', fontSize: '14px' }}>
                                            siklok ini sebenarnya mirip dengan bunga karena daun-daunnya mengumpul menjadi satu pada bagian ujung bawah yang melekat pada batang.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </a>
                        </div>
                        <div className='col-md-3'>
                            <a className="fb" href="#">
                                <Card className='kotaktips' style={{ height: '350px' }}>
                                    <img src={tips16} />
                                    <Card.Body>
                                        <Card.Title style={{ textAlign: 'center', fontSize: '20px', color: '#044F1E', fontWeight: '650' }}>Caladium</Card.Title>
                                        <Card.Text style={{ textAlign: 'justify', fontSize: '14px' }}>
                                            Caladium di Indonesia disebut dengan nama julukan sayap malaikat, karena bentuk mirip dengan mata panah besar. Ada juga yang menjulukinya sebagai tanaman hati karena bentuknya juga mirip hati.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </a>
                        </div>
                    </div>

                </div>
            </div>






            <div className='tipsntrik2'>
                <div className='kotak2' style={{ backgroundColor: '#34745C' }}>
                    <p></p>
                    <p style={{ textAlign: 'center', color: '#ffff', fontWeight: 'bold', fontSize: '23px' }}>
                        Video Tutorial</p>
                </div>

                <div className='isitips'>

                    <div className='tipsbaris' style={{ marginTop: '50px' }}>

                        <div className='col-md-3'>
                            <a className="fb" href="#">
                                <Card className='kotaktips' style={{ height: '235px' }}>
                                    <img src={video1} />
                                    <div className='child'>
                                        <img src={play} />
                                    </div>
                                    <Card.Body>
                                        <Card.Title style={{ fontSize: '13px', color: '#044F1E', fontWeight: '580' }}>12 cara merawat tanaman hias daun dan bunga</Card.Title>
                                        <Card.Text style={{ textAlign: 'justify', fontSize: '13px' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <p>232rb views  </p>  &bull;  <p>2 Weeks ago </p>
                                                <div style={{ marginTop: '2px', width: '47px', height: '16px', backgroundColor: '#6F6F6F', borderRadius: '10px' }}>
                                                    <p style={{ textAlign: 'center', color: '#ffff', textDecoration: 'none', fontSize: '12px' }}>14 min</p>
                                                </div>
                                            </div>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </a>
                        </div>

                        <div className='col-md-3'>
                            <a className="fb" href="#">
                                <Card className='kotaktips' style={{ height: '235px' }}>
                                    <img src={video2} />
                                    <div className='child'>
                                        <img src={play} />
                                    </div>
                                    <Card.Body>
                                        <Card.Title style={{ fontSize: '13px', color: '#044F1E', fontWeight: '580' }}>12 cara merawat tanaman hias daun dan bunga</Card.Title>
                                        <Card.Text style={{ textAlign: 'justify', fontSize: '13px' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <p>232rb views  </p>  &bull;  <p>2 Weeks ago </p>
                                                <div style={{ marginTop: '2px', width: '47px', height: '16px', backgroundColor: '#6F6F6F', borderRadius: '10px' }}>
                                                    <p style={{ textAlign: 'center', color: '#ffff', textDecoration: 'none', fontSize: '12px' }}>14 min</p>
                                                </div>
                                            </div>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </a>
                        </div>
                        <div className='col-md-3'>
                            <a className="fb" href="#">
                                <Card className='kotaktips' style={{ height: '235px' }}>
                                    <img src={video3} />
                                    <div className='child'>
                                        <img src={play} />
                                    </div>
                                    <Card.Body>
                                        <Card.Title style={{ fontSize: '13px', color: '#044F1E', fontWeight: '580' }}>Cara Merimbunkan Dan Menyuburkan Janda Bolong di Pot</Card.Title>
                                        <Card.Text style={{ textAlign: 'justify', fontSize: '13px' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <p>37rb views  </p>  &bull;  <p>2 Weeks ago </p>
                                                <div style={{ marginTop: '2px', width: '47px', height: '16px', backgroundColor: '#6F6F6F', borderRadius: '10px' }}>
                                                    <p style={{ textAlign: 'center', color: '#ffff', textDecoration: 'none', fontSize: '12px' }}>11 min</p>
                                                </div>
                                            </div>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </a>
                        </div>
                        <div className='col-md-3'>
                            <a className="fb" href="#">
                                <Card className='kotaktips' style={{ height: '235px' }}>
                                    <img src={video4} />
                                    <div className='child'>
                                        <img src={play} />
                                    </div>
                                    <Card.Body>
                                        <Card.Title style={{ fontSize: '13px', color: '#044F1E', fontWeight: '580' }}>Tips Merawat Tanaman Hias Bagi Pemula Agar Tumbuh Subur</Card.Title>
                                        <Card.Text style={{ textAlign: 'justify', fontSize: '13px' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <p>37rb views  </p>  &bull;  <p>2 Weeks ago </p>
                                                <div style={{ marginTop: '2px', width: '47px', height: '16px', backgroundColor: '#6F6F6F', borderRadius: '10px' }}>
                                                    <p style={{ textAlign: 'center', color: '#ffff', textDecoration: 'none', fontSize: '12px' }}>11 min</p>
                                                </div>
                                            </div>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </a>
                        </div>
                    </div>

                    <div className='tipsbaris'>
                        <div className='col-md-3'>
                            <a className="fb" href="#">
                                <Card className='kotaktips' style={{ height: '235px' }}>
                                    <img src={video5} />
                                    <div className='child'>
                                        <img src={play} />
                                    </div>
                                    <Card.Body>
                                        <Card.Title style={{ fontSize: '13px', color: '#044F1E', fontWeight: '580' }}>Tips perawatan & pupuk aglaonema terbaik </Card.Title>
                                        <Card.Text style={{ textAlign: 'justify', fontSize: '13px' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <p>518rb views  </p>  &bull;  <p>2 Weeks ago </p>
                                                <div style={{ marginTop: '2px', width: '47px', height: '16px', backgroundColor: '#6F6F6F', borderRadius: '10px' }}>
                                                    <p style={{ textAlign: 'center', color: '#ffff', textDecoration: 'none', fontSize: '12px' }}>14 min</p>
                                                </div>
                                            </div>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </a>
                        </div>
                        <div className='col-md-3'>
                            <a className="fb" href="#">
                                <Card className='kotaktips' style={{ height: '235px' }}>
                                    <img src={video6} />
                                    <div className='child'>
                                        <img src={play} />
                                    </div>
                                    <Card.Body>
                                        <Card.Title style={{ fontSize: '13px', color: '#044F1E', fontWeight: '580' }}>Serunya Berkebun di Rooftop dan Balkon </Card.Title>
                                        <Card.Text style={{ textAlign: 'justify', fontSize: '13px' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <p>518rb views  </p>  &bull;  <p>2 Weeks ago </p>
                                                <div style={{ marginTop: '2px', width: '47px', height: '16px', backgroundColor: '#6F6F6F', borderRadius: '10px' }}>
                                                    <p style={{ textAlign: 'center', color: '#ffff', textDecoration: 'none', fontSize: '12px' }}>3 min</p>
                                                </div>
                                            </div>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </a>
                        </div>
                        <div className='col-md-3'>
                            <a className="fb" href="#">
                                <Card className='kotaktips' style={{ height: '235px' }}>
                                    <img src={video7} />
                                    <div className='child'>
                                        <img src={play} />
                                    </div>
                                    <Card.Body>
                                        <Card.Title style={{ fontSize: '12px', color: '#044F1E', fontWeight: '580' }}>Wajib Punya Dirumah !! 15 Tanaman Hias Pembawa Rejeki & Keberuntungan </Card.Title>
                                        <Card.Text style={{ textAlign: 'justify', fontSize: '12px' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <p>29rb views  </p>  &bull;  <p>2 Weeks ago </p>
                                                <div style={{ marginTop: '2px', width: '47px', height: '16px', backgroundColor: '#6F6F6F', borderRadius: '10px' }}>
                                                    <p style={{ textAlign: 'center', color: '#ffff', textDecoration: 'none', fontSize: '12px' }}> min</p>
                                                </div>
                                            </div>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </a>
                        </div>
                        <div className='col-md-3'>
                            <a className="fb" href="#">
                                <Card className='kotaktips' style={{ height: '235px' }}>
                                    <img src={video8} />
                                    <div className='child'>
                                        <img src={play} />
                                    </div>
                                    <Card.Body>
                                        <Card.Title style={{ fontSize: '13px', color: '#044F1E', fontWeight: '580' }}>cara membuat taman di depan rumah </Card.Title>
                                        <Card.Text style={{ textAlign: 'justify', fontSize: '13px' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <p>1.3jt views  </p>  &bull;  <p>2 Weeks ago </p>
                                                <div style={{ marginTop: '2px', width: '47px', height: '16px', backgroundColor: '#6F6F6F', borderRadius: '10px' }}>
                                                    <p style={{ textAlign: 'center', color: '#ffff', textDecoration: 'none', fontSize: '12px' }}>3 min</p>
                                                </div>
                                            </div>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </a>
                        </div>
                    </div>
                    <div className='tipsbaris'>
                        <div className='col-md-3'>
                            <a className="fb" href="#">
                                <Card className='kotaktips' style={{ height: '235px' }}>
                                    <img src={video1} />
                                    <div className='child'>
                                        <img src={play} />
                                    </div>
                                    <Card.Body>
                                        <Card.Title style={{ fontSize: '13px', color: '#044F1E', fontWeight: '580' }}>12 cara merawat tanaman hias daun dan bunga</Card.Title>
                                        <Card.Text style={{ textAlign: 'justify', fontSize: '13px' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <p>232rb views  </p>  &bull;  <p>2 Weeks ago </p>
                                                <div style={{ marginTop: '2px', width: '47px', height: '16px', backgroundColor: '#6F6F6F', borderRadius: '10px' }}>
                                                    <p style={{ textAlign: 'center', color: '#ffff', textDecoration: 'none', fontSize: '12px' }}>14 min</p>
                                                </div>
                                            </div>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </a>
                        </div>

                        <div className='col-md-3'>
                            <a className="fb" href="#">
                                <Card className='kotaktips' style={{ height: '235px' }}>
                                    <img src={video2} />
                                    <div className='child'>
                                        <img src={play} />
                                    </div>
                                    <Card.Body>
                                        <Card.Title style={{ fontSize: '13px', color: '#044F1E', fontWeight: '580' }}>12 cara merawat tanaman hias daun dan bunga</Card.Title>
                                        <Card.Text style={{ textAlign: 'justify', fontSize: '13px' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <p>232rb views  </p>  &bull;  <p>2 Weeks ago </p>
                                                <div style={{ marginTop: '2px', width: '47px', height: '16px', backgroundColor: '#6F6F6F', borderRadius: '10px' }}>
                                                    <p style={{ textAlign: 'center', color: '#ffff', textDecoration: 'none', fontSize: '12px' }}>14 min</p>
                                                </div>
                                            </div>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </a>
                        </div>

                        <div className='col-md-3'>
                            <a className="fb" href="#">
                                <Card className='kotaktips' style={{ height: '235px' }}>
                                    <img src={video3} />
                                    <div className='child'>
                                        <img src={play} />
                                    </div>
                                    <Card.Body>
                                        <Card.Title style={{ fontSize: '13px', color: '#044F1E', fontWeight: '580' }}>Cara Merimbunkan Dan Menyuburkan Janda Bolong di Pot</Card.Title>
                                        <Card.Text style={{ textAlign: 'justify', fontSize: '13px' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <p>37rb views  </p>  &bull;  <p>2 Weeks ago </p>
                                                <div style={{ marginTop: '2px', width: '47px', height: '16px', backgroundColor: '#6F6F6F', borderRadius: '10px' }}>
                                                    <p style={{ textAlign: 'center', color: '#ffff', textDecoration: 'none', fontSize: '12px' }}>11 min</p>
                                                </div>
                                            </div>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </a>
                        </div>
                        <div className='col-md-3'>
                            <a className="fb" href="#">
                                <Card className='kotaktips' style={{ height: '235px' }}>
                                    <img src={video4} />
                                    <div className='child'>
                                        <img src={play} />
                                    </div>
                                    <Card.Body>
                                        <Card.Title style={{ fontSize: '13px', color: '#044F1E', fontWeight: '580' }}>Tips Merawat Tanaman Hias Bagi Pemula Agar Tumbuh Subur</Card.Title>
                                        <Card.Text style={{ textAlign: 'justify', fontSize: '13px' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <p>37rb views  </p>  &bull;  <p>2 Weeks ago </p>
                                                <div style={{ marginTop: '2px', width: '47px', height: '16px', backgroundColor: '#6F6F6F', borderRadius: '10px' }}>
                                                    <p style={{ textAlign: 'center', color: '#ffff', textDecoration: 'none', fontSize: '12px' }}>11 min</p>
                                                </div>
                                            </div>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </a>
                        </div>
                    </div>
                    <div className='tipsbaris'>
                        <div className='col-md-3'>
                            <a className="fb" href="#">
                                <Card className='kotaktips' style={{ height: '235px' }}>
                                    <img src={video5} />
                                    <div className='child'>
                                        <img src={play} />
                                    </div>
                                    <Card.Body>
                                        <Card.Title style={{ fontSize: '13px', color: '#044F1E', fontWeight: '580' }}>Tips perawatan & pupuk aglaonema terbaik </Card.Title>
                                        <Card.Text style={{ textAlign: 'justify', fontSize: '13px' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <p>518rb views  </p>  &bull;  <p>2 Weeks ago </p>
                                                <div style={{ marginTop: '2px', width: '47px', height: '16px', backgroundColor: '#6F6F6F', borderRadius: '10px' }}>
                                                    <p style={{ textAlign: 'center', color: '#ffff', textDecoration: 'none', fontSize: '12px' }}>14 min</p>
                                                </div>
                                            </div>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </a>
                        </div>
                        <div className='col-md-3'>
                            <a className="fb" href="#">
                                <Card className='kotaktips' style={{ height: '235px' }}>
                                    <img src={video6} />
                                    <div className='child'>
                                        <img src={play} />
                                    </div>
                                    <Card.Body>
                                        <Card.Title style={{ fontSize: '13px', color: '#044F1E', fontWeight: '580' }}>Serunya Berkebun di Rooftop dan Balkon </Card.Title>
                                        <Card.Text style={{ textAlign: 'justify', fontSize: '13px' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <p>518rb views  </p>  &bull;  <p>2 Weeks ago </p>
                                                <div style={{ marginTop: '2px', width: '47px', height: '16px', backgroundColor: '#6F6F6F', borderRadius: '10px' }}>
                                                    <p style={{ textAlign: 'center', color: '#ffff', textDecoration: 'none', fontSize: '12px' }}>3 min</p>
                                                </div>
                                            </div>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </a>
                        </div>
                        <div className='col-md-3'>
                            <a className="fb" href="#">
                                <Card className='kotaktips' style={{ height: '235px' }}>
                                    <img src={video7} />
                                    <div className='child'>
                                        <img src={play} />
                                    </div>
                                    <Card.Body>
                                        <Card.Title style={{ fontSize: '12px', color: '#044F1E', fontWeight: '580' }}>Wajib Punya Dirumah !! 15 Tanaman Hias Pembawa Rejeki & Keberuntungan </Card.Title>
                                        <Card.Text style={{ textAlign: 'justify', fontSize: '12px' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <p>29rb views  </p>  &bull;  <p>2 Weeks ago </p>
                                                <div style={{ marginTop: '2px', width: '47px', height: '16px', backgroundColor: '#6F6F6F', borderRadius: '10px' }}>
                                                    <p style={{ textAlign: 'center', color: '#ffff', textDecoration: 'none', fontSize: '12px' }}> min</p>
                                                </div>
                                            </div>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </a>
                        </div>
                        <div className='col-md-3'>
                            <a className="fb" href="#">
                                <Card className='kotaktips' style={{ height: '235px' }}>
                                    <img src={video8} />
                                    <div className='child'>
                                        <img src={play} />
                                    </div>
                                    <Card.Body>
                                        <Card.Title style={{ fontSize: '13px', color: '#044F1E', fontWeight: '580' }}>cara membuat taman di depan rumah </Card.Title>
                                        <Card.Text style={{ textAlign: 'justify', fontSize: '13px' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <p>1.3jt views  </p>  &bull;  <p>2 Weeks ago </p>
                                                <div style={{ marginTop: '2px', width: '47px', height: '16px', backgroundColor: '#6F6F6F', borderRadius: '10px' }}>
                                                    <p style={{ textAlign: 'center', color: '#ffff', textDecoration: 'none', fontSize: '12px' }}>3 min</p>
                                                </div>
                                            </div>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </a>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}
export default informasi