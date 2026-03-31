import { useState, useContext } from 'react'
import { useNavigate } from 'react-router'
import { authContext } from '../context/AuthContext'


function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  })

  const { validateToken } = useContext(authContext)
  const navigate = useNavigate()

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      const data = await response.json()
      console.log(data)
      localStorage.setItem("token", data.token)
      validateToken()
      // navigate("/login")
    }
    catch (err) {
      console.log(err)
    }
  }


  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name='username'
          id='username'
          value={formData.username}
          onChange={handleChange}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name='password'
          id='password'
          value={formData.password}
          onChange={handleChange}
        />

        <button>Submit</button>
      </form>
    </div>
  )
}

export default Login
