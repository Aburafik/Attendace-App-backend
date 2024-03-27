const express = require("express");
const router = express.Router();
const { isAdmin, authMiddleware } = require("../middleware/authMiddileware");

const {
  register,
  login,
  getAllAttendanceRecords,
  getAllEmployees,
  getSingleRecord,
  updateEmployeeLeaveRequest,
  notifications,
  getAllLeaveRequest,
  createEmployee,
} = require("../controllers/adminController");

// const moment = require("moment");

router
  .post("/register", register)
  .post("/login", login)
  .post("/create-employee", createEmployee);
router.post("/notifications", notifications);
router.get("/employees", getAllEmployees);
router.get(
  "/attendance/all-records",
  // authMiddleware,
  // isAdmin,
  getAllAttendanceRecords
);
router.get("/attendance/employeeId", authMiddleware, isAdmin, getSingleRecord);
router.get("/leave-requests", authMiddleware, isAdmin, getAllLeaveRequest);
router.patch(
  "/update-leave/:leaveId",
  authMiddleware,
  isAdmin,
  updateEmployeeLeaveRequest
);

module.exports = { router };
