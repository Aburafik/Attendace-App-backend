import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Active from "../../widget/status/Active";
import { PersonIcon } from "@primer/octicons-react";
import Attendancebar from "../../components/attendance/Attendancebar";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllAttendanceRecords } from "../../features/slice/AttendanceSlice";
import { MutatingDots } from "react-loader-spinner";

const Attendance = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const attendance = useSelector((state) => state.attendance.attendance);
  const { isLoading, isSuccess } = useSelector((state) => state.attendance);

  useEffect(() => {
    dispatch(fetchAllAttendanceRecords());
  }, [dispatch]);

  return (
    <div style={{ height: "100vh" }} className="flex relative flex-row mt-10">
      {isLoading ? (
        <div className="flex items-center justify-center h-full w-full">
          <MutatingDots
            visible={true}
            height="100"
            width="100"
            color="#4fa94d"
            secondaryColor="#4fa94d"
            radius="12.5"
            ariaLabel="mutating-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      ) : (
        <div className="attendance mt-5">
          <Attendancebar />
          {attendance &&
            attendance.map((el) => (
              <div
                key={el?._id}
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
                    <p className="text-lg font-serif">{`${
                      el?.name ? el?.name : el?.email
                    }`}</p>
                    <p className="text-zinc-400">{el?.email}</p>
                  </div>
                </div>
                <div style={{ maxWidth: "150px" }}>
                  <p>{el?.clockInTime}</p>
                </div>
                <p>{el?.clockOutTime ? el?.clockOutTime : "-------"}</p>
                <Active
                  isActive={`${el?.clockInTime ? "Present" : "Absent"}`}
                  color={`${el?.clockInTime ? "green" : "red"}`}
                />
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Attendance;
