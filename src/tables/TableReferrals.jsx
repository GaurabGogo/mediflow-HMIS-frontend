import React from "react";

const TableReferrals = () => {
  return (
    <table className="w-full">
      <thead>
        <tr>
          <th rowSpan={2} className="w-[30%]">
            Referrals
          </th>
          <th rowSpan={2} className="w-[25%]">
            Referral In
          </th>
          <th colSpan={3} className="w-[45%]">
            Referred Out
          </th>
        </tr>
        <tr>
          <th className="w-[15%]">Outpatient</th>
          <th className="w-[15%]">In-patient</th>
          <th className="w-[15%]">Emergency</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Female</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th>Male</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableReferrals;
