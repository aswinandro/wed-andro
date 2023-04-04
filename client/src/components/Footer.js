import React from 'react'
import Logo from "../img/logo.png"
import { Layout } from 'antd';

const { Footer } = Layout;

export const FooterAnt = () => {
  return (
      <Footer style={{ textAlign: 'center' }}>
          ©2023 TechAndro. Made with Love and <b>React.js</b> All rights reserved.
      </Footer>
    // <footer>  
    //   <img src={Logo} alt=""/>
    //   <span>
    //     Made with Love and <b>React.js</b>
    //   </span>
    // </footer>
  )
}

export default FooterAnt;