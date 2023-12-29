import React from "react";
import { useState, useEffect } from "react";

const AddData = () => {
  const ageGroup = [
    "0-9 Years",
    "10-14 Years",
    "15-19 Years",
    "20-59 Years",
    "60-69 Years",
    ">=70 Years",
  ];
  const [data, setData] = useState({
    ageGroup: "",
    femaleNew: "",
    maleNew: "",
    femaleTotal: "",
    maleTotal: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  async function addData(e) {
    e.preventDefault();
    let item = { ...data };
    console.log(item);
    let result = await fetch("http://localhost:8000/api/addData", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    result = await result.json();
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl mb-4 font-bold">Add Data Page</h1>
      <form className="flex flex-col gap-4">
        <select
          onChange={handleChange}
          className="border-2 p-2 bg-transparent flex-1 border-black  focus:border-gray-700 focus:outline-none"
          name="ageGroup"
          value={data.ageGroup}
        >
          <option value="">--Select an option--</option>
          {ageGroup.map((item, i) => (
            <option key={i}>{item}</option>
          ))}
        </select>
        <input
          type="number"
          className="border-b-2 bg-transparent flex-1 border-black  focus:border-gray-700 focus:outline-none"
          placeholder="Female New"
          name="femaleNew"
          value={data.femaleNew}
          onChange={handleChange}
        />
        <input
          type="number"
          className="border-b-2 bg-transparent flex-1 border-black  focus:border-gray-700 focus:outline-none"
          placeholder="Male New"
          name="maleNew"
          value={data.maleNew}
          onChange={handleChange}
        />
        <input
          type="number"
          className="border-b-2 bg-transparent flex-1 border-black  focus:border-gray-700 focus:outline-none2"
          placeholder="Female Total"
          name="femaleTotal"
          value={data.femaleTotal}
          onChange={handleChange}
        />
        <input
          type="number"
          className="border-b-2 bg-transparent flex-1 border-black  focus:border-gray-700 focus:outline-none"
          placeholder="Male Total"
          name="maleTotal"
          value={data.maleTotal}
          onChange={handleChange}
        />
        <button
          className="border bg-black mt-4 p-2 leading-normal text-lg text-white justify-center items-center"
          onClick={addData}
        >
          Add Data
        </button>
      </form>
    </div>
  );
};

export default AddData;
