import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Active from "../../widget/status/Active";
import { PersonIcon } from "@primer/octicons-react";
import Attendancebar from "../../components/attendance/Attendancebar";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllAttendanceRecords } from "../../features/slice/AttendanceSlice";

const Attendance = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const records = useSelector((state) => state.attendance.attendance);
  // console.log(records);

  useEffect(() => {
    dispatch(fetchAllAttendanceRecords());
  }, [dispatch]);

  return (
    <div style={{ height: "100vh" }} className="flex relative flex-row">
      <div className="mt-5">
        <Attendancebar />
        {/* {records &&
          records.map((el) => (
            <div
              // key={el?._id}
              onClick={() => navigate("attendance-records")}
              className="flex flex-row justify-between items-center ml-6 bg-slate-50 border border-zinc-200 mt-2 p-1"
            >
              <div
                // key={data?.employee}
                className="flex flex-row items-center justify-center space-x-2"
              >
                <div>
                  <PersonIcon size={33} />
                </div>
                <div>
                  <p className="text-lg font-serif">Meech</p>
                  <p className="text-zinc-400">{el?.email}</p>
                </div>
              </div>
              <p>{el?.ClockInTime}</p>
              <p>{el?.ClockOutTime}</p>
              <Active isActive="Absent" color="red" />
            </div>
          ))} */}
      </div>
    </div>
  );
};

export default Attendance;
