import React, {useState} from "react";
import {Layout} from "antd";
import {BiMenuAltRight} from "react-icons/bi";
import AppHeader from "./components/AppHeader";
import SideMenu from "./components/SideMenu";
import PageContent from "./components/PageContent";
import "./App.css";
const {Content} = Layout;

const App = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  const onCloseDrawer = () => {
    setDrawerVisible(false);
  };
  return (
    <div>
      <Layout style={{minHeight: "100vh"}}>
        <SideMenu drawerVisible={drawerVisible} onCloseDrawer={onCloseDrawer} />
        <Content className="site-layout">
          <AppHeader toggleSidebar={toggleDrawer} />
          <PageContent />
        </Content>
      </Layout>
    </div>
  );
};

export default App;
