import React from "react";
import {Layout, Menu} from "antd";
import {Link} from "react-router-dom";
import {BsActivity, BsPerson, BsTable} from "react-icons/bs";
import {BiSolidHome} from "react-icons/bi";
const {Sider} = Layout;

const SideMenu = ({collapsed}) => {
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      className="sidebar"
      style={{backgroundColor: "teal"}}
    >
      <Menu mode="inline">
        <Menu.Item key="dashboard" icon={<BiSolidHome />}>
          <Link to="/" className="text-decoration-none">
            Dashboard
          </Link>
        </Menu.Item>

        <Menu.Item key="analytics" icon={<BsTable />}>
          <Link to="/analytics" className="text-decoration-none">
            Analytics
          </Link>
        </Menu.Item>
        <Menu.SubMenu
          key="bidsContract"
          icon={<BsPerson />}
          title="Bids & Contract"
        >
          <Menu.Item key="allBids" icon={<BsTable />}>
            <Link to="/bids" className="text-decoration-none">
              All Bids
            </Link>
          </Menu.Item>
          <Menu.Item key="contractors" icon={<BsTable />}>
            <Link to="/contractors" className="text-decoration-none">
              Contractors
            </Link>
          </Menu.Item>
          <Menu.Item key="notification" icon={<BsPerson />}>
            <Link to="/notification" className="text-decoration-none">
              Notification
            </Link>
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.Item key="communication" icon={<BsTable />}>
          <Link to="/communication" className="text-decoration-none">
            Communication
          </Link>
        </Menu.Item>
        <Menu.SubMenu key="projectMgt" icon={<BsPerson />} title="Project Mgt">
          <Menu.Item key="activeJobs" icon={<BsTable />}>
            <Link to="/active-jobs" className="text-decoration-none">
              Active Jobs
            </Link>
          </Menu.Item>
          <Menu.Item key="projects" icon={<BsPerson />}>
            <Link to="/projects" className="text-decoration-none">
              Projects
            </Link>
          </Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </Sider>
  );
};

export default SideMenu;
