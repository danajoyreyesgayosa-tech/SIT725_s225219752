// Fetch courses
const getCourses = () => {
  console.log("Fetching courses...");

  $.get("/api/courses", (response) => {
    console.log(response);

    if (response.statusCode === 200) {
      addCards(response.data);
    }
  });
};

// Display courses
const addCards = (courses) => {
  console.log("Courses received:", courses);
  $("#card-section").empty();

  courses.forEach(course => {
    let card = `
      <div style="border:1px solid #ccc; padding:10px; margin:10px;">
        <h3>${course.courseName}</h3>
        <p><b>Instructor:</b> ${course.instructor}</p>
        <p><b>Difficulty:</b> ${course.difficulty}</p>
        <p><b>Duration:</b> ${course.duration}</p>
      </div>
    `;
    $("#card-section").append(card);
  });
};

// Add course (FIXED VERSION)
const addCourse = () => {
  const data = {
    courseName: $("#courseName").val(),
    instructor: $("#instructor").val(),
    difficulty: $("#difficulty").val(),
    duration: $("#duration").val()
  };

  console.log("Sending:", data);

  $.ajax({
    url: "/api/courses",
    type: "POST",
    data: JSON.stringify(data),
    contentType: "application/json",
    success: function (response) {
      console.log("Response:", response);
      alert(response.message);

      // Clear inputs
      $("#courseName").val("");
      $("#instructor").val("");
      $("#difficulty").val("");
      $("#duration").val("");

      getCourses(); // refresh list
    },
    error: function (err) {
      console.log("Error:", err);
      alert("Error adding course");
    }
  });
};

// Run on load
$(document).ready(() => {
  getCourses();

  $("#submitBtn").click(() => {
    console.log("Button clicked");
    addCourse();
  });
});