const express = require("express");
const router = express.Router()
const { isAdmin, authMiddleware } = require('../middleware/authMiddileware')

const { register, 
        login, 
        getAllAttendanceRecords, 
        getSingleRecord, 
        updateInternLeaveRequest,
        notifications, 
        getAllLeaveRequest,
        } = require('../controllers/adminController')



router.post("/signUp", register).post('/login', login);
router.post("/notifications", notifications)
router.get("/attendance/all-records", authMiddleware, isAdmin, getAllAttendanceRecords)
router.get("/attendance/InternId", authMiddleware, isAdmin, getSingleRecord)
router.get("/leave-requests", authMiddleware, isAdmin, getAllLeaveRequest)
router.patch("/update-leave/:leaveId", authMiddleware, isAdmin, updateInternLeaveRequest)

module.exports = { router };