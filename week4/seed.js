const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/skillHubDB");

const CourseSchema = new mongoose.Schema({
  courseName: String,
  instructor: String,
  difficulty: String,
  duration: String
});

const Course = mongoose.model("Course", CourseSchema);

const sampleCourses = [
  {
    courseName: "Graphic Design Basics",
    instructor: "Emily Carter",
    difficulty: "Beginner",
    duration: "3 weeks"
  },
  {
    courseName: "JavaScript Essentials",
    instructor: "Michael Wong",
    difficulty: "Intermediate",
    duration: "5 weeks"
  },
  {
    courseName: "Digital Marketing",
    instructor: "Olivia Smith",
    difficulty: "Beginner",
    duration: "4 weeks"
  }
];

Course.insertMany(sampleCourses)
  .then(() => {
    console.log("Sample data inserted!");
    mongoose.connection.close();
  })
  .catch(err => console.log(err));