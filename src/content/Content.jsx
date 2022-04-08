import React from "react";
import { useSelector } from "react-redux";
import "./Content.css";
import Sidebar from "./Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Company from "./routingPage/Company";
import Dashboard from "./routingPage/Dashboard";
import Invoice from "./routingPage/Invoice";
import Po from "./routingPage/Po";
import Report from "./routingPage/Report";

function Content() {
  const terValue = useSelector((state) => state);

  return (
    <BrowserRouter>
      <div className="BgContent d-inline-flex">
        <Sidebar />
        <div className={terValue ? "content" : "contentActive"}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/report" element={<Report />} />
            <Route path="/invoice" element={<Invoice />} />
            <Route path="/po" element={<Po />} />
            <Route path="/company" element={<Company />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Content;
