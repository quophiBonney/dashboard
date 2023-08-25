import React, {useState} from "react";
import {Layout} from "antd";
import AppHeader from "../components/AppHeader";
import SideMenu from "../components/SideMenu";
import PageContent from "../components/PageContent";
import "../App.css";

const Home = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div>
      <AppHeader toggleSidebar={toggleSidebar} />
      <Layout style={{minHeight: "100vh"}}>
        <SideMenu collapsed={collapsed} />
        <Layout className="site-layout">
          <PageContent />
        </Layout>
      </Layout>
    </div>
  );
};

export default Home;
