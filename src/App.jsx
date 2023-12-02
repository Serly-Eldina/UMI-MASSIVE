import { Routes, Route } from 'react-router-dom'


import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import UserProfile from './pages/UserProfile'
import TentangKami from './pages/TentangKami'
import Informasi from './pages/Informasi'
import LidahMertua from './pages/LidahMertua'
import Aglaonema from './pages/Aglaonema'
import Konsultasi from './pages/Konsultasi'

import NavbarComponent from './components/NavbarComponent'
import FooterComponent from './components/FooterComponent'

function App() {
  // Membuat array untuk menyimpan path halaman yang tidak memerlukan Navbar dan Footer
  const excludePaths = ['/Login', '/Register'];

  return (
    <div>
      {/* Menampilkan Navbar hanya jika path tidak termasuk dalam excludePaths */}
      {!excludePaths.includes(window.location.pathname) && <NavbarComponent />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="Login" element={<LoginPage />} />
        <Route path="Register" element={<RegisterPage />} />
        <Route path="userprofile" element={<UserProfile />} />
        <Route path="tentangkami" element={<TentangKami />} />
        <Route path="Informasi" element={<Informasi />} />
        <Route path="LidahMertua" element={<LidahMertua />} />
        <Route path="Aglaonema" element={<Aglaonema />} />
        <Route path="Konsultasi" element={<Konsultasi />} />
      </Routes>

      {/* Menampilkan Footer hanya jika path tidak termasuk dalam excludePaths */}
      {!excludePaths.includes(window.location.pathname) && <FooterComponent />}
    </div>
  );
}

export default App