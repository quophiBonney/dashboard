import React, {useState} from "react";
import {Layout} from "antd";
import AppHeader from "./components/AppHeader";
import SideMenu from "./components/SideMenu";
import PageContent from "./components/PageContent";
import "./App.css";

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div>
      <Layout style={{minHeight: "100vh"}}>
        <SideMenu collapsed={collapsed} />
        <Layout className="site-layout">
          <AppHeader toggleSidebar={toggleSidebar} />
          <PageContent />
        </Layout>
      </Layout>
    </div>
  );
};

export default App;
