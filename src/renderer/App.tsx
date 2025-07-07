import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RouteConfig from "./src/routes";

const App: React.FC = () => {
  return (
    <Router>
      <RouteConfig /> {/* 路由配置 */}
    </Router>
  );
};

export default App;
