import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import dashSvg from "./svgIcon/dashboard-i.svg";
import report from "./svgIcon/report-i.svg";
import invoice from "./svgIcon/invoice-i.svg";
import po from "./svgIcon/po-i.svg";
import company from "./svgIcon/company-i.svg";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const terValue = useSelector((state) => state);
  const [value, setValue] = useState(false);
  const [value1, setValue1] = useState(false);
  const [value2, setValue2] = useState(false);
  const [value3, setValue3] = useState(false);
  const [value4, setValue4] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    getUrl();
  }, [count]);
  const getUrl = () => {
    var Url = window.location.pathname;
    console.log(Url);
    switch (Url) {
      case "/":
        return (
          setValue(true),
          setValue1(false),
          setValue2(false),
          setValue3(false),
          setValue4(false)
        );
      case "/report":
        return (
          setValue(false),
          setValue1(true),
          setValue2(false),
          setValue3(false),
          setValue4(false)
        );
      case "/invoice":
        return (
          setValue(false),
          setValue1(false),
          setValue2(true),
          setValue3(false),
          setValue4(false)
        );
      case "/po":
        return (
          setValue(false),
          setValue1(false),
          setValue2(false),
          setValue3(true),
          setValue4(false)
        );
      case "/company":
        return (
          setValue(false),
          setValue1(false),
          setValue2(false),
          setValue3(false),
          setValue4(true)
        );
    }
  };

  return (
    <div className={terValue ? "sidebarActive" : "sidebar"}>
      <div className="sidebarinner">
        <ul className="ulSidebar">
          <NavLink
            onClick={() => setCount(count + 1)}
            className="routeLinks"
            to="/"
          >
            <li className={value ? "listactive" : ""}>
              <img src={dashSvg} alt="dashboard" />
              <p>Dashboard</p>
            </li>
          </NavLink>

          <NavLink
            onClick={() => {
              setCount(count + 1);
            }}
            className="routeLinks"
            to="/report"
          >
            <li className={value1 ? "listactive" : ""}>
              <img src={report} alt="report" />
              <p>Report</p>
            </li>
          </NavLink>
          <NavLink
            onClick={() => setCount(count + 1)}
            className="routeLinks"
            to="/invoice"
          >
            <li className={value2 ? "listactive" : ""}>
              <img src={invoice} alt="invoice" />
              <p>Add invoice</p>
            </li>
          </NavLink>
          <NavLink
            onClick={() => setCount(count + 1)}
            className="routeLinks"
            to="/po"
          >
            <li className={value3 ? "listactive" : ""}>
              <img src={po} alt="po" />
              <p>Without PO</p>
            </li>
          </NavLink>
          <NavLink
            onClick={() => setCount(count + 1)}
            className="routeLinks"
            to="/company"
          >
            <li className={value4 ? "listactive" : ""}>
              <img src={company} alt="company" />
              <p>Company</p>
            </li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
