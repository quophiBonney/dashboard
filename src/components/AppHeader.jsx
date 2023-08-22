import React, {useState} from "react";
import {Layout, Avatar, Button, Drawer, Space, Typography, Badge} from "antd";
import {BiMenuAltRight} from "react-icons/bi";
import {UserOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import {BsBell} from "react-icons/bs";
const {Header} = Layout;
const AppHeader = ({toggleSidebar, toggleText}) => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("right");
  const showDrawer = () => {
    setOpen(true);
  };
  const onChange = e => {
    setPlacement(e.target.value);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <Header className="container-fluid bg-light">
      <div className="row justify-content-between align-items-center">
        <div className="col-2">
          <Button
            className="border-0 text-white"
            onClick={toggleSidebar}
            style={{background: "#fff"}}
          >
            <BiMenuAltRight size={25} style={{color: "teal"}} />
          </Button>
        </div>
        <div className="col-4">
          <input
            type="search"
            placeholder="Search client, contractor or supervisor"
            className="form-control"
          />
        </div>
        <div className="col-2 hide">
          <select
            className="form-select"
            id="floatingSelect"
            aria-label="Floating label select example"
          >
            <option selected disabled>
              Choose role
            </option>
            <option value="1">Client</option>
            <option value="2">Contractor</option>
            <option value="3">Supervisor</option>
          </select>
        </div>
        <div className="col-4 text-end">
          <Badge count={20} type="light" className="hide">
            <Button>
              <BsBell style={{color: "teal"}} />
            </Button>
          </Badge>
          <Space>
            <Button type="light" onClick={showDrawer}>
              <Avatar
                icon={<UserOutlined />}
                size={30}
                className="cursor-pointer"
              />
            </Button>
          </Space>
          <Drawer
            title="Settings"
            placement={placement}
            width={500}
            onClose={onClose}
            open={open}
            extra={
              <Space>
                <Button onClick={onClose}>Cancel</Button>
                <Button type="primary" onClick={onClose}>
                  OK
                </Button>
              </Space>
            }
          >
            <div className="">
              <div>
                <Button type="light">
                  <Avatar
                    icon={<UserOutlined />}
                    size={30}
                    className="cursor-pointer"
                  />
                </Button>
              </div>
              <div>
                <Typography.Text>
                  <Link to="/">Change Password</Link>
                </Typography.Text>
              </div>
              <div className="">
                <Typography.Text>
                  <Link to="/">Logout</Link>
                </Typography.Text>
              </div>
            </div>
          </Drawer>
        </div>
      </div>
    </Header>
  );
};

export default AppHeader;
