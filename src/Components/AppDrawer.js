import React from "react";
import { Drawer, Menu, Divider, Button } from "antd";
import "./AppDrawer.css";
import { useSelector, useDispatch } from "react-redux";
import { setDrawerOpened } from "../Actions/CommonActions.js";
import NumintecLogo from "../assets/Images/logo-navbar.svg";
import { ReactComponent as SystemLanguageIcon } from "../assets/Images/systemLanguageIcon.svg";
import UserIcon from "../assets/Images/user.png";
import { LogoutOutlined } from "@ant-design/icons";

function AppDrawer() {
  const dispatch = useDispatch();

  const { drawerOpened } = useSelector((state) => {
    return {
      drawerOpened: state.commonReducer.drawerOpened,
    };
  });
  console.log("###############");
  console.log(drawerOpened);
  console.log("#################");

  const closeDrawer = () => {
    dispatch(setDrawerOpened(false));
  };
  const userName = "Marcio";
  const systemLanguageText = "systemLanguage";
  const settingsText = "settings";
  const myAppsText = "myApps";
  const logoutText = "logout";

  const logout = () => {
    // handleLogoutRedirect();
  };
  const onButttonClick = (e) => {
    closeDrawer();
    if (e.key === "systemLanguage") {
      // dispatch(setShowLanguageModal(true));
    }
  };
  const drawerData = {
    settings: [
      {
        key: "systemLanguage",
        value: systemLanguageText,
        icon: <SystemLanguageIcon />,
      },
    ],
    myApps: [
      { key: "dashboard", value: "Dashboard" },
      { key: "contactCenter", value: "Contact Center" },
    ]
  };



  return (
    <div>
      {drawerOpened && (
        <Drawer
          className="settings_drawer"
          closable={false}
          placement="right"
          onClose={closeDrawer}
          visible={drawerOpened}
        >
          <div className="drawer_top" style={{ height: "220px" }}>
            <div className="drawer_top_bar">
              <span>
                <img
                  src={NumintecLogo}
                  className="settings_logo"
                  alt=""
                  style={{ width: "135px", paddingTop: "46px" }}
                />
              </span>
            </div>
            <div className="circle-border"></div>
            <div className="circle-image">
              <img
                src={UserIcon}
                className={
                  document.documentMode
                    ? "settings_user_icon ie_userIcon"
                    : "settings_user_icon"
                }
                alt=""
              />
            </div>
          </div>
          <div className="buttom" style={{ height: "calc( 100% - 220px)" }}>
            <diV className="settings_user_name">{userName}</diV>
            <Menu mode="inline">
              <Menu.ItemGroup
                key="userSettings"
                title={settingsText.toUpperCase()}
                class="itemGroup"
              >
                {drawerData.settings.map((data) => {
                  return (
                    <div className="settings_button">
                      <Button
                        type="text"
                        style={{
                          height: "30px",
                          background: "none",
                          color: "gray",
                        }}
                        onClick={() => onButttonClick(data)}
                      >
                        <span>
                          <span style={{ marginRight: "10px" }}>
                            {data.icon}
                          </span>
                          {data.value}
                        </span>
                      </Button>
                    </div>
                  );
                })}
              </Menu.ItemGroup>
              <Divider className="divider" />
              <Menu.ItemGroup key="My_Apps" title={myAppsText}>
                <Button
                  type="text"
                  href="/#"
                  target="_blank"
                  style={{ height: "30px", background: "none", color: "gray" }}
                >
                  Dashboard
                </Button>
              </Menu.ItemGroup>
              <Divider className="divider" />
              <Button
                type="text"
                onClick={logout}
                style={{ height: "30px", background: "none", color: "gray" }}
              >
                <span>
                  {<LogoutOutlined style={{ marginRight: "10px" }} />}
                  {logoutText}
                </span>
              </Button>
            </Menu>
          </div>
        </Drawer>
      )}
    </div>
  );
}

export default AppDrawer;
