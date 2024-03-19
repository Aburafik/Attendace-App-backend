const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const Intern = require("../models/Intern");
const Admin = require("../models/admin");
const Leave= require("../models/LeaveRequest");
const Notification = require("../models/notifications");
const AttendanceRecord = require("../models/AttendanceReports");
const bodyParser = require("body-parser");
const express = require("express");
const { generateToken } = require("../config/jwt");
const app = express();
app.use(bodyParser.json());
const socketIO = require('socket.io');
const http = require("http")
// const io = require("socket.io")(http);
const server = http.createServer(app);
const io = socketIO(server, {
  transports: ['websocket'], // Enable only WebSocket transport
});
// const moment = require("moment");

const register = async (req, res) => {
  const { email, name, password} = req.body;
  // Check if the email is already taken
  const existingAdmin = await Admin.findOne({email});
  // Check if Admin  Id is already taken
  if (existingAdmin) {
    return res
      .status(400)
      .json({ message: "Admin with this email already exists." });
  }
 

  // Hash the password before storing it in the database
  const hashedPassword = await bcrypt.hash(password, 10);
  // console.log(hashedPassword)

  const newAdmin = new Admin({
    email,
    name,
    dateJoined: new Date(),
    password: hashedPassword,
  });

  try {
    await newAdmin.save();
    const token = jwt.sign({userId: newAdmin._id }, "secret-key", {
      expiresIn: "356d",
    });
    const newUser = {
      _id: newAdmin._id,
      email: newAdmin.email,
      name: newAdmin.name,
      role: newAdmin.role,
      password: newAdmin.password,
      isAdmin: newAdmin.isAdmin,
      token: token,
    };

    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).send("Error registering admin.");
  }

};






const login = async (req, res) => {
  const { email, password } = req.body;

  // Find the admin by email and check if they are an admin
  const admin = await Admin.findOne({email});

  if (!admin) {
    return res.status(401).send("Admin not found.");
  }

  // Check the password using bcrypt
  if (bcrypt.compareSync(password, admin.password)) {
    const user = {
      email: admin.email,
      role: admin.role,
      name: admin.name,
      token: generateToken(admin?.id),
    };
    return res.status(200).json(user);
  } else {
    return res
      .status(401)
      .send("Invalid Staff Id,please use your valid staff.");
  }
};

// Create Intern route

// Admin-only route to get attendance records of all Interns
const getAllAttendanceRecords = async (req, res) => {
  try {
    // Retrieve attendance records for all Interns
    const records = await AttendanceRecord.find().sort({ timestamp: "desc" });

    res.status(200).json(records);
  } catch (err) {
    console.error("Error retrieving attendance records", err);
    res.status(500).send("Error retrieving attendance records");
  }
};

// Admin-only route to query attendance records for a particular Intern
const getSingleRecord = async (req, res) => {
  const { InternId } = req.body;
  //console.log(InternId)
  try {
    // Retrieve attendance records for the specified Intern
    const records = await AttendanceRecord.find({ Intern: InternId }).sort({
      timestamp: "desc",
    });

    res.status(200).json(records);
  } catch (err) {
    console.error("Error retrieving attendance records", err);
    res.status(500).send("Error retrieving attendance records");
  }
};

const notifications = async (req, res) => {
  const { title, body, to } = req.body;
  try {
    // Create a new notification
    const newNotification = new Notification({
      title,
      body,
      to
    });

    await newNotification.save();

    // Broadcast the new notification to all connected Interns
    //   const notifications = await Notification.find()

    io.emit("newNotification", newNotification);
    res.status(201).json(newNotification);
    console.log(newNotification);
  } catch (err) {
    console.error("Error creating notification", err);
    res.status(500).send("Error creating notification ");
  }
};


// Admin-only route to get attendance records of all Interns
const getAllLeaveRequest = async (req, res) => {
          try {
            // Retrieve leave records for all Interns
            const leaveRecords = await Leave.find().sort({ timestamp: "desc" });
        
            res.status(200).json(leaveRecords);
          } catch (err) {
            console.error("Error retrieving leave records", err);
            res.status(500).send("Error retrieving leave records");
          }
        };


const updateInternLeaveRequest = async (req, res) => {
  try {
    const { status } = req.body;
    const leaveId = req.params.leaveId;

    // Update the leave request status
    await Leave.findByIdAndUpdate(leaveId, { status });

    res.json({ message: "Leave request updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// app.use("/api/admin", router);

module.exports = {
  register,
  login,
  notifications,
  getAllAttendanceRecords,
  getSingleRecord,
  updateInternLeaveRequest,
  getAllLeaveRequest,
  express,
  io,
  server,
  app,
};
