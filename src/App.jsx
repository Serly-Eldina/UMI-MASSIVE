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
import Bromeilad from './page/Bromeilad'
import Liliparis from './page/Liliparis'
import Monstera from './page/Monstera'
import Peacelily from './page/Peacelily'


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
        <Route path="Bromeilad" element={<Bromeilad />} />
        <Route path="Liliparis" element={<Liliparis />} />
        <Route path="Monstera" element={<Monstera />} />
        <Route path="Peacelily" element={<Peacelily />} />
        
      </Routes>

      {/* Menampilkan Footer hanya jika path tidak termasuk dalam excludePaths */}
      {!excludePaths.includes(window.location.pathname) && <FooterComponent />}
    </div>
  );
}

export default App