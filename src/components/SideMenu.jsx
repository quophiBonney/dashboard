import React from "react";
import {Layout, Menu} from "antd";
import {Link} from "react-router-dom";
import {BsPerson, BsTable} from "react-icons/bs";
import {useLocation} from "react-router-dom";
import {BiBarChart, BiLineChart, BiPieChart, BiSolidHome} from "react-icons/bi";
const {Sider} = Layout;

const SideMenu = ({collapsed}) => {
  const location = useLocation();
  if (
    location.pathname === "/" ||
    location.pathname === "/auth/login" ||
    location.pathname === "/auth/signup"
  ) {
    return null;
  }
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      className="sidebar space-btn"
      style={{backgroundColor: "teal"}}
    >
      <Menu mode="inline">
        <Menu.Item key="/" style={{color: "white"}} icon={<BiSolidHome />}>
          <Link to="/" className="text-decoration-none">
            Dashboard
          </Link>
        </Menu.Item>

        <Menu.Item key="analytics" style={{color: "white"}} icon={<BsTable />}>
          <Link to="/analytics" className="text-decoration-none">
            Analytics
          </Link>
        </Menu.Item>
        <Menu.SubMenu
          key="charts"
          style={{color: "white"}}
          icon={<BiBarChart />}
          title="Charts"
        >
          <Menu.Item
            key="/bar-chart"
            style={{color: "white"}}
            icon={<BiBarChart />}
          >
            <Link to="/bar-chart" className="text-decoration-none">
              Bar Chart
            </Link>
          </Menu.Item>
          <Menu.Item
            key="/pie-chart"
            style={{color: "white"}}
            icon={<BiPieChart />}
          >
            <Link to="/pie-chart" className="text-decoration-none">
              Pie Chart
            </Link>
          </Menu.Item>
          <Menu.Item
            key="/line-chart"
            style={{color: "white"}}
            icon={<BiLineChart />}
          >
            <Link to="/line-chart" className="text-decoration-none">
              Line Chart
            </Link>
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu
          key="bidsContract"
          icon={<BsPerson />}
          title="Bids & Contract"
        >
          <Menu.Item key="allBids" style={{color: "white"}} icon={<BsTable />}>
            <Link to="/bids" className="text-decoration-none">
              All Bids
            </Link>
          </Menu.Item>
          <Menu.Item
            key="contractors"
            style={{color: "white"}}
            icon={<BsTable />}
          >
            <Link to="/contractors" className="text-decoration-none">
              Contractors
            </Link>
          </Menu.Item>
          <Menu.Item
            key="notification"
            style={{color: "white"}}
            icon={<BsPerson />}
          >
            <Link to="/notification" className="text-decoration-none">
              Notification
            </Link>
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.Item
          key="communication"
          style={{color: "white"}}
          icon={<BsTable />}
        >
          <Link to="/communication" className="text-decoration-none">
            Communication
          </Link>
        </Menu.Item>
        <Menu.SubMenu
          key="projectMgt"
          style={{color: "white"}}
          icon={<BsPerson />}
          title="Project Mgt"
        >
          <Menu.Item
            key="activeJobs"
            style={{color: "white"}}
            icon={<BsTable />}
          >
            <Link to="/active-jobs" className="text-decoration-none">
              Active Jobs
            </Link>
          </Menu.Item>
          <Menu.Item
            key="projects"
            style={{color: "white"}}
            icon={<BsPerson />}
          >
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
