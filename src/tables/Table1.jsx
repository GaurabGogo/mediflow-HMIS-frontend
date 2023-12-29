import React from "react";
import "./table.css";

const Table1 = () => {
  return (
    <table className="w-full">
      <tbody className="text-center">
        <tr>
          <th className="text-left w-[20%]">Fiscal Year:</th>
          <td className="text-left w-[15%]">20........./20.........</td>
          <td className="w-[5%]">To:</td>
          <td className="w-[15%]"></td>
          <th className="w-[15%]">HF Code:</th>
          <td colSpan="2" className="w-[30%]"></td>
        </tr>
        <tr>
          <th className="text-left w-[20%]">Reference No:</th>
          <td className=" w-[15%]"></td>
          <td colSpan="4" className="w-[50%]">
            Subject: Submission of Monthly Report on Hospital Services
          </td>
          <td className="text-left w-[15%]">M ......./Y 20.......</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table1;
