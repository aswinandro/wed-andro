import React, { useContext } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { Menu } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  SettingOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
const { SubMenu } = Menu;

export const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <Menu mode="horizontal">
      <Menu.Item key="home" icon={<HomeOutlined />}>
        <Link to="/"></Link>
        Home
      </Menu.Item>
      <SubMenu key="submenu" icon={<UserOutlined />} title="Profile">
        <Menu.Item key="profile">My Profile</Menu.Item>
        <Menu.Item key="settings">Settings</Menu.Item>
      </SubMenu>
      <Menu.Item key="write" icon={<EditOutlined />}>
        {" "}
        <Link to="/write"></Link> Write
      </Menu.Item>
      <Menu.Item key="username" icon={<UserOutlined />}>
        {currentUser?.username}
      </Menu.Item>
      {currentUser ? (
        <Menu.Item key="logout" icon={<SettingOutlined />} onClick={logout}>
          <Link to="/login"></Link>
          Logout
        </Menu.Item>
      ) : (
        <Menu.Item key="login" icon={<SettingOutlined />}>
          <Link to="/login"></Link>
          Login
        </Menu.Item>
      )}
    </Menu>
  );
};

export default Navbar;
