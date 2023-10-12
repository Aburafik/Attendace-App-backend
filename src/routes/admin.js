const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Employee = require("../models/Employee");
const express = require("express");

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

    res
      .status(201)
      .json({
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
      .json({ message: "Admin login successful.", user: user, token:token });
  } else {
    return res.status(401).send("Invalid Staff Id,please use your valid staff.");
  }
});

module.exports = router;
