import React, { useContext } from 'react'
import Logo from "../img/logo.png"
import {Link} from "react-router-dom";
import { AuthContext } from '../context/authContext';
import { Menu } from 'antd';
import { HomeOutlined, UserOutlined, SettingOutlined, EditOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

export const Navbar = () => {

    const {currentUser, logout} = useContext(AuthContext);

  return (
        <Menu mode="horizontal">
        <Menu.Item key="home" icon={<HomeOutlined />}>
        Home
        </Menu.Item>
        <SubMenu key="submenu" icon={<UserOutlined />} title="Profile">
        <Menu.Item key="profile">My Profile</Menu.Item>
        <Menu.Item key="settings">Settings</Menu.Item>
        </SubMenu>
        <Menu.Item key="write" icon={<EditOutlined />}> <Link to="/write" ></Link> Write</Menu.Item>
        <Menu.Item key="logout" icon={<UserOutlined />}>
            {currentUser?.username}
        </Menu.Item>
        {currentUser ?
            (<Menu.Item key="logout" icon={<SettingOutlined />} onClick={logout}>
                Logout
                </Menu.Item>) :
            
            (<Menu.Item key="logout" icon={<SettingOutlined />} >
                <Link to="/login" ></Link>
                Login
                </Menu.Item>)
        }
        
        </Menu>
    // <div className='navbar'>
    //     <div className='container'>
    //         <div className='logo'>
    //             <Link to="/">
    //             <img src={Logo} alt="Img Not Found"/>
    //             </Link>
    //         </div>
            
    //         <span>{currentUser?.username}</span>
    //         {currentUser ? (<button onClick={logout}>Logout</button>) : 
    //         (<Link className='link' to="/login">
    //             Login
    //           </Link>
    //           )}
    //         <div className='write'>
    //             <Link to="/write" >Write</Link>
    //         </div>
    //     </div>
    // </div>
  )
}


export default Navbar