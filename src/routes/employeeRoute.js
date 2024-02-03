// src/routes/employee.js
const express = require("express");
const router = express.Router();
const {
  loginEmployee,
  clockin,
  clockOut,
  getSingleEmployeeAttendancRecords,
  createTask,
  getEmployeeTaskHistory,
  editTask,
  deleteATask,
  leaveRequest,
  editLeaveRequest,
  deleteALeaveRequest,
  getTodayCreatedTask,
  getEmployeeLeaveHistory,
  createNewReport
} = require("../controllers/empolyeeController");
const { create } = require("../models/Employee");

// Import the Employee model

// Employee login route
router.post("/login", loginEmployee);

router.post("/attendance/clock-in", clockin);

// Employee clock out route
router.patch("/attendance/clock-out", clockOut);

//////////

//GET EMPLOYEE ATTENDANCE REGORDS
router.get("/attendance/:employeeId", getSingleEmployeeAttendancRecords);

// Create a task report
router.post("/create-task", createTask);
//Get employee Task Task History
router.get("/task/:employeeId", getEmployeeTaskHistory);

//Get todays created task
router.get("/task/today/:employeeId", getTodayCreatedTask);

// Edit a task report
router.patch("/task/edit/:reportId", editTask);

// Delete a task report
router.delete("/delete-task/:reportId", deleteATask);

///Requst leave
router.post("/leave-request", leaveRequest);

///GET Leave Request History
router.get("/leave-history/:employeeId", getEmployeeLeaveHistory);

// Edit a leave request
router.patch("/leave-request/update/:requestId", editLeaveRequest);
// Delete a leave request
router.delete("/leave-request/delete/:requestId", deleteALeaveRequest);

router.post("/new-report", createNewReport);


module.exports = router;
