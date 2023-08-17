import React from "react";
import {Layout, Menu} from "antd";
import {Link} from "react-router-dom";
import {BsActivity, BsPerson, BsDash, BsTable} from "react-icons/bs";
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
        <Menu.Item icon={<BiSolidHome />}>
          <Link to="/" key="" className="text-decoration-none">
            Dashboard
          </Link>
        </Menu.Item>
        <Menu.SubMenu icon={<BsActivity />} title="Charts">
          <Menu.Item>
            <Link to="/bar-chart" className="text-decoration-none">
              Bar Chart
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/line-chart" className="text-decoration-none">
              Line Chart
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/pie-chart" className="text-decoration-none">
              Pie Chart
            </Link>
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.Item icon={<BsTable />}>
          <Link to="/analytics" className="text-decoration-none">
            Analytics
          </Link>
        </Menu.Item>
        <Menu.SubMenu key="bids" icon={<BsPerson />} title="Bids & Contract">
          <Menu.Item key="/bids" icon={<BsTable />}>
            <Link to="/bids" className="text-decoration-none">
              All Bids
            </Link>
          </Menu.Item>
          <Menu.Item key="/contract-management" icon={<BsTable />}>
            <Link to="/contract-management" className="text-decoration-none">
              Contract Management
            </Link>
          </Menu.Item>
          <Menu.Item key="/notification" icon={<BsPerson />}>
            <Link to="/notification" className="text-decoration-none">
              Notification
            </Link>
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.Item key="/communication" icon={<BsTable />}>
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
            <Link to="/active-jobs" className="text-decoration-none">
              Active Jobs
            </Link>
          </Menu.Item>
          <Menu.Item key="/contractors" icon={<BsPerson />}>
            <Link to="/contractors" className="text-decoration-none">
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
            <Link to="/active-jobs" className="text-decoration-none">
              Active Jobs
            </Link>
          </Menu.Item>
          <Menu.Item key="/contractors" icon={<BsPerson />}>
            <Link to="/contractors" className="text-decoration-none">
              Projects
            </Link>
          </Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </Sider>
  );
};

export default SideMenu;
