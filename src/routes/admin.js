const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Employee = require("../models/Employee");
const express = require("express");
// const moment = require("moment");
const Notification = require('../models/notifications');
// const { isAdmin } = require('../middleware'); // Create a middleware to check admin status

// Import the Employee and AttendanceRecord models
// const Employee = require('../models/Employee');
const AttendanceRecord = require("../models/AttendanceReports");

//Auth Token
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  jwt.verify(token, "secret-key", (err, decodedToken) => {
    if (err) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    req.userId = decodedToken.userId;
    next();
  });
};
const router = express.Router();
// Admin registration route
router.post("/register", async (req, res) => {
  const { email, staffId, name, password, role } = req.body;

  // Check if the email is already taken
  const existingAdmin = await Employee.findOne({ email, isAdmin: true });
  // Check if employee is Id is already taken
  const existingEmployeeId = await Employee.findOne({ staffId, isAdmin: true });

  if (existingAdmin) {
    return res
      .status(400)
      .json({ message: "Admin with this email already exists." });
  }
  if (existingEmployeeId) {
    return res
      .status(400)
      .json({ message: "Employee with this staff Id already exists." });
  }

  // Hash the password before storing it in the database
  const hashedPassword = await bcrypt.hash(password, 10);

  const newAdmin = new Employee({
    email,
    staffId,
    name,
    dateJoined: new Date(),
    role,
    password: hashedPassword,
    isAdmin: true,
  });

  try {
    await newAdmin.save();
    const token = jwt.sign({ userId: newAdmin._id }, "secret-key", {
      expiresIn: "356d",
    });
    const newUser = {
      _id: newAdmin._id,
      email: newAdmin.email,
      name: newAdmin.name,
      role: newAdmin.role,
      password: newAdmin.password,
      isAdmin: newAdmin.isAdmin,
    };

    res.status(201).json({
      message: "Admin registration successful.",
      newUser,
      token: token,
    });
  } catch (err) {
    res.status(500).send("Error registering admin.");
  }

  //Login user
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // Find the admin by email and check if they are an admin
  const admin = await Employee.findOne({ email, isAdmin: true });

  if (!admin) {
    return res.status(401).send("Admin not found.");
  }

  // Check the password using bcrypt
  if (bcrypt.compareSync(password, admin.password)) {
    const user = {
      email: admin.email,
      staffId: admin.staffId,
      role: admin.role,
      name: admin.name,
    };
    const token = jwt.sign({ userId: user._id }, "secret-key", {
      expiresIn: "365d",
    });
    return res
      .status(200)
      .json({ message: "Admin login successful.", user: user, token: token });
  } else {
    return res
      .status(401)
      .send("Invalid Staff Id,please use your valid staff.");
  }
});

// Create employee route
router.post("/create-employee", async (req, res) => {
  const { email, staffId, name, password, role } = req.body;

  // Check if the email is already taken
  const existingEmployee = await Employee.findOne({ email, isAdmin: false });
  const existingEmployeeStaffId = await Employee.findOne({
    staffId,
    isAdmin: false,
  });

  if (existingEmployee) {
    return res.status(400).send("Employee with this email already exists.");
  }
  //Check if the staff id is already taken
  if (existingEmployeeStaffId) {
    return res.status(400).send("Employee with this staffId already exists.");
  }

  // Hash the password before storing it in the database
  const hashedPassword = await bcrypt.hash(password, 10);

  const newEmployee = new Employee({
    email,
    staffId,
    name,
    role,
    password: hashedPassword,
    isAdmin: false,
  });

  try {
    await newEmployee.save();
    res.status(201).send("Employee created successfully.");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error creating employee.");
  }
});

// Admin-only route to get attendance records of all employees
router.get("/attendance/all-records", async (req, res) => {
  try {
    // Check if the logged-in user is an admin
    const loggedInUserIsAdmin = req.user.isAdmin; // Assuming admin status is stored in req.user

    if (!loggedInUserIsAdmin) {
      return res.status(403).send("Unauthorized");
    }

    // Retrieve attendance records for all employees
    const records = await AttendanceRecord.find().sort({ timestamp: "desc" });

    res.status(200).json(records);
  } catch (err) {
    console.error("Error retrieving attendance records", err);
    res.status(500).send("Error retrieving attendance records");
  }
});

// Admin-only route to query attendance records for a particular employee
router.get("/attendance/:employeeId/records", async (req, res) => {
  const { employeeId } = req.params;

  try {
    // Check if the logged-in user is an admin
    const loggedInUserIsAdmin = req.user.isAdmin; // Assuming admin status is stored in req.user

    if (!loggedInUserIsAdmin) {
      return res.status(403).send("Unauthorized");
    }

    // Retrieve attendance records for the specified employee
    const records = await AttendanceRecord.find({ employee: employeeId }).sort({
      timestamp: "desc",
    });

    res.status(200).json(records);
  } catch (err) {
    console.error("Error retrieving attendance records", err);
    res.status(500).send("Error retrieving attendance records");
  }
});

router.post("/notifications", async (req, res) => {
  const { title, body } = req.body;

  try {
    // Create a new notification
    const newNotification = new Notification({
      title,
      body,
    });

    await newNotification.save();

    // Broadcast the new notification to all connected employees
    io.emit("newNotification", newNotification);

    res.status(201).json(newNotification);
  } catch (err) {
    console.error("Error creating notification", err);
    res.status(500).send("Error creating notification");
  }
});

module.exports = router;
