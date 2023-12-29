import Table1 from "../tables/Table1";
import Table2 from "../tables/Table2";
import TableHospitalServices from "../tables/TableHospitalServices";
import TableEmergencyServices from "../tables/TableEmergencyServices";
import TableFreeServicesReceived from "../tables/TableFreeServicesReceived";
import TableORCClinics from "../tables/TableORCClinics";
import TableReferrals from "../tables/TableReferrals";
const Page1 = () => {
  return (
    <div className="max-w-6xl bg-slate-300 mx-auto border-2 border-solid border-black">
      <div className="relative bg-slate-400 h-auto">
        <div className="h-20 absolute top-[50%] transform translate-y-[-50%] left-4">
          <img
            src="https://th.bing.com/th?id=OIP.tW_Lc-CgdHACrnOBdGmtswHaG7&w=258&h=241&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
            className="h-full w-full"
          />
        </div>
        <div className="text-center mx-auto text-sm">
          <p>Government of Nepal</p>
          <p>Ministry of Health and Population</p>
          <p className="font-bold">Department of Health Services</p>{" "}
          <p className="font-bold">Health Management Information System</p>
          <p
            className="
            font-bold"
          >
            Public Hospital Monthly Reporting Form
          </p>
          <p className="font-bold">
            ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ...,
            Hospital
          </p>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-3">
          <Table1 />
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2">
              <TableHospitalServices />
            </div>
            <div className="col-span-1">
              <TableEmergencyServices />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-1 flex flex-1">
              <TableFreeServicesReceived />
            </div>
            <div className="col-span-2">
              <div className="flex flex-col">
                <TableORCClinics />
                <TableReferrals />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <Table2 />
        </div>
      </div>
    </div>
  );
};

export default Page1;
