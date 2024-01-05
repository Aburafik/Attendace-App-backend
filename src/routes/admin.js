// const express = require("express");

const { register, 
        login, 
        express,
        getAllAttendanceRecords, 
        getSingleRecord, 
        notifications, 
        createEmployee } = require('../controllers/adminController')

// const moment = require("moment");

const router = express.Router()

router.post("/register", register).post('/login', login).post("/create-employee", createEmployee);

router.post("/notifications", notifications)
router.get("/attendance/all-records", getAllAttendanceRecords)
router.get("/attendance/:employeeId/records", getSingleRecord)

module.exports = { router };