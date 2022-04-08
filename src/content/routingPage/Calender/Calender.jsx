import React from "react";
import "../Routing.css";

function Calender() {
  return (
    <>
      <table className="table me-5 table-borderless">
        <thead>
          <tr>
            <th colSpan="7">July 2022</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>S</th>
            <th className="orange">M</th>
            <th>T</th>
            <th>W</th>
            <th>T</th>
            <th>F</th>
            <th>S</th>
          </tr>
          <tr>
            <td>10</td>
            <td className="black">11</td>
            <td>12</td>
            <td>13</td>
            <td>14</td>
            <td>15</td>
            <td>16</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Calender;
