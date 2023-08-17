import React from "react";
import {Layout, Menu} from "antd";
import {Link} from "react-router-dom";
import {BsActivity, BsDash, BsTable} from "react-icons/bs";
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
        <Menu.SubMenu icon={<BsActivity />} title="Analytics">
          <Menu.Item>
            <Link to="/analytics" className="text-decoration-none">
              Analytics
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/performance" className="text-decoration-none">
              Performance
            </Link>
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.Item icon={<BsTable />}>
          <Link to="/table" className="text-decoration-none">
            Table
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SideMenu;
