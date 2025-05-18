import { Link } from "react-router"
import { useContext } from "react"
import { authContext } from "../context/AuthContext"
import '../styles/Navbar.css'

function Navbar() {
  const {user, logout} = useContext(authContext)

  return (
    <nav className="navbar">
      <div className="profile-section">
        <div className="profile-image">
          <img src="/path-to-profile-image.jpg" alt="Profile" />
        </div>
        <div className="profile-info">
          {user ? (
            <h2>Welcome, {user.username}!</h2>
          ) : (
            <h2>Welcome!</h2>
          )}
          <p>Internship Manager</p>
        </div>
      </div>

      <div className="nav-menu">
        <Link to="/" className="menu-item active">
          <span className="icon">📊</span>
          Dashboard
        </Link>
        <Link to="/internships" className="menu-item">
          <span className="icon">👥</span>
          Interns
        </Link>
        <Link to="/reports" className="menu-item">
          <span className="icon">📄</span>
          Reports
        </Link>
        <Link to="/chat" className="menu-item">
          <span className="icon">💬</span>
          Messages
        </Link>
        <Link to="#" className="menu-item">
          <span className="icon">⚙️</span>
          Settings
        </Link>
        
        {!user && (
          <>
            <Link to="/login" className="menu-item">
              <span className="icon">🔑</span>
              Login
            </Link>
            <Link to="/signup" className="menu-item">
              <span className="icon">📝</span>
              Signup
            </Link>
          </>
        )}
        
        {user && (
          <button onClick={logout} className="logout-button">
            <span className="icon">🚪</span>
            Logout
          </button>
        )}
      </div>
    </nav>
  )
}

export default Navbar
