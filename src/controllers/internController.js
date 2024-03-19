const Intern = require("../models/intern");
const Projects = require("../models/Projects");
const Reports = require("../models/reports");
// const AttendanceRecord = require("../models/AttendanceReports");
const LeaveRequest = require("../models/LeaveRequest");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { generateToken } = require("../config/jwt");
const multer = require("multer");
const storage = require("../config/cloudnary");
const moment = require("moment");

// Initialize multer instance with Cloudinary storage
const upload = multer({ storage: storage });
const createAccount = async (req, res) => {
  const { email, name, contact, school, password } = req.body;
  // Check if the email is already taken
  const alreadyRegistered = await Intern.findOne({ email });
  // Check if Intern  Id is already taken
  if (alreadyRegistered) {
    return res
      .status(400)
      .json({ message: "Intern with this email already exists." });
  }

  // Hash the password before storing it in the database
  const hashedPassword = await bcrypt.hash(password, 10);
  // console.log(hashedPassword)

  const register = new Intern({
    email,
    name,
    contact,
    school,
    course: "",
    gender: "",
    nationality: "",
    profileUrl: "",
    address: "",
    startDate: new Date(),
    endDate: null,
    dateJoined: new Date(),
    password: hashedPassword,
  });

  try {
    await register.save();
    const token = jwt.sign({ userId: register._id }, "secret-key", {
      expiresIn: "356d",
    });
    const newUser = {
      _id: register._id,
      email: register.email,
      name: register.name,
      contact: register.contact,
      school: register.school,
      course: register.course,
      address: register.address,
      nationality: register.nationality,
      startDate: register.startDate,
      endDate: register.endDate,
      password: register.password,
      token: token,
    };

    res.status(201).json(newUser);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error registering admin.");
  }
};

const loginIntern = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the Intern by email address
    const intern = await Intern.findOne({ email });

    if (!intern) {
      return res.status(401).json({
        message: "The Intern with this email address does not exist",
      });
    }

    //Find the Intern by staff id
    if (bcrypt.compareSync(password, intern.password)) {
      const user = {
        id: intern.id,
        email: intern.email,
        name: intern.name,
        contact: intern.contact,
        token: generateToken(intern?.id),
      };
      return res.status(200).json({ message: "login successfully", user });
    } else {
      return res
        .status(401)
        .send("Invalid password,please use your valid password.");
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Error loging in" });
  }
};

const updateProfile = async (req, res) => {
  const { internId } = req.params;
  try {
    const {
      name,
      contact,
      school,
      course,
      gender,
      nationality,
      profileUrl,
      address,
      startDate,
      endDate,
    } = req.body;
    // Find the intern based on their unique _id
    const intern = await Intern.findById(internId);
    if (!intern) {
      return res.status(404).json({ message: "Intern not found" });
    }
    // Update customer's profile information
    intern.name = name || intern.name;
    intern.school = school || intern.school;
    intern.course = course || intern.course;
    intern.gender = gender || intern.gender;
    intern.nationality = nationality || intern.nationality;
    intern.address = address || intern.address;
    intern.profileUrl = profileUrl || intern.profileUrl;
    intern.startDate = startDate || intern.startDate;
    intern.endDate = endDate || intern.endDate;
    intern.contact = contact || intern.contact;
    if (req.file) {
      intern.profileUrl = req.file.path;
    }
    await intern.save();

    res.status(200).json({ message: "Profile updated successfully", intern });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating customer profile" });
  }
};

const createProject = async (req, res) => {
  const { title, description, InternId, githubUrl } = req.body;

  try {
    // Create a new project
    const newProject = new Projects({
      internId: InternId,
      title,
      description,
      githubUrl,
      hostedUrl: "null",
    });

    await newProject.save();
    res.status(201).json(newProject);
  } catch (err) {
    console.error("Error creating new project", err);
    res.status(500).send("Error creating new project");
  }
};

const getInternProjectsHistory = async (req, res) => {
  const { internId } = req.params;

  try {
    const records = await Projects.find({ internId: internId }).sort({
      timestamp: "desc",
    });

    res.status(200).json(records);
  } catch (err) {
    console.error("Error retrieving projects records", err);
    res.status(500).send("Error retrieving Projects records");
  }
};

const editProject = async (req, res) => {
  const { title, description, InternId, githubUrl, hostedUrl } = req.body;
  const { projectId } = req.params;

  try {
    // Check if the project exists and is associated with the logged-in Intern
    const existingProject = await Projects.findOne({
      _id: projectId,
      Intern: InternId,
    });

    if (!existingProject) {
      return res.status(404).json({ message: "Projects not found" });
    }

    // Check if the task report was created on the same day
    const today = moment().startOf("day");
    if (!moment(existingProject.timestamp).isSame(today, "day")) {
      return res.status(403).json({
        message: "Projects  can only be edited on the same day it was created",
      });
    }

    // Update the reason of the task report
    //     intern.course = course || intern.course;
    existingProject.description = description || existingProject.description;
    existingProject.title = title || existingProject.title;
    existingProject.githubUrl = githubUrl || existingProject.githubUrl;
    existingProject.hostedUrl = hostedUrl || existingProject.hostedUrl;
    await existingProject.save();
    res.status(200).json({
      message: "Project updated successfully",
      existingProject,
    });
  } catch (err) {
    console.error("Error editing this project", err);
    res.status(500).send("Error editing this project");
  }
};

///Get Projects created today

const getTodayCreatedTask = async (req, res) => {
  // Retrieve the logged-in Intern (you should have authentication in place)
  const { InternId } = req.params;
  try {
    const today = new Date();
    // Set time to the beginning of the day
    today.setHours(0, 0, 0, 0);

    // Find tasks created by the Intern for today
    const tasks = await Projects.find({
      Intern: InternId,
      timestamp: { $gte: today },
    });

    res
      .status(200)
      .json({ message: "Todays task retrieved successfully", task: tasks });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteProject = async (req, res) => {
  const { projectId } = req.params;

  try {
    // Check if the project exists
    const existingProject = await Projects.findOne({
      _id: projectId,
    });

    if (!existingProject) {
      return res.status(404).send("Projects report not found");
    }

    // Check if the project was created on the same day
    const today = moment().startOf("day");
    if (!moment(existingProject.timestamp).isSame(today, "day")) {
      return res
        .status(403)
        .send(
          "Projects report can only be deleted on the same day it was created"
        );
    }

    // Delete the task
    await existingProject.deleteOne();
    res.status(204).json({ message: "Project deleted successfully" });
  } catch (err) {
    console.error("Error deleting project report", err);
    res.status(500).json({ message: "Error deleting project report" });
  }
};

const leaveRequest = async (req, res) => {
  const { reason, startDate, endDate, leaveType, InternId } = req.body;

  try {
    // Create a new leave request
    const newRequest = new LeaveRequest({
      Intern: InternId,
      reason,
      leaveType,
      startDate,
      endDate,
      status: "pending",
      timeStamp: new Date(),
    });

    await newRequest.save();
    res.status(201).json({
      message: "Your leave request has been submitted successfully",
      newRequest,
    });
  } catch (err) {
    console.error("Error creating leave request", err);
    res.status(500).json({ message: "Error creating leave request" });
  }
};
/////////GET Leave Histroy

const getInternLeaveHistory = async (req, res) => {
  const { InternId } = req.params;

  try {
    const records = await LeaveRequest.find({ Intern: InternId }).sort({
      timestamp: "desc",
    });

    res.status(200).json(records);
  } catch (err) {
    console.error("Error retrieving leave history", err);
    res.status(500).send("Error retrieving leave history");
  }
};

const editLeaveRequest = async (req, res) => {
  const { reason, leaveType, startDate, endDate, InternId } = req.body;
  const { requestId } = req.params;

  try {
    // Retrieve the logged-in Intern (you should have authentication in place)

    // Check if the leave request exists and is associated with the logged-in Intern
    const existingRequest = await LeaveRequest.findOne({
      _id: requestId,
      Intern: InternId,
    });

    if (!existingRequest) {
      return res.status(404).send("Leave request not found");
    }

    // Check if the request's start date is in the future
    const today = moment().startOf("day");
    if (moment(existingRequest.startDate).isBefore(today)) {
      return res.status(403).json({
        message:
          "Leave request can only be edited if the start date is in the future",
      });
    }

    // Update the leave request
    existingRequest.reason = reason;
    existingRequest.leaveType = leaveType;
    existingRequest.startDate = startDate;
    existingRequest.endDate = endDate;
    await existingRequest.save();
    res.status(200).json({
      message: "Your leave request has been updated successfully",
      existingRequest,
    });
  } catch (err) {
    console.error("Error editing leave request", err);
    res.status(500).json({ message: "Error editing leave request" });
  }
};

const deleteALeaveRequest = async (req, res) => {
  const { requestId } = req.params;

  try {
    // Retrieve the logged-in Intern (you should have authentication in place)

    // Check if the leave request exists and is associated with the logged-in Intern
    const existingRequest = await LeaveRequest.findOne({
      _id: requestId,
    });

    if (!existingRequest) {
      return res.status(404).send("Leave request not found");
    }

    // Check if the request's start date is in the future
    const today = moment().startOf("day");
    if (moment(existingRequest.startDate).isBefore(today)) {
      return res
        .status(403)
        .send(
          "Leave request can only be deleted if the start date is in the future"
        );
    }

    // Delete the leave request
    await existingRequest.deleteOne();
    res.status(204).json({ message: "Leave request deleted successfully" });
  } catch (err) {
    console.log("Error deleting leave request", err);
    res.status(500).json({ message: "Error deleting leave request" });
  }
};

/////REPORTSS

const createNewReport = async (req, res) => {
  try {
    const { week, title, body, id } = req.body;
    const InternId = id;

    // Find the Intern by ID
    const intern = await Intern.findById(InternId);

    if (!intern) {
      return res.status(404).json({ error: "Intern not found" });
    }

    // Check if the Intern has already submitted a report for the given week
    const existingReport = await Reports.findOne({ week: week });
    if (existingReport) {
      console.log(existingReport);
      return res
        .status(400)
        .json({ message: "Report already submitted for this week" });
    }

    // Add the new report to the weeklyReports array
    const report = new Reports({
          internId:InternId,
      week,
      title,
      body,
      timeStamp: new Date(),
    });

    // Save the report document
    await report.save();

    res.status(201).json({ message: "Report submitted successfully", report });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};



const getInternReports = async (req, res) => {
  const { internId } = req.params;
  try {
    const Intern = await Reports.find({ internId: internId });

    if (!Intern) {
      res.status(500).json({ message: "Intern not found" });
    }

    res.status(200).json({ reports: Intern });
  } catch (error) {}
};

module.exports = {
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
  getInternLeaveHistory,
  createNewReport,
  getInternReports,
  upload,
};




//https://www.behance.net/gallery/184583919/Intern-Attendance-Management-App-Design?tracking_source=search_projects
