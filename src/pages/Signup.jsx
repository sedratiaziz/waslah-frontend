import { useState } from 'react'
import { useNavigate } from 'react-router'

function Signup() {

  const [formData, setFormData] = useState({
    username: "",
    password: ""
  })

  const navigate = useNavigate()


  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/auth/sign-up`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      if (!response.ok) throw new Error('Signup failed')
      navigate("/login")
    }
    catch (err) {
      console.log(err)
    }
  }
  return (
    <div>

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

export default Signup
