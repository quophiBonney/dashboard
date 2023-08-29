import React from "react";
import {Layout, Avatar, Button, Menu, Dropdown, Badge, Tooltip} from "antd";
import {BiMenuAltRight} from "react-icons/bi";
import {BellFilled, UserOutlined} from "@ant-design/icons";
import {BsLock, BsPerson, BsPower} from "react-icons/bs";
import {useLocation} from "react-router-dom";
import {Link} from "react-router-dom";
const {Header} = Layout;
const AppHeader = ({toggleSidebar}) => {
  const location = useLocation();
  if (
    location.pathname === "/" ||
    location.pathname === "/auth/login" ||
    location.pathname === "/auth/signup"
  ) {
    return null;
  }
  const messages = (
    <Menu style={{width: "250px"}}>
      <div className="card border-0 text-center">
        <p className="mt-2 py-3">Received Messages</p>
      </div>
      <Menu.Item key={1}>
        Message One
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          incidunt dolorem ex, nihil rerum voluptatum? Minima, voluptatem.
          Assumenda, quisquam pariatur.
        </p>
      </Menu.Item>
      <Menu.Item key={2}>
        Message Two
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
          similique voluptatibus voluptas. Repellat, rerum maiores.
        </p>
      </Menu.Item>
    </Menu>
  );
  const menu = (
    <Menu style={{width: "250px"}}>
      <div className="card border-0 text-center" style={{background: "teal"}}>
        <p className="mt-2 text-light">Chris Soronto</p>
      </div>
      <Menu.Item>
        <div>
          <BsPerson className="m-2" />
          My Profile
        </div>
      </Menu.Item>
      <Menu.Item>
        <div>
          <BsLock className="m-2" />
          Change Password
        </div>
      </Menu.Item>
      <Menu.Item>
        <Link to="/login">
          <BsPower className="m-2" />
          Logout
        </Link>
      </Menu.Item>
    </Menu>
  );
  return (
    <Header className="container-fluid bg-light fixed-top">
      <div className="row justify-content-between align-items-center">
        <div className="row">
          <div className="col-2">
            <Button
              className="border-0 text-white"
              onClick={toggleSidebar}
              style={{background: "#fff"}}
            >
              <BiMenuAltRight size={25} style={{color: "teal"}} />
            </Button>
          </div>
          <div className="col-8 col-xs-12">
            <div className="d-flex justify-content-center">
              <div className="w-100 hide">
                <input
                  type="search"
                  placeholder="Search client, contractor or supervisor"
                  className="w-100"
                  style={{
                    outline: "none",
                    border: "1px solid lavender",
                    borderRadius: "5px",
                    height: "40px",
                    textAlign: "center",
                  }}
                />
              </div>
              <div className="w-50">
                <select
                  className="w-100"
                  style={{
                    outline: "none",
                    marginLeft: "5px",
                    height: "40px",
                    borderRadius: "5px",
                    border: "1px solid lavender",
                    textAlign: "center",
                  }}
                >
                  <option defaultValue={"Choose role"} disabled>
                    Choose Role
                  </option>
                  <option value="">Client</option>
                  <option value="">Contractor</option>
                  <option value="">Supervisor</option>
                </select>
              </div>
            </div>
          </div>
          <div className="col-2 text-end">
            <div className="ms-auto align-items-center">
              <Dropdown overlay={menu} trigger={["click"]}>
                <Tooltip title="Username">
                  <Button
                    className="rounded-pill"
                    style={{color: "teal"}}
                    icon={<UserOutlined />}
                  ></Button>
                </Tooltip>
              </Dropdown>
              <Dropdown
                overlay={messages}
                trigger={["click"]}
                className="m-2 hide"
              >
                <Tooltip title="Messages">
                  <Badge count={10}>
                    <Button
                      className="rounded-pill"
                      style={{color: "teal"}}
                      icon={<BellFilled />}
                    />
                  </Badge>
                </Tooltip>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </Header>
  );
};

export default AppHeader;
