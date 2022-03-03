import React from "react";
import { Layout } from "antd";
import "./AppHeader.css";
import NumintecLogo from '../assets/Images/logo-navbar.svg'
import UserLogo from '../assets/Images/user.png'
function AppHeader() {

    return (
    <Layout.Header>
      <div className="Header">
        <div className="numintec_logo">
          <img src={NumintecLogo} alt="numintecLogo" />
        </div>
        <div className="user_info">
          <img src={UserLogo} alt="userLogo" />
          <span style={{ color: "white" }}> Marcio Dev </span>
        </div>
      </div>
    </Layout.Header>
  );
}

export default AppHeader;
