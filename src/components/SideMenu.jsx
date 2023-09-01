import React from "react";
import {Layout, Menu} from "antd";
import {Link} from "react-router-dom";
import {BsFillProjectorFill, BsPerson, BsSearch, BsTable} from "react-icons/bs";
import {GrUserWorker} from "react-icons/gr";
import {useLocation} from "react-router-dom";
import {
  BiBuilding,
  BiConversation,
  BiPyramid,
  BiSolidDashboard,
  BiSolidHome,
} from "react-icons/bi";
const {Sider} = Layout;

const SideMenu = ({collapsed}) => {
  const location = useLocation();
  if (
    location.pathname === "/" ||
    location.pathname === "/auth/login" ||
    location.pathname === "/auth/signup" ||
    location.pathname === "/password-recovery"
  ) {
    return null;
  }
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      className=""
      style={{backgroundColor: "teal", minHeight: "100vh"}}
    >
      <Menu mode="inline">
        <Menu.Item key="/" style={{color: "white"}} icon={<BiSolidHome />}>
          <Link to="/dashboard" className="text-decoration-none">
            Dashboard
          </Link>
        </Menu.Item>
        <Menu.Item
          key="clients"
          style={{color: "white"}}
          icon={<BiSolidDashboard />}
        >
          <Link to="/clients" className="text-decoration-none">
            Clients
          </Link>
        </Menu.Item>
        <Menu.Item
          key="contract"
          style={{color: "white"}}
          icon={<BiSolidDashboard />}
        >
          <Link to="/contract" className="text-decoration-none">
            Contract
          </Link>
        </Menu.Item>
        <Menu.Item
          key="contractors"
          style={{color: "white"}}
          icon={<BiConversation />}
        >
          <Link to="/jobs" className="text-decoration-none">
            Jobs
          </Link>
        </Menu.Item>
        <Menu.Item
          key="contractors"
          style={{color: "white"}}
          icon={<BsFillProjectorFill />}
        >
          <Link to="/contractors" className="text-decoration-none">
            Contractors
          </Link>
        </Menu.Item>
        <Menu.Item key="payment" style={{color: "white"}} icon={<BiPyramid />}>
          <Link to="/payment" className="text-decoration-none">
            Payment
          </Link>
        </Menu.Item>
        <Menu.Item key="bids" style={{color: "white"}} icon={<BiBuilding />}>
          <Link to="/bids" className="text-decoration-none">
            Bids
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
