import {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'

function Signup() {

    const [formData, setFormData] = useState({
        username:"",
        password:"",
        email:"",
        phone:"",
        age:"",
        experience:"",
        degree:"",
        type:"student",
        cv:"",
    })

    const navigate = useNavigate()
    

    function handleChange(e){
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    async function handleSubmit(e){
        e.preventDefault()
        try{
            await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/sign-up`,formData)
            navigate("/login")
        }
        catch(err){
            console.log(err)
        }
    }
  return (
    <div>
      <h1>Sign up</h1>
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
        <label htmlFor="email">email:</label>
        <input type="text" name='email' id='email' value={formData.email} onChange={handleChange}/>
        <label htmlFor="phone">phone:</label>
        <input type="text" name='phone' id='phone' value={formData.phone} onChange={handleChange} />
        <label htmlFor="age">age:</label>
        <input type="number" name='age' id='age' value={formData.age} onChange={handleChange} />
        <label htmlFor="experience">experience:</label>
        <input type="number" name='experience' id='experience' value={formData.experience} onChange={handleChange} />
        <label htmlFor="degree">degree:</label>
        <input type="text" name='degree' id='degree' value={formData.degree} onChange={handleChange} />
        <label htmlFor="type">type:</label>
        <select name='type' id='type' value={formData.type} onChange={handleChange}>
            <option value="student">student</option>
            <option value="supervisor">Supervisor</option>
          </select>
        <label htmlFor="cv">cv:</label>
        <input type="text" name='cv' id='cv' value={formData.cv} onChange={handleChange} />
          <button>Submit</button>
      </form>
    </div>
  )
}

export default Signup
