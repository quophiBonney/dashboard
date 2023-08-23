import React from "react";
import {Menu, Drawer, Button} from "antd";
import {Link} from "react-router-dom";
import {BsActivity, BsPerson, BsDash, BsTable} from "react-icons/bs";
import {BiSolidHome, BiSolidTime} from "react-icons/bi";

const SideMenu = ({drawerVisible, onCloseDrawer}) => {
  return (
    <>
      <Drawer
        style={{background: "teal"}}
        title="Menu"
        placement="left"
        closable={false}
        onClose={onCloseDrawer}
        visible={drawerVisible}
        key="drawer"
      >
        <Menu mode="inline">
          <Menu.Item icon={<BiSolidHome />}>
            <Link
              to="/"
              key=""
              onClick={onCloseDrawer}
              className="text-decoration-none"
            >
              Dashboard
            </Link>
          </Menu.Item>
          <Menu.SubMenu icon={<BsActivity />} title="Charts">
            <Menu.Item>
              <Link
                to="/bar-chart"
                onClick={onCloseDrawer}
                className="text-decoration-none"
              >
                Bar Chart
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link
                to="/line-chart"
                onClick={onCloseDrawer}
                className="text-decoration-none"
              >
                Line Chart
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link
                to="/pie-chart"
                onClick={onCloseDrawer}
                className="text-decoration-none"
              >
                Pie Chart
              </Link>
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.Item icon={<BsTable />}>
            <Link
              to="/analytics"
              onClick={onCloseDrawer}
              className="text-decoration-none"
            >
              Analytics
            </Link>
          </Menu.Item>
          <Menu.SubMenu icon={<BsPerson />} title="Bids & Contract">
            <Menu.Item key="/bids" icon={<BsTable />}>
              <Link
                to="/bids"
                onClick={onCloseDrawer}
                className="text-decoration-none"
              >
                All Bids
              </Link>
            </Menu.Item>
            <Menu.Item icon={<BsTable />}>
              <Link
                to="/contractors"
                onClick={onCloseDrawer}
                className="text-decoration-none"
              >
                Contractors
              </Link>
            </Menu.Item>
            <Menu.Item icon={<BsPerson />}>
              <Link
                to="/notification"
                onClick={onCloseDrawer}
                className="text-decoration-none"
              >
                Notification
              </Link>
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.Item
            key="/communication"
            onClick={onCloseDrawer}
            icon={<BsTable />}
          >
            <Link to="/communication" className="text-decoration-none">
              Communcation
            </Link>
          </Menu.Item>
          <Menu.SubMenu
            key="projectManagement"
            icon={<BsPerson />}
            title="Project Mgt"
          >
            <Menu.Item key="/active-jobs" icon={<BsTable />}>
              <Link
                to="/active-jobs"
                onClick={onCloseDrawer}
                className="text-decoration-none"
              >
                Active Jobs
              </Link>
            </Menu.Item>
            <Menu.Item key="/contractors" icon={<BsPerson />}>
              <Link
                to="/contractors"
                onClick={onCloseDrawer}
                className="text-decoration-none"
              >
                Projects
              </Link>
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu
            key="projectManagement"
            icon={<BsPerson />}
            title="Project Mgt"
          >
            <Menu.Item key="/active-jobs" icon={<BsTable />}>
              <Link
                to="/active-jobs"
                onClick={onCloseDrawer}
                className="text-decoration-none"
              >
                Active Jobs
              </Link>
            </Menu.Item>
            <Menu.Item key="/contractors" icon={<BsPerson />}>
              <Link
                to="/contractors"
                onClick={onCloseDrawer}
                className="text-decoration-none"
              >
                Projects
              </Link>
            </Menu.Item>
          </Menu.SubMenu>
        </Menu>
        <div className="container mt-5">
          <Button className="w-100" onClick={onCloseDrawer}>
            Close
          </Button>
        </div>
      </Drawer>
    </>
  );
};

export default SideMenu;
