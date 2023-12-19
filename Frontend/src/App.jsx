// app.jsx
import { useEffect } from 'react';
import { Routes, Route,useLocation } from 'react-router-dom'


import HomePage from './pages/HomePage'
import Login from './pages/Login'
import Register from './pages/Register'
import UserProfile from './pages/UserProfile'
import TentangKami from './pages/TentangKami'
import Informasi from './pages/Informasi'
import Konsultasi from './pages/Konsultasi'

import LidahMertua from './page/LidahMertua'
import Aglaonema from './page/Aglaonema'
import Aloevera from './page/AloeVera'
import Sirihgading from './page/SirihGading'
import Bromeila from './page/Bromeila'
import Liliparis from './page/Liliparis'
import Monstera from './page/Monstera'
import Peacelily from './page/Peacelily'
import KonsulBudi from './page/KonsulBudi'
import Konsulkarin from './page/konsulkarin'
import Konsuldewi from './page/konsuldewi'
import Video1 from './page/Video1'
import Video2 from './page/Video2'
import Video3 from './page/Video3'
import Video4 from './page/Video4'

import NavbarComponent from './components/NavbarComponent'
import FooterComponent from './components/FooterComponent'


function App() {
  // Membuat array untuk menyimpan path halaman yang tidak memerlukan Navbar dan Footer
  const excludePaths = ['/Login', '/Register'];

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Setel ulang scroll ke atas ketika komponen dipasang
  }, [location.pathname]);
  return (
    <div>
      {/* Menampilkan Navbar hanya jika path tidak termasuk dalam excludePaths */}
      {!excludePaths.includes(window.location.pathname) && <NavbarComponent />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="Login" element={<Login />} />
        <Route path="Register" element={<Register />} />
        <Route path="profile" element={<UserProfile />} />
        <Route path="tentangkami" element={<TentangKami />} />
        <Route path="Informasi" element={<Informasi />} />
        <Route path="Konsultasi" element={<Konsultasi />} />

        <Route path="LidahMertua" element={<LidahMertua />} />
        <Route path="Aglaonema" element={<Aglaonema />} />
        <Route path="Aloevera" element={<Aloevera />} />
        <Route path="Sirihgading" element={<Sirihgading />} />
        <Route path="Bromeila" element={<Bromeila />} />
        <Route path="Liliparis" element={<Liliparis />} />
        <Route path="Monstera" element={<Monstera />} />
        <Route path="Peacelily" element={<Peacelily />} />
        <Route path="KonsulBudi" element={<KonsulBudi />} />
        <Route path="konsulkarin" element={<Konsulkarin />} />
        <Route path="Konsuldewi" element={<Konsuldewi />} />
        <Route path="video1" element={<Video1 />} />
        <Route path="video2" element={<Video2 />} />
        <Route path="video3" element={<Video3 />} />
        <Route path="video4" element={<Video4 />} />
        
      </Routes>

      {/* Menampilkan Footer hanya jika path tidak termasuk dalam excludePaths */}
      {!excludePaths.includes(location.pathname) && <FooterComponent />}
    </div>
  );
}

export default App