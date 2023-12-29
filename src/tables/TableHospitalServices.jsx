import React, { useEffect, useState } from "react";

const TableHospitalServices = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      let res = await fetch("http://localhost:8000/api/listData");
      let result = await res.json();
      setData(result);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <table className="w-full">
      <thead>
        <tr>
          <th colSpan={5}>Hospital Services</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th colSpan={1} rowSpan={2} className="w-[20%]">
            Age Group
          </th>
          <th colSpan={2}>New Clients Served</th>
          <th colSpan={2}>Total Clients Served</th>
        </tr>
        <tr>
          <th className="w-[20%]">Female</th>
          <th className="w-[20%]">Male</th>
          <th className="w-[20%]">Female</th>
          <th className="w-[20%]">Male</th>
        </tr>
        {data.map((item, i) => {
          if (item.ageGroup == "0-9 Years")
            return (
              <tr key={i}>
                <th>0-9 Years</th>
                <td>{item.femaleNew}</td>
                <td>{item.maleNew}</td>
                <td>{item.femaleTotal}</td>
                <td>{item.maleTotal}</td>
              </tr>
            );
        })}
        {data.map((item, i) => {
          if (item.ageGroup == "10-14 Years")
            return (
              <tr key={i}>
                <th>10-14 Years</th>
                <td>{item.femaleNew ? item.femaleNew : "-"}</td>
                <td>{item.maleNew}</td>
                <td>{item.femaleTotal}</td>
                <td>{item.maleTotal}</td>
              </tr>
            );
        })}
        {data.map((item, i) => {
          if (item.ageGroup == "15-19 Years")
            return (
              <tr key={i}>
                <th>15-19 Years</th>
                <td>{item.femaleNew}</td>
                <td>{item.maleNew}</td>
                <td>{item.femaleTotal}</td>
                <td>{item.maleTotal}</td>
              </tr>
            );
        })}
        {data.map((item, i) => {
          if (item.ageGroup == "20-59 Years")
            return (
              <tr key={i}>
                <th>20-59 Years</th>
                <td>{item.femaleNew}</td>
                <td>{item.maleNew}</td>
                <td>{item.femaleTotal}</td>
                <td>{item.maleTotal}</td>
              </tr>
            );
        })}
        {data.map((item, i) => {
          if (item.ageGroup == "60-69 Years")
            return (
              <tr key={i}>
                <th>60-69 Years</th>
                <td>{item.femaleNew}</td>
                <td>{item.maleNew}</td>
                <td>{item.femaleTotal}</td>
                <td>{item.maleTotal}</td>
              </tr>
            );
        })}
        {data.map((item, i) => {
          if (item.ageGroup == ">=70 Years")
            return (
              <tr key={i}>
                <th>≥70 Years</th>
                <td>{item.femaleNew}</td>
                <td>{item.maleNew}</td>
                <td>{item.femaleTotal}</td>
                <td>{item.maleTotal}</td>
              </tr>
            );
        })}
      </tbody>
    </table>
  );
};

export default TableHospitalServices;
