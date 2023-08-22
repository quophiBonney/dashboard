import React from "react";
import {Layout, Button, Avatar} from "antd";
import {BiMenuAltRight} from "react-icons/bi";
import {UserOutlined} from "@ant-design/icons";
import {Dropdown, DropdownButton} from "react-bootstrap";
const {Header} = Layout;
const AppHeader = ({toggleSidebar, toggleText}) => {
  return (
    <Header className="container-fluid bg-light mb-3">
      <div className="row align-items-center">
        <div className="col-6 col-sm-2">
          <Button
            style={{backgroundColor: "teal", color: "#fff"}}
            onClick={toggleSidebar}
          >
            <BiMenuAltRight size={25} />
          </Button>
        </div>
        <div className="col-4 hide">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="client, supervisor or contractor name"
            />
            <input type="submit" className="input-group-text" value="Search" />
          </div>
        </div>
        <div className="col-3 hide">
          <div className="w-50">
            <select
              className="filter border py-2 w-100 text-center"
              style={{outline: "none"}}
            >
              <option value="" selected disabled>
                Select Role
              </option>
              <option value="">Client</option>
              <option value="">Contractor</option>
              <option value="">Supervisor</option>
            </select>
          </div>
        </div>
        <div className="col-6 col-sm-2">
          <div className="">
            <Dropdown className="mt-3 position-relative">
              <Dropdown.Toggle
                className="bg-light border-0"
                id="dropdown-basic"
                style={{marginTop: "0px"}}
              >
                <Avatar
                  icon={<UserOutlined />}
                  size={30}
                  className="position-absolute top-0 end-0 mt-1 me-1 cursor-pointer"
                />
              </Dropdown.Toggle>
              <Dropdown.Menu className="position-absolute top-0 end-0">
                <Dropdown.Item href="/change-password">
                  Change Password
                </Dropdown.Item>
                <Dropdown.Item href="/logout">Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    </Header>
  );
};

export default AppHeader;
