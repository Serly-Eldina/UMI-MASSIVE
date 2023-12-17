import { Container, Row, Col } from 'react-bootstrap';


import gambarbromelia from '../images/gambarbromelia.png';

const Bromeila = () => {
    return (
        <>
            <Container className=''>
                <Row className='tips-agleonema text-center pt-5'>
                    <Col>
                        <h2 className='judul'>Cara Merawat Tanaman Hias Bromeilad</h2>
                        <img
                            className='gambarlidah img-fluid pt-4'
                            src={gambarbromelia}
                            alt='Aglaonema'
                            style={{ width: '100%', maxWidth: '600px', height: 'auto' }}
                        />
                    </Col>
                </Row>
            </Container>

            <Container className='pt-5 pb-5'>
                <Row>
                    <Col className='bahan pt-5'>
                        <h5 >Bahan Yang Diperlukan :</h5>
                        <ul>
                            <li>Siapkan pot untuk tanaman Bromeila</li>
                            <li>Siapkan tanah sebagai media tanam</li>
                            <li>Siapkan tanaman Bromeila</li>
                        </ul>

                    </Col>
                </Row>
                <Row >
                    <Col className='pt-4 '>
                        <h5>Tips & Trick</h5>
                        <ol type='1'>
                            <li>Pertama, pastikan agar memilih pot tanaman yang terbuat dari plastik dan memiliki lubang
                                pada bagian bawahnya supaya air bisa mengalir keluar dengan mudah.</li>
                            <li>Perlu menggunakan tanah atau media tanam yang tidak mudah menyerap air. Sebab Bromelia
                                bisa cepat membusuk jika tanahnya terlalu basah dan lembab</li>
                            <li>Tanamkan bibit tanaman Sansevieria ke dalam media tanam dan biarkanlah selama
                                beberapa waktu supaya ia bisa tumbuh dengan subur.</li>
                            <li>Pastikan juga untuk selalu merawatnya dengan baik sesuai tips yang sudah dijelaskan sebelumnya.</li>

                        </ol>
                    </Col>
                </Row>

                <Row >
                    <Col className='pt-4 '>
                        <h5>Hal yang harus diperhatikan :</h5>
                        <ul>
                            <li>Kebanyakan bromelia lebih suka berada di daerah yang suhunya berkisar antara 65-95°F (18-35ºC).</li>
                            <li>Memberikan pupuk seimbang secara teratur dapat membantu meningkatkan pertumbuhan tanaman.</li>
                            <li>Jenis media tanam yang cocok untuk tanaman bromelia diantaranya adalah cocopeat, sabut kelapa, dan sekam.</li>
                            <li>Pencahayaan yang memadai sangat penting untuk menumbuhkan tanaman bromelia yang sehat.</li>
                            <li>Tanaman Bromelia umumnya tidak tahan dengan cahaya matahari langsung, sehingga lebih cocok di tanam di dalam ruangan</li>
                            <li>Jangan menyiram tanaman terlalu sering/berlebihan, karena akan membuat tanah menjadi lembab</li>
                        </ul>

                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Bromeila