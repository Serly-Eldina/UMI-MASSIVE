import {Routes, Route} from 'react-router-dom'


import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import UserProfile from './pages/UserProfile'
<<<<<<< HEAD

=======
import TentangKami from './pages/TentangKami'
import Informasi from './pages/Informasi'
>>>>>>> 14b04bc0144be7acac16f4f3bf7da3a18829e8ea
function App() {
  return(
   <div>
    

   <Routes>
    <Route path="/" Component ={HomePage}/>
    <Route path="Login" Component ={LoginPage}/>
    <Route path='Register' Component={RegisterPage}/>
    <Route path='userprofile' Component={UserProfile}/>
<<<<<<< HEAD

=======
    <Route path='tentangkami' Component={TentangKami}/>
    <Route path='Informasi' Component={Informasi}/>
   
>>>>>>> 14b04bc0144be7acac16f4f3bf7da3a18829e8ea
   
   </Routes>


   </div>
   
  )
}

export default App
