import React, {useState} from "react";
import {Layout} from "antd";
import AppHeader from "./components/AppHeader";
import SideMenu from "./components/SideMenu";
import PageContent from "./components/PageContent";
import "aos/dist/aos.css";
import AOS from "aos";
import "./App.css";
import AppFooter from "./components/AppFooter";

const App = () => {
  AOS.init();
  const [collapsed, setCollapsed] = useState(false);
  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div>
      <Layout>
        <SideMenu collapsed={collapsed} />
        <Layout className="site-layout">
          <AppHeader toggleSidebar={toggleSidebar} />
          <PageContent />
          <AppFooter />
        </Layout>
      </Layout>
    </div>
  );
};

export default App;
