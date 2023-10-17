// src/routes/employee.js
const express = require("express");
const router = express.Router();
const moment = require("moment");
// Import the Employee model
const Employee = require("../models/Employee");
const TaskReport = require("../models/TaskReport");
const AttendanceRecord = require("../models/AttendanceReports");
const OFFICE_LOCATION = {
  latitude: 12.9716, // Replace with your office's latitude
  longitude: 77.5946, // Replace with your office's longitude
};
// Employee login route
router.post("/login", async (req, res) => {
  const { email, staffId } = req.body;

  try {
    // Find the employee by email address
    const employee = await Employee.findOne({ email, isAdmin: false });

    if (!employee) {
      return res.status(401).json({
        message: "The employee with this email address does not exist",
      });
    }

    //Find the employee by staff id
    const employeeStaffId = await Employee.findOne({ staffId });

    if (!employeeStaffId) {
      return res.status(401).json({ message: "Invalid staff id" });
    }
    const user = {
      email: employee.email,
      name: employee.name,
      staffId: employee.staffId,
      role: employee.role,
      id: employee.id
    };
    return res
      .status(200)
      .json({ message: "Employee login successful", employee: user });
  } catch (err) {
    return res.status(500).send("Error during login");
  }
});

router.post("/attendance/clock-in", async (req, res) => {
  const { employeeId, latitude, longitude } = req.body;

  try {
    // Check if the employee is at the predefined office location
    const employeeID = await Employee.findOne({ _id: employeeId });
    const isAtOffice = checkIfEmployeeIsAtOffice(latitude, longitude);

    if (!isAtOffice) {
      console.error("You are currently not at the office premises, please get closer to the office"); // Log the error
      return res.status(403).json({message:"You are currently not at the office premises, please get closer to the office"});
    }
    const lastClockInRecord = await AttendanceRecord.findOne({
      employee: employeeId,
      clockInTime: {
        $gte: moment().startOf("day").toDate(),
        $lt: moment().endOf("day").toDate(),
      },
    });

    if (lastClockInRecord) {
      console.error("You have already clocked in today"); // Log the error
      return res.status(400).json({message:"You have already clocked in today"});
    }
    // Record attendance
    const newRecord = new AttendanceRecord({
      employee: employeeId,
      clockInTime: new Date(),
      email: employeeID.email,
    });

    await newRecord.save();
    console.log("Clock In successfully recorded"); // Log success
    res.status(201).json({message:"Clock In successfully recorded"}); // Log success
  } catch (err) {
    console.error("Error recording attendance", err); // Log the error
    res.status(500).json({message:"Error recording attendance"});
  }
});

// Employee clock out route
router.patch("/attendance/clock-out", async (req, res) => {
  const { employeeId, latitude, longitude } = req.body;

  try {
    // Check if the employee is at the predefined office location
    const isAtOffice = checkIfEmployeeIsAtOffice(latitude, longitude);

    if (!isAtOffice) {
      console.error("Employee is not at the office premises"); // Log the error
      return res.status(403).json({message:"You are currently not at the office premises, please get closer to the office"});
    }

    // Record clock out time
    const newRecord = await AttendanceRecord.findOne({
      employee: employeeId,
      clockOutTime: null,
    });

    if (!newRecord) {
      return res.status(400).json({message:"No corresponding clock in record found"});
    }
    // Check if the employee is clocking out before closing hours (e.g., after 5 PM)
    const currentTime = moment(); // Current time
    const closingTime = moment("17:00", "HH:mm"); // Closing time (5 PM)

    if (currentTime.isBefore(closingTime)) {
      console.error("Cannot clock out before closing hours"); // Log the error
      return res.status(403).json({message:"Cannot clock out before closing hours"});
    }
    newRecord.clockOutTime = new Date();
    await newRecord.save();
    console.log("Clock out recorded successfully"); // Log success
    res.status(200).json({message:"Clock out recorded successfully"});
  } catch (err) {
    console.error("Error recording clock out", err); // Log the error
    res.status(500).json({message:"Error recording clock out"});
  }
});

//////////

// Function to check if the employee is at the office premises
function checkIfEmployeeIsAtOffice(latitude, longitude) {
  const distance = getDistanceBetweenPoints(OFFICE_LOCATION, {
    latitude,
    longitude,
  });

  // Assuming a radius of 100 meters (adjust as needed)
  const maxDistance = 100;
  console.log(distance);
  return distance <= maxDistance;
}

// Function to calculate the distance between two geospatial points (in meters)
function getDistanceBetweenPoints(point1, point2) {
  console.log(point1);
  console.log(point2);
  const R = 6371000; // Radius of the Earth in meters
  const lat1 = point1.latitude;
  const lon1 = point1.longitude;
  const lat2 = point2.latitude;
  const lon2 = point2.longitude;
  console.log(lat1, lon1, lat2, lon2);

  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = R * c;
  return distance;
}

//GET EMPLOYEE ATTENDANCE REGORDS
router.get("/attendance/:employeeId", async (req, res) => {
  const { employeeId } = req.params;

  try {
    const records = await AttendanceRecord.find({ employee: employeeId }).sort({
      timestamp: "desc",
    });

    res.status(200).json(records);
  } catch (err) {
    console.error("Error retrieving attendance records", err);
    res.status(500).send("Error retrieving attendance records");
  }
});

// Create a task report
router.post("/create-task", async (req, res) => {
  const { title, description } = req.body;

  try {
    // Retrieve the logged-in employee (you should have authentication in place)
    const employeeId = req.user.id;

    // Create a new task report
    const newReport = new TaskReport({
      employee: employeeId,
      title,
      description,
    });

    await newReport.save();
    res.status(201).json(newReport);
  } catch (err) {
    console.error("Error creating task report", err);
    res.status(500).send("Error creating task report");
  }
});

// Edit a task report
router.patch("/edit/task/:reportId", async (req, res) => {
  const { title, description } = req.body;
  const { reportId } = req.params;

  try {
    // Retrieve the logged-in employee (you should have authentication in place)
    const employeeId = req.user.id;

    // Check if the task report exists and is associated with the logged-in employee
    const existingReport = await TaskReport.findOne({
      _id: reportId,
      employee: employeeId,
    });

    if (!existingReport) {
      return res.status(404).send("Task report not found");
    }

    // Check if the task report was created on the same day
    const today = moment().startOf("day");
    if (!moment(existingReport.timestamp).isSame(today, "day")) {
      return res
        .status(403)
        .send("Task report can only be edited on the same day it was created");
    }

    // Update the content of the task report
    existingReport.description = description;
    await existingReport.save();
    res.status(200).json(existingReport);
  } catch (err) {
    console.error("Error editing task report", err);
    res.status(500).send("Error editing task report");
  }
});

// Delete a task report
router.delete("/delete-task/:reportId", async (req, res) => {
  const { reportId } = req.params;

  try {
    // Retrieve the logged-in employee (you should have authentication in place)
    const employeeId = req.user.id;

    // Check if the task report exists and is associated with the logged-in employee
    const existingReport = await TaskReport.findOne({
      _id: reportId,
      employee: employeeId,
    });

    if (!existingReport) {
      return res.status(404).send("Task report not found");
    }

    // Check if the task report was created on the same day
    const today = moment().startOf("day");
    if (!moment(existingReport.timestamp).isSame(today, "day")) {
      return res
        .status(403)
        .send("Task report can only be deleted on the same day it was created");
    }

    // Delete the task report
    await existingReport.remove();
    res.status(204).send();
  } catch (err) {
    console.error("Error deleting task report", err);
    res.status(500).send("Error deleting task report");
  }
});

module.exports = router;
