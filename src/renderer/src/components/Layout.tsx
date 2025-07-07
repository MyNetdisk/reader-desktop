import React from "react";
import Navbar from "./NavBar";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        width: "100vw",
        height: "100vh",
      }}
    >
      <SideBar /> {/* 侧边栏 */}
      <div style={{ flex: 1, height:'100%',display:'flex',flexDirection:'column',justifyContent:'flex-start' }}>
        <Navbar /> {/* 导航栏 */}
        <main style={{flex:1,background:'yellow'}}>
          <Outlet /> {/* 这里将渲染子路由组件 */}
        </main>
      </div>
    </div>
  );
}

export default Layout;
