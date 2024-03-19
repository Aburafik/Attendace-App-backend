// src/routes/Intern.js
const express = require("express");
const router = express.Router();
const {
  loginIntern,
  createAccount,
updateProfile,
  createProject,
  getInternProjectsHistory,
  editProject,
  deleteProject,
  leaveRequest,
  editLeaveRequest,
  deleteALeaveRequest,
  getTodayCreatedTask,
  createNewReport, 
  getInternReports,
  upload
} = require("../controllers/internController");
// const { create } = require("../models/Intern");

// Import the Intern model

// Intern login route
router.post("/login", loginIntern);
router.post("/signUp", createAccount);
router.put("/:internId/updateProfile",upload.single('profileUrl'), updateProfile);

// router.post("/attendance/clock-in", clockin);

// Intern clock out route
// router.patch("/attendance/clock-out", clockOut);

//////////

//GET Intern ATTENDANCE REGORDS
// router.get("/attendance/:InternId", getSingleInternAttendancRecords);

// Create new project
router.post("/project/new", createProject);
//Get Intern Task Task History
router.get("/projects/all/:internId", getInternProjectsHistory);


// Edit a project
router.patch("/project/update/:projectId", editProject);

// Delete a project
router.delete("/project/delete/:projectId", deleteProject);

///Requst leave
router.post("/leave-request", leaveRequest);

///GET Leave Request History
// router.get("/leave-history/:InternId", getInternLeaveHistory);

// Edit a leave request
router.patch("/leave-request/update/:requestId", editLeaveRequest);
// Delete a leave request
router.delete("/leave-request/delete/:requestId", deleteALeaveRequest);

router.post("/report/new", createNewReport);
router.get("/reports/:internId", getInternReports);


module.exports = router;
