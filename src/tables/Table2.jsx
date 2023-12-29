import page1 from "../constants";
const Table2 = () => {
  return (
    <div className="w-full">
      <table className="w-full">
        <tbody>
          <tr>
            <th colSpan="2" className="w-[45%]">
              Dispatched Date
            </th>
            <td className="w-[15%]"></td>
            <td className="w-[5%]"></td>
            <td className="w-[15%]"></td>
            <td className="w-[5%]"></td>
            <td className="w-[15%]"></td>
          </tr>
          <tr>
            <th colSpan="2" className="w-[45%]">
              Recieved Date
            </th>
            <td className="w-[15%]"></td>
            <td className="w-[5%]"></td>
            <td className="w-[15%]"></td>
            <td className="w-[5%]"></td>
            <td className="w-[15%]"></td>
          </tr>
          <tr>
            <th className="w-[30%]">Sanctioned Bed</th>
            <th colSpan={2}>Operation In-Patient Bed</th>
            <th colSpan={4}>Emergency Bed</th>
          </tr>
          <tr>
            <td>Placeholder</td>
            <td colSpan={2}></td>
            <td colSpan={4}></td>
          </tr>
          <tr>
            <th colSpan={3}>Total Patients Admitted</th>
            <td colSpan={4}></td>
          </tr>
          <tr>
            <th colSpan={3}>Total Inpatient Days</th>
            <td colSpan={4}></td>
          </tr>
        </tbody>
      </table>
      <table className="w-full">
        <thead>
          <tr className="">
            {page1.page1.table2.headers.map((item, i) => {
              let width = "";
              if (i == 0) width = "60%";
              if (i == 1) width = "20%";
              if (i == 2) width = "20%";
              return (
                <th
                  className={`w-[${width}] first:text-left text-center`}
                  key={i}
                >
                  {item}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {page1.page1.table2.data.map((items, i) => (
            <tr key={i}>
              {items.map((item, index) => (
                <th key={index} className="first:text-left text-center">
                  {item}
                </th>
              ))}
              <td>gogo</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table2;
