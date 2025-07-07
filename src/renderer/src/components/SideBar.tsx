import React from "react";
import { FaHome, FaHeart, FaTags, FaLightbulb, FaStickyNote } from "react-icons/fa";
import { RiDeleteBin6Fill, RiMenuUnfoldFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

function SideBar() {
  const navigate = useNavigate();
  return (
    <aside style={{padding: "14px 12px"}}>
      <RiMenuUnfoldFill style={{marginBottom: "24px"}} fontSize={'36'} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <FaHome style={{margin: "12px 0"}} fontSize={'32'} onClick={()=>{
          navigate('/'); // 跳转到 /about 路由
        }} />
        <FaHeart style={{margin: "12px 0"}} fontSize={'32'} onClick={()=>{
          navigate('/favorite')
        }} />
        <FaStickyNote style={{margin: "12px 0"}} fontSize={'32'} onClick={()=>{
          navigate('/note')
        }} />
        <FaLightbulb style={{margin: "12px 0"}} fontSize={'32'} onClick={()=>{
          navigate('/digest')
        }} />
        <RiDeleteBin6Fill style={{margin: "12px 0"}} fontSize={'32'} onClick={()=>{
          navigate('/delete')
        }} />
      </div>
    </aside>
  );
}

export default SideBar;
