var express = require("express");
var app = express();
var port = 3004;
const mongoose = require("mongoose");

// Middleware
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/skillHubDB");

mongoose.connection.on("connected", () => {
  console.log("MongoDB connected!");
});

mongoose.connection.on("error", (err) => {
  console.log("MongoDB error:", err);
});


// Schema & Model
const CourseSchema = new mongoose.Schema({
  courseName: String,
  instructor: String,
  difficulty: String,
  duration: String
});

const Course = mongoose.model("Course", CourseSchema);

// ROUTES
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// GET all courses
app.get("/api/courses", async (req, res) => {
  console.log("GET /api/courses HIT");

  try {
    const courses = await Course.find({});

    res.json({
      statusCode: 200,
      data: courses,
      message: "Success"
    });

  } catch (err) {
    res.status(500).json({
      statusCode: 500,
      message: "Database error"
    });
  }
});


// POST 
app.post("/api/courses", async (req, res) => {
  console.log("POST /api/courses HIT");

  try {
    const newCourse = new Course({
      courseName: req.body.courseName,
      instructor: req.body.instructor,
      difficulty: req.body.difficulty,
      duration: req.body.duration
    });

    await newCourse.save();

    res.json({
      statusCode: 201,
      message: "Course added successfully"
    });

  } catch (err) {
    console.log(err);

    res.status(500).json({
      statusCode: 500,
      message: "Failed to add course"
    });
  }
});


// Start Server
app.listen(port, () => {
  console.log("App listening on port " + port);
});