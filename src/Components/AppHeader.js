import React from "react";
import { Layout } from "antd";
import "./AppHeader.css";
import NumintecLogo from '../assets/Images/logo-navbar.svg'
import UserLogo from '../assets/Images/user.png'
import { useSelector, useDispatch} from "react-redux";
import { setDrawerOpened } from '../Actions/CommonActions.js'
function AppHeader() {

  const dispatch = useDispatch();
  const { drawerOpened } = useSelector((state) => {
    return {
      drawerOpened: state.commonReducer.drawerOpened
    };
  });
  
  const openDrawer = () => {
    dispatch(setDrawerOpened(true));
  };

  console.log("*****************");
  console.log(drawerOpened);
  console.log(setDrawerOpened);
  console.log("*****************");


    return (
    <Layout.Header>
      <div className="Header">
        <div className="numintec_logo">
          <img src={NumintecLogo} alt="numintecLogo" />
        </div>
        <div className="user_info" onClick={openDrawer}>
          <img src={UserLogo} alt="userLogo" />
          <span style={{ color: "white" }}> Marcio Dev </span>
        </div>
      </div>
    </Layout.Header>
  );
}

export default AppHeader;
