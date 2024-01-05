const express = require("express");
const router = express.Router()

const { register, 
        login, 
        getAllAttendanceRecords, 
        getSingleRecord, 
        notifications, 
        createEmployee } = require('../controllers/adminController')

// const moment = require("moment");


router.post("/register", register).post('/login', login).post("/create-employee", createEmployee);
router.post("/notifications", notifications)
router.get("/attendance/all-records", getAllAttendanceRecords)
router.get("/attendance/:employeeId/records", getSingleRecord)

module.exports = { router };