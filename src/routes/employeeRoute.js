// src/routes/employee.js
const express = require("express");
const router = express.Router();
const { loginEmployee, clockin, clockOut, getSingleEmployeeAttendancRecords, createTask, getEmployeeTaskHistory, editTaskReport, deleteATaskReport, leaveRequest, editLeaveRequest, deleteALeaveRequest } = require('../controllers/empolyeeController')

// Import the Employee model

// Employee login route
router.post("/login", loginEmployee )

router.post("/attendance/clock-in", clockin)

// Employee clock out route
router.patch("/attendance/clock-out", clockOut)

//////////

//GET EMPLOYEE ATTENDANCE REGORDS
router.get("/attendance/:employeeId", getSingleEmployeeAttendancRecords)

// Create a task report
router.post("/create-task", createTask)
//Get employee Task Task History
router.get("/task/:employeeId",  getEmployeeTaskHistory)

// Edit a task report
router.patch("/task/edit/:reportId", editTaskReport)

// Delete a task report
router.delete("/delete-task/:reportId", deleteATaskReport)

///Requst leave
router.post("/leave-requests", leaveRequest)

// Edit a leave request
router.patch("/leave-requests/:requestId", editLeaveRequest)
// Delete a leave request
router.delete("/leave-requests/:requestId", deleteALeaveRequest)

module.exports = router;
