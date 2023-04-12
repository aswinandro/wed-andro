import React, { useState } from 'react'
import {Link, useNavigate} from "react-router-dom";
import axios from "axios"
import {Button, Divider, Form, Input, Typography, message} from 'antd'
import { GoogleOutlined, FacebookFilled, TwitterOutlined } from '@ant-design/icons'
import '../styles/login.css'


const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  })

const [messageApi, contextHolder] = message.useMessage();

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
    message.error('Error ! '+ err.response.data);
  }
}
  return (
    <div className='appBg'>
      
      <Form className='loginForm' onFinish={handleSubmit}>
      <Typography.Title  className='titleHead'>Register</Typography.Title>
        <Form.Item
          rules={[{
            required: true,
            type: "text",
            message: " Please Enter User Name"
          }]}
        >
          <Input required name='username' placeholder='User Name' onChange={handleChange} />
        </Form.Item>
        <Form.Item
          rules={[{
            required: true,
            type: "email",
            message: " Please Enter Valid E-Mail"
          }]}
        >
          <Input  required name='email' placeholder='E-Mail' onChange={handleChange} />
        </Form.Item>
        <Form.Item
          rules={[{
            required: true,
            type: "password",
            message: " Please Enter Password"
          }]}
        >
          <Input required type="password" name='password' placeholder='Password' onChange={handleChange}/>
        </Form.Item>
        <Button type='primary'  onClick={handleSubmit} block> Register</Button>
        {err && 
        <p className='para'>{err}</p>}
        <Divider style={{borderColor: "black"}}> or Login With</Divider>
        <div className='socialLogin'>
          <GoogleOutlined className='socialIcon'/>
          <FacebookFilled className='socialIcon'/>
          <TwitterOutlined className='socialIcon'/>
        </div>
        <Divider style={{borderColor: "black"}}> <span>Do you have an Account ? <Link to="/login"> Login</Link></span></Divider>
      </Form>
    </div>
  )
}

export default Register