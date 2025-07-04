import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./src/components/NavBar";
import SideBar from "./src/components/SideBar";
import RouteConfig from "./src/routes";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <SideBar /> {/* 侧边栏 */}
        <Navbar /> {/* 导航栏 */}
        <RouteConfig /> {/* 路由配置 */}
      </div>
    </Router>
  );
};

export default App;
