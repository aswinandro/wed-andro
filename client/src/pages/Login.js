import React, { useContext, useState, useEffect } from 'react'
import {Link, useNavigate} from "react-router-dom"
import { AuthContext } from '../context/authContext'
import {Button, Divider, Form, Input, Typography, message} from 'antd'
import { GoogleOutlined, FacebookFilled, TwitterOutlined } from '@ant-design/icons'
import '../styles/login.css'

const Login = () => {

  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  })

  const [err, setError] = useState(null)

  const navigate = useNavigate()

  const {currentUser} = useContext(AuthContext);

  console.log(currentUser)

  const {login} = useContext(AuthContext)


  const handleChange = e =>{
    setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
  }

  const handleSubmit = async (e) =>{
      e.preventDefault()
      try{
        await login(inputs)
        navigate("/")
      } catch(err){
        setError(err.response.data)
        console.log(err)
        message.error('Error ! '+ err.response.data);
      }
    }

    
    
  return (
    <div >
      <div className='appImage'></div>
      <div className='appBg'>
        <Form className='loginForm' onFinish={handleSubmit}>
        <Typography.Title>Welcome ! Login</Typography.Title>
          <Form.Item>
            <Input required type="text" name='username' placeholder='Username' onChange={handleChange} />
          </Form.Item>
          <Form.Item>
            <Input required type="password" name='password' placeholder='Password' onChange={handleChange}/>
          </Form.Item>
          <Button type='primary'  onClick={handleSubmit} block> Login</Button>
          {err && <p className='para'>{err}</p>}
          <Divider style={{borderColor: "black"}}> or Login With</Divider>
          <div className='socialLogin'>
            <GoogleOutlined className='socialIcon'/>
            <FacebookFilled className='socialIcon'/>
            <TwitterOutlined className='socialIcon'/>
          </div>
          <Divider style={{borderColor: "black"}}> <span>Don't you have an Account ? <Link to="/register"> Register</Link></span></Divider>
        </Form>
      </div>
  </div>
  )
}

export default Login