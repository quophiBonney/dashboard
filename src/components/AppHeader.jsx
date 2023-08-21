import React from "react";
import {Layout, Typography, Button, Badge, Avatar} from "antd";
import {UserOutlined} from "@ant-design/icons";
import {BiMenuAltRight} from "react-icons/bi";
import {BsBell, BsPerson} from "react-icons/bs";
const {Header} = Layout;
const AppHeader = ({toggleSidebar}) => {
  return (
    <Header className="container-fluid bg-light">
      <div className="row">
        <div className="col-10">
          <Button style={{backgoundColor: "teal"}} onClick={toggleSidebar}>
            <BiMenuAltRight size={25} />
          </Button>
        </div>
        <div className="col-2" id="header-icons">
          <Badge count={20} dot className="m-2">
            <BsBell size={25} />
          </Badge>
          <Avatar icon={<UserOutlined />} size={30} />
        </div>
      </div>
    </Header>
  );
};

export default AppHeader;
