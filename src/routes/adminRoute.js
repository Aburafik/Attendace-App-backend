const express = require("express");
const router = express.Router()
const { isAdmin, authMiddleware } = require('../middleware/authMiddileware')

const { register, 
        login, 
        getAllAttendanceRecords, 
        getSingleRecord, 
        notifications, 
        createEmployee, 
        manageleaveRequest} = require('../controllers/adminController')

// const moment = require("moment");


router.post("/register", register).post('/login', login).post("/create-employee", createEmployee);
router.post("/notifications", notifications)
router.get("/attendance/all-records", authMiddleware, isAdmin, getAllAttendanceRecords)
router.get("/attendance/employeeId", authMiddleware, isAdmin, getSingleRecord)
router.get("/manage-leave-Request", authMiddleware, isAdmin, manageleaveRequest)

module.exports = { router };