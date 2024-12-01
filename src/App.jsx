

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './Views/Common/Login'
import Register from './Views/Common/Register'
import { ToastContainer } from 'react-toastify'
import AccountActivation from './Views/Common/AccountActivation'
import ForgetPassword from './Views/Common/ForgetPassword'
import ChangePassword from './Views/Common/ChangePassword'
import Homepage from './Views/Main/Homepage/Homepage'
import AdminHomepage from './Views/AdminDashboard/AdminHomepage'
import About from './Views/Main/About/About'
import Contact from './Views/Main/Contact/Contact'
import HomeMain from "./Views/Main/Homepage/HomeMain"
import Tour from './Views/Main/Tourpage/Tour'
import Gallery from './Views/Main/Gallery/Gallery'


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/signup' element={<Register />}/>
      <Route path='/account-activation' element={<AccountActivation />}/>
      <Route path='/forget-password' element={<ForgetPassword />}/>
      <Route path='/change-password' element={<ChangePassword />}/>

      <Route  element={<Homepage />}>
      <Route path='home' element={<HomeMain />}/>
      <Route path='about' element={<About />}/>
      <Route path='contact' element={<Contact />}/>
      <Route path='tour' element={<Tour />}/>
      <Route path='gallery' element={<Gallery />}/>
      </Route>


      <Route path='/admindashboard/home' element={<AdminHomepage />}/>
    </Routes>
    </BrowserRouter>
    <ToastContainer />
    </>
    
  )
}

export default App
