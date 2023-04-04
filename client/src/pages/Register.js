import React, { useState } from 'react'
import {Link, useNavigate} from "react-router-dom";
import axios from "axios"


const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  })

const [err, setError] = useState(null)

const navigate = useNavigate()

const handleChange = e =>{
  setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
}
console.log(inputs)

const handleSubmit = async e =>{
  e.preventDefault()
  try{
    const res = await axios.post("/auth/register",inputs)
    navigate("/login")
    console.log(res)
  }catch(err){
    setError(err.response.data)
    console.log(err)
  }
}
  return (
    <div className='auth'>
      <h1>Register</h1>
      <form>
        <input required type="text" name='username' placeholder='UserName' onChange={handleChange}/>
        <input required type="text" name='email' placeholder='Email' onChange={handleChange}/>
        <input required type="password" name='password' placeholder='Password' onChange={handleChange}/>
        <button onClick={handleSubmit}>Register</button>
        {err && <p>{err}</p>}
        <span>Do you have an Account ? <Link to="/login"> Login</Link></span>
      </form>
    </div>
  )
}

export default Register