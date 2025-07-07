// src/routes/RouteConfig.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Favorite from "../pages/Favorite";
import Note from "../pages/Note";
import Digest from "../pages/Digest";
import Delete from "../pages/Delete";
import About from "../pages/About";
import NotFound from "../pages/NotFound";

// 创建一个 Routers 组件来管理所有路由
const RouteConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* index prop means this route renders at the parent route's path */}
        <Route index element={<Home />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/note" element={<Note />} />
        <Route path="/digest" element={<Digest />} />
        <Route path="/delete" element={<Delete />} />
      </Route>
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} /> {/* 默认404路由 */}
    </Routes>
  );
};

export default RouteConfig;
