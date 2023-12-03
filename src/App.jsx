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
function App() {
  // Membuat array untuk menyimpan path halaman yang tidak memerlukan Navbar dan Footer
  const excludePaths = ['/Login', '/Register'];

  return (
    <div>
      {/* Menampilkan Navbar hanya jika path tidak termasuk dalam excludePaths */}
      {!excludePaths.includes(window.location.pathname) && <NavbarComponent />}

   <Routes>
    <Route path="/" Component ={HomePage}/>
    <Route path="Login" Component ={LoginPage}/>
    <Route path='Register' Component={RegisterPage}/>
    <Route path='userprofile' Component={UserProfile}/>
    <Route path='tentangkami' Component={TentangKami}/>
    <Route path='Informasi' Component={Informasi}/>
    <Route path='LidahMertua' Component={LidahMertua}/>
    <Route path='Aglaonema' Component={Aglaonema}/>
    <Route path='Konsultasi' Component={Konsultasi}/>
   </Routes>

      {/* Menampilkan Footer hanya jika path tidak termasuk dalam excludePaths */}
      {!excludePaths.includes(window.location.pathname) && <FooterComponent />}
    </div>
  );
}

export default App