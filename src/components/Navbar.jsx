import { Link } from "react-router"
import { useContext } from "react"
import { authContext } from "../context/AuthContext"
import '../styles/Navbar.css'

function Navbar() {
  const {user, logout} = useContext(authContext)

  return (
    <nav className="navbar">
      <div className="profile-section">
        {!user && (
          <div className="profile-image">
            <h3>Waslah Logo</h3>
          </div> 
        )}
        {user && (
        <>
        <div className="profile-image">
          <img src="/path-to-profile-image.jpg" alt="Profile" />
        </div>
        <div className="profile-info">        
              <h2>Welcome, {user.username}!</h2>                                
              <p>Internship Manager</p>
        </div>
          </>
        )}
      </div>



      <div className="nav-menu">

        {/* Student menu */}
        {user?.type === "student" && (
          <>
            <Link to="/internships" className="menu-item">
              <span className="icon">👥</span>
              Internships
            </Link>                        
          </>
        )}

        {/* Trainee menu */}
        {user?.type === "trainee" && (
          <>
            <Link to="/internships" className="menu-item">
              <span className="icon">👥</span>
              Internships
            </Link>
            <Link to="/tasks" className="menu-item">
              <span className="icon">⚙️</span>
              Tasks
            </Link>
            <Link to="/score" className="menu-item">
              <span className="icon">🏆</span>
              Score
            </Link>
            <Link to="/chat" className="menu-item">
              <span className="icon">💬</span>
              Chat
            </Link>
          </>
        )}

        {/* Supervisor menu */}
        {user?.type === "supervisor" && (
          <>
            <Link to="/internships" className="menu-item">
              <span className="icon">👥</span>
              Internships
            </Link>
            <Link to="/trainees" className="menu-item">
              <span className="icon">👤</span>
              Trainees
            </Link>
            <Link to="/reports" className="menu-item">
              <span className="icon">📄</span>
              Reports
            </Link>
            <Link to="/create-report" className="menu-item">
              <span className="icon">📝</span>
              Create Report
            </Link>
          </>
        )}

        {/* Default menu for all users */}
        <Link to="/about" className="menu-item active">
          <span className="icon">📊</span>
          What is Waslah?
        </Link>

        {/* Auth links */}
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
