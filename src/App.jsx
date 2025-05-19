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
import Tasks from './pages/Tasks'
import Score from './pages/Score'
import About from './pages/About'

function App() {


  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/internships" element={<ValidateIsLoggedIn><Internships /></ValidateIsLoggedIn>}/>
        <Route path="/reports" element={<ValidateIsLoggedIn><Reports/></ValidateIsLoggedIn>}/>
        <Route path="/create-report" element={<ValidateIsLoggedIn><CreateReport/></ValidateIsLoggedIn>}/>
        <Route path="/chat" element={<ValidateIsLoggedIn><DM/></ValidateIsLoggedIn>}/>
        <Route path="/tasks" element={<ValidateIsLoggedIn><Tasks/></ValidateIsLoggedIn>}/>
        <Route path="/score" element={<ValidateIsLoggedIn><Score/></ValidateIsLoggedIn>}/>
        <Route path="/about" element={<About/>}/>

        <Route path="/" element={<ValidateIsLoggedIn><Homepage/></ValidateIsLoggedIn>}/>
        <Route path="/signup" element={<ValidateIsLoggedOut><Signup/></ValidateIsLoggedOut>}/>
        <Route path="/login" element={<ValidateIsLoggedOut><Login/></ValidateIsLoggedOut>}/>
      </Routes>
    </>
  )
}

export default App
