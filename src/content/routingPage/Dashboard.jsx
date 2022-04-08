import React, { useState } from "react";
import "./Routing.css";
import Invoice from "./datas/invoice.svg";
import Payable from "./datas/payable.svg";
import Overdue from "./datas/overdue.svg";
import PaidAmount from "./datas/paidamount.svg";
import Rejected from "./datas/rejected.svg";
import Dispute from "./datas/dispute.svg";
import Department from "./datas/department.svg";
import Vender from "./datas/vender.svg";
import DonutChart from "react-donut-chart";
import Calender from "./Calender/Calender";

function Dashboard() {
  const today = new Date();
  const [date, setDate] = useState(today);
  console.log(date);
  var Datas = [
    {
      image: Invoice,
      header: "Invoice Received",
      totals: 2123,
      rupee: 12341233234,
    },
    {
      image: Payable,
      header: "Payable amount",
      totals: 2123,
      rupee: 12341233,
    },
    {
      image: Overdue,
      header: "Overdue",
      totals: 2123,
      rupee: 12341233,
    },
    {
      image: PaidAmount,
      header: "Paid amount",
      totals: 2123,
      rupee: 12341233,
    },
    {
      image: Rejected,
      header: "Rejected",
      totals: 2123,
      rupee: 12341233234,
    },
    {
      image: Dispute,
      header: "Dispute",
      totals: 2123,
      rupee: 12341233,
    },
    {
      image: Department,
      header: "Department",
      totals: 2123,
      rupee: 12341233,
    },
    {
      image: Vender,
      header: "Vender",
      totals: 2123,
      rupee: 12341233,
    },
  ];
  const sumData = [
    {
      date: "7 Days",
      rupee: 1234234,
    },
    {
      date: "15 Days",
      rupee: 287313123,
    },
    {
      date: "30 Days",
      rupee: "01301",
    },
    {
      date: "45 Days",
      rupee: 12234445,
    },
    {
      date: "60 Days",
      rupee: 1200,
    },
    {
      date: "90 Days",
      rupee: 1237234,
    },
    {
      date: "120 Days +",
      rupee: 122,
    },
  ];
  const Donut = [
    {
      label: "processing Queue",
      value: 40,
    },
    {
      label: "Expectation Queue",
      value: 54,
      // isEmpty: true,
    },
    {
      label: "Duplicate Queue",
      value: 30,
    },
    {
      label: "Missing PO Queue",
      value: 20,
    },
    {
      label: "Receipt Hold Queue",
      value: 28,
    },
    {
      label: "Supplier Portal Queue",
      value: 45,
    },
  ];
  const donutColor = [
    "#EE7777",
    "#4BAAB4",
    "#1F2439",
    "#F5B461",
    "#F9C480",
    "#00000",
  ];
  const Donut2 = [
    {
      label: "Role",
      value: 30,
    },
    {
      label: "Person Responsible",
      value: 54,
    },
    {
      label: "Triggers Alert",
      value: 26,
    },
  ];
  const donutColor2 = ["#4BAAB4", "#F4B462", "#1F2439"];
  return (
    <>
      <div className="dashboard">
        <div className="row header w-100 col-12">
          <div className=" col-lg-6 p-2 dashInner col-md-12 col-12">
            <p>Dashboard</p>
            <h3>Dashboard</h3>
            <div className="cards">
              <div className="cardbody">
                Over all outstanding{" "}
                <span
                  style={{
                    color: "#8E8E8E",
                    fontSize: "24px",
                    marginLeft: 25,
                    marginRight: 15,
                  }}
                >
                  ₹
                </span>
                <span
                  style={{
                    fontSize: "24px",
                    fontWeight: 500,
                  }}
                >
                  12341233
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-6  col-md-12 col-12">
            <div className="w-100 calenderDiv calender m-3">
              <Calender />
            </div>
          </div>
        </div>
        <br />
        <div></div>
        <div className="Divcards">
          <div className="Divbody row d-flex justify-content-center col-12">
            {Datas.map((values, index) => (
              <div
                key={index}
                className="d-flex col-lg-3 col-md-6 col-sm-12  justify-content-center"
              >
                <div className="Linecards">
                  <img
                    src={values.image}
                    className="ImgIcon"
                    alt={"img" + { index }}
                  />
                  <span className="cardHead">{values.header}</span>
                  <div className="cardIn">
                    <p>
                      <span className="Spanhead">Total</span>
                      <span className="SpanValue">{values.totals}</span>
                    </p>
                    <p>
                      <span className="Spanhead">₹</span>
                      <span className="SpanValue2">{values.rupee}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <div className="col-lg-6 col-md-12 pie d-flex justify-content-center col-sm-12">
              <h5 className="m-2 mt-3">Queues</h5>
              <DonutChart
                data={Donut}
                colors={donutColor}
                height={450}
                width={750}
              />
              ;
            </div>

            <div className="col-lg-6 pie col-md-12 d-flex justify-content-center col-sm-12">
              <h5 className="m-2 mt-3">KPI</h5>
              <DonutChart
                data={Donut2}
                colors={donutColor2}
                height={450}
                width={750}
              />
            </div>
          </div>
        </div>
        <div className="mt-2 pb-5 summarydiv">
          <div className="summary">
            <div className="m-3 summaryHead">
              <h5>Due by Age Summary</h5>
              <p>Payment due days wise</p>
              <div className="row ms-1 d-flex justify-content-center col-7 w-100">
                {sumData.map((data, index) => (
                  <div
                    className="col-lg-1 columnDiv m-2 col-md-3 col-sm-3"
                    key={index}
                  >
                    <div className="sumCard">
                      <p className="pt-1">{data.date}</p>
                      <h5>
                        ₹<span>{data.rupee}</span>
                      </h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
