import './App.css'
import {Routes ,Route} from 'react-router'
import Login from './pages/Login'
import Homepage from './pages/Homepage'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'
import ValidateIsLoggedIn from './validators/ValidateIsLoggedIn'
import ValidateIsLoggedOut from './validators/ValidateIsLoggedOut'
import styled from 'styled-components'

const AppContainer = styled.div`
  display: flex;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
`;

const MainContent = styled.main`
  flex: 1;
  margin-left: 250px;
  padding: 0;
  width: calc(100vw - 250px);
  overflow-x: hidden;
`;

function App() {
  return (
    <AppContainer>
      <Navbar />
      <MainContent>
        <Routes>
          {/* Removed Auth Temporarily, will be returned when i finish development. */}
          {/* <Route path="/" element={<ValidateIsLoggedIn><Homepage/></ValidateIsLoggedIn>}/>
          <Route path="/signup" element={<ValidateIsLoggedOut><Signup/></ValidateIsLoggedOut>}/>
          <Route path="/login" element={<ValidateIsLoggedOut><Login/></ValidateIsLoggedOut>}/> */}

          <Route path="/" element={<Homepage/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </MainContent>
    </AppContainer>
  );
}

export default App
