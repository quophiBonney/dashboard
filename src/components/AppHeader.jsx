import React from "react";
import { Layout, Avatar, Button, Menu, Dropdown, Badge, Tooltip } from "antd";
import { BiMenuAltRight } from "react-icons/bi";
import { BellFilled, UserOutlined } from "@ant-design/icons";
import { BsLock, BsPerson, BsPower } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
const { Header } = Layout;
const AppHeader = ({ toggleSidebar }) => {
  const location = useLocation();
  if (
    location.pathname === "/" ||
    location.pathname === "/auth/login" ||
    location.pathname === "/auth/signup" ||
    location.pathname === "/password-recovery"
  ) {
    return null;
  }
  const messages = (
    <Menu style={{ width: "250px" }}>
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
    <Menu style={{ width: "250px" }}>
      <div className="card border-0 text-center" style={{ background: "teal" }}>
        <p className="mt-2 text-light">Chris Soronto</p>
      </div>
      <Menu.Item>
        <Link to="/profile" className="text-decoration-none text-dark">
          <BsPerson className="m-2" />
          My Profile
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/change-password" className="text-decoration-none text-dark">
          <BsLock className="m-2" />
          Change Password
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/auth/login" className="text-decoration-none text-dark">
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
              style={{ background: "#fff" }}
            >
              <BiMenuAltRight size={25} style={{ color: "teal" }} />
            </Button>
          </div>
          <div className="col-8 col-xs-12">
            <p className="title text-center fw-bold" style={{ color: "teal" }}>
              BB Dashboard
            </p>
            <div className="d-flex  mt-3">
              <div className="hide w-100">
                <form>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      style={{ borderRadius: "5px" }}
                      placeholder="Search"
                    />
                    <div className="input-group-append">
                      <input
                        type="submit"
                        className="form-control text-light"
                        style={{ background: "teal", marginLeft: "5px" }}
                        value="Search"
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className="hide w-50" style={{ marginLeft: "40px" }}>
                <select className="form-control">
                  <option value="" selected>
                    --- Filter Role ---
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
                <Button
                  className="rounded-pill"
                  style={{ color: "teal" }}
                  icon={<UserOutlined />}
                ></Button>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </Header>
  );
};

export default AppHeader;
