

import gambaraglaonema from '../images/gambaraglaonema.png'



const aglaonema = () => {
  return (
    <>

      <div className='tipslidah'>
        <p className='judul'>Cara Merawat Tanaman Hias Aglaonema</p>
        <img className="gambarlidah" style={{ justifyContent: 'center' }} src={gambaraglaonema} />
      </div>

      <div>
        <div className='bahan'>
          <p style={{ color: '#044F1E', fontWeight: 'bolder', fontSize: '20px' }}>Bahan Yang Diperlukan :</p>
          <div style={{ display: 'flex', fontSize: '16px' }}>
            &bull; &nbsp; <p>Siapkan pot untuk tanaman lidah mertua</p>
          </div>
          <div style={{ display: 'flex' }}>
            &bull; &nbsp; <p>Siapkan tanah sebagai media tanam</p>
          </div>
          <div style={{ display: 'flex' }}>
            &bull; &nbsp; <p>Siapkan tanaman sanseviera</p>
          </div>
        </div>


        <div className='tipsandtrik' style={{ width: '100%', textAlign: 'justify' }}>
          <p style={{ color: '#044F1E', fontWeight: 'bolder', fontSize: '20px' }}>Tips & Trick :</p>
          <div style={{ display: 'flex', fontSize: '15px' }}>
            <p>1.</p> &nbsp;<p> Pertama, pastikan agar memilih pot tanaman yang terbuat dari plastik dan memiliki lubang pada bagian bawahnya supaya air bisa mengalir keluar dengan mudah.</p>
          </div>
          <div style={{ display: 'flex', fontSize: '15px' }}>
            <p>2.</p> &nbsp;<p>Perlu menggunakan tanah atau media tanam yang tidak mudah menyerap air. Sebab lidah mertua bisa cepat membusuk jika tanahnya terlalu basah dan lembab.</p>
          </div>
          <div style={{ display: 'flex', fontSize: '15px' }}>
            <p>3.</p> &nbsp; <p>Tanamkan bibit tanaman Sansevieria ke dalam media tanam dan biarkanlah selama beberapa waktu supaya ia bisa tumbuh dengan subur.</p>
          </div>
          <div style={{ display: 'flex', fontSize: '15px' }}>
            <p>4. Pastikan juga untuk selalu merawatnya dengan baik sesuai tips yang sudah dijelaskan sebelumnya.</p>
          </div>
        </div>

        <div className='hal'>
          <p style={{ color: '#044F1E', fontWeight: 'bolder', fontSize: '20px' }}>Hal yang harus diperhatikan : </p>
          <div style={{ display: 'flex', fontSize: '16px' }}>
            &bull; &nbsp; <p>Jangan terlalu sering disiram</p>

          </div>
          <div style={{ display: 'flex', fontSize: '16px' }}>
            &bull; &nbsp; <p>Tempatkan diruangan yang teduh </p>

          </div>
          <div style={{ display: 'flex', fontSize: '16px' }}>
            &bull; &nbsp; <p>Berikan Pupuk</p>

          </div>
          <div style={{ display: 'flex', fontSize: '16px' }}>
            &bull; &nbsp; <p>Gunakan Pestisida</p>

          </div>

        </div></div>



    </>
  )
}
export default aglaonema
