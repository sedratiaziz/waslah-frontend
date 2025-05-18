import './App.css'
import {Routes ,Route} from 'react-router'
import Login from './pages/Login'
import Homepage from './pages/Homepage'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'
import ValidateIsLoggedIn from './validators/ValidateIsLoggedIn'
import ValidateIsLoggedOut from './validators/ValidateIsLoggedOut'
import Internships from './pages/Internships'
import Reports from './pages/Reports'
import CreateReport from './pages/CreateReport'
import DM from './pages/DM'

function App() {


  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/internships" element={<Internships/>}/>
        <Route path="/reports" element={<Reports/>}/>
        <Route path="/create-report" element={<CreateReport/>}/>
        <Route path="/chat" element={<DM/>}/>
{/* 
        <Route path="/" element={<ValidateIsLoggedIn><Homepage/></ValidateIsLoggedIn>}/>
        <Route path="/signup" element={<ValidateIsLoggedOut><Signup/></ValidateIsLoggedOut>}/>
        <Route path="/login" element={<ValidateIsLoggedOut><Login/></ValidateIsLoggedOut>}/> */}
      </Routes>
    </>
  )
}

export default App
