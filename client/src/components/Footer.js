import React from 'react'
import Logo from "../assets/logo.png"
import { Layout } from 'antd';
import '../styles/home.css'

const { Footer } = Layout;

const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea',
};


export const FooterAnt = () => {
  return (
      <div className='footer'>
        <Footer style={footerStyle}>
            ©2023 TechAndro. Made with Love and <b>React.js</b> All rights reserved.
        </Footer>
      </div>
    // <footer>  
    //   <img src={Logo} alt=""/>
    //   <span>
    //     Made with Love and <b>React.js</b>
    //   </span>
    // </footer>
  )
}

export default FooterAnt;