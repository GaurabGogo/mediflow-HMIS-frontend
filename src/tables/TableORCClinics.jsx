import React from "react";

const TableORCClinics = () => {
  return (
    <table className="w-full">
      <thead>
        <tr>
          <th className="w-[40%]">ORC Clinics/FCHV</th>
          <th className="w-[20%]">Planned/Total No.</th>
          <th className="w-[20%]">Conducted/Reported Received</th>
          <th className="w-[20%]">No. of Clients Served</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Outreached Clinic</th>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th>Immunization Clinic</th>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th>Immunization Session</th>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th>Hygiene Promotion Session</th>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th>FCHV</th>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableORCClinics;
