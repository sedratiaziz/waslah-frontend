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
        degree: "",
        type:"student",
        cv:""
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
        required
         type="text"
         name='username'
         id='username'
         value={formData.username}
         onChange={handleChange}
          />

        <label htmlFor="password">Password:</label>
        <input
          required
         type="password"
         name='password'
         id='password'
         value={formData.password}
         onChange={handleChange}
          />
        
        <label htmlFor="email">E-mail:</label>
        <input
          required
         type="email"
         name='email'
         id='email'
         value={formData.email}
         onChange={handleChange}
          />

      <label htmlFor="phone">Phone:</label>
      <input
        required
        type="tel"
        name="phone"
        id="phone"
        value={formData.phone}
        onChange={handleChange}
      />

      <label htmlFor="age">Age:</label>
      <input
        required
        type="number"
        name="age"
        id="age"
        value={formData.age}
        onChange={handleChange}
      />

      <label htmlFor="experience">Experience:</label>
      <input
        required
        type="text"
        name="experience"
        id="experience"
        value={formData.experience}
        onChange={handleChange}
      />

      <label htmlFor="degree">Degree:</label>
      <input
        required
        type="text"
        name="degree"
        id="degree"
        value={formData.degree}
        onChange={handleChange}
      />
      <label htmlFor="type">Type:</label>
      <select
        required
        name="type"
        id="type"
        value={formData.type}
        onChange={handleChange}
      >
        <option value="student">Student</option>
        <option value="supervisor">Supervisor</option>
        </select>
      <label htmlFor="cv">CV:</label>
      <input
        required
        type="file"
        name="cv"
        id="cv"
        accept=".pdf,.doc,.docx"
        onChange={(e) => {
          setFormData({ ...formData, cv: e.target.files[0] });
        }}
      />
      <button>Submit</button>
    </form>
  </div>
  )
}

export default Signup
