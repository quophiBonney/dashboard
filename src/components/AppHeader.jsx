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
    <Header className="container-fluid bg-light">
      <div className="row justify-content-between">
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
            <p className="title">BB Dashboard</p>
            <div className="d-flex justify-content-between mt-3">
              <div className="col-6 hide">
                <form>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      style={{borderRadius: "5px"}}
                      placeholder="e.g. country, region, state"
                    />
                    <div className="input-group-append">
                      <input
                        type="submit"
                        className="form-control text-light"
                        style={{background: "teal"}}
                        value="Search"
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-2 hide">
                <select className="form-control">
                  <option value="" selected>
                    ---Choose Role---
                  </option>
                  <option value="">Supervisor</option>
                  <option value="">Client</option>
                  <option value="">Contractor</option>
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
