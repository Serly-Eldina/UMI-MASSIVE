import {Routes, Route} from 'react-router-dom'


import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import UserProfile from './pages/UserProfile'
import TentangKami from './pages/TentangKami'
function App() {
  return(
   <div>
    

   <Routes>
    <Route path="/" Component ={HomePage}/>
    <Route path="Login" Component ={LoginPage}/>
    <Route path='Register' Component={RegisterPage}/>
    <Route path='userprofile' Component={UserProfile}/>
    <Route path='tentangkami' Component={TentangKami}/>
   
   </Routes>


   </div>
   
  )
}

export default App
