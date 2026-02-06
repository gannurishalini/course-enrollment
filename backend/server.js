const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

/* GET all courses */
app.get("/courses", (req, res) => {
  db.query("SELECT * FROM courses", (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

/* GET course by id */
app.get("/courses/:id", (req, res) => {
  db.query(
    "SELECT * FROM courses WHERE id=?",
    [req.params.id],
    (err, result) => {
      if (err) throw err;
      res.json(result[0]);
    }
  );
});

/* ADD course (Admin) */
app.post("/courses", (req, res) => {
  const { name, description, duration, fee } = req.body;
  db.query(
    "INSERT INTO courses (name, description, duration, fee) VALUES (?,?,?,?)",
    [name, description, duration, fee],
    () => res.json({ message: "Course added successfully" })
  );
});

/* ENROLL student */
app.post("/enroll", (req, res) => {
  const { student_name, email, course_id } = req.body;
  db.query(
    "INSERT INTO enrollments (student_name, email, course_id) VALUES (?,?,?)",
    [student_name, email, course_id],
    () => res.json({ message: "Enrollment successful" })
  );
});

/* VIEW enrollments */
app.get("/enrollments", (req, res) => {
  db.query(
    `SELECT e.id, e.student_name, e.email, c.name AS course
     FROM enrollments e JOIN courses c ON e.course_id=c.id`,
    (err, result) => res.json(result)
  );
});

app.listen(8000, () => {
  console.log("Server running on http://localhost:8000");
});
