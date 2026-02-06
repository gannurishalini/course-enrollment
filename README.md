
Course Enrollment System

 Project Overview
This is a simple **Course Enrollment Web Application** where users can view available courses and enroll in them.  
An admin can add courses and view all enrollments.

The project demonstrates **frontend–backend integration**, REST APIs, database connectivity, and clean code structure.

---

## 🛠 Tech Stack

### Frontend
- HTML
- CSS
- JavaScript
- Fetch API

### Backend
- Node.js
- Express.js

### Database
- MySQL

### Tools
- Postman (API testing)
- GitHub (version control)

---

## 📂 Project Structure

```

course-enrollment/
│
├── backend/
│   ├── server.js
│   ├── db.js
│   └── routes/
│
├── frontend/
│   ├── index.html
│   ├── course-details.html
│   ├── enroll.html
│   ├── my-enrollments.html
│   ├── style.css
│   └── script.js
│
├── screenshots/
|    ├── 1_get_courses.png
|    ├── 2_post_course.png
|    ├── 3_post_enroll.png
|    └── 4_get_enrollments.png
│
└── README.md

````

---

## ⚙️ Database Setup (MySQL)

Create a database named `course_enrollment` and run the following SQL:

```sql
CREATE DATABASE course_enrollment;
USE course_enrollment;

CREATE TABLE courses (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  description TEXT,
  duration VARCHAR(50),
  fee INT
);

CREATE TABLE enrollments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  student_name VARCHAR(100),
  email VARCHAR(100),
  course_id INT,
  enrollment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (course_id) REFERENCES courses(id)
);
````

---

## 🚀 Steps to Run Backend

1️⃣ Go to backend folder

```bash
cd backend
```

2️⃣ Install dependencies

```bash
npm install
```

3️⃣ Start the server

```bash
node server.js
```

✅ Backend runs on:

```
http://localhost:8000
```

---

## 🌐 Steps to Run Frontend

1️⃣ Open `frontend` folder
2️⃣ Open `index.html` using:

* Live Server (VS Code), or
* Browser directly

✅ Frontend runs on:

```
http://127.0.0.1:5500/frontend/index.html
```

---

## 🔗 API Endpoints

### Courses

* `GET /courses` – Get all courses
* `GET /courses/:id` – Get course details
* `POST /courses` – Add course (admin)

### Enrollments

* `POST /enroll` – Enroll student
* `GET /enrollments` – View all enrollments

---

## 🧪 API Testing (Postman)

All APIs are tested using Postman.

Screenshots are available in:

```
/screenshots
```

Included:

* Add Course
* Get Courses
* Enroll Student
* View Enrollments

---

## ❌ Not Included (As Per Requirements)

* Authentication / JWT
* Role-based access
* Deployment
* Advanced UI

---

## ✅ Conclusion

This project fulfills all mandatory requirements:

* Frontend connected to backend APIs
* Backend connected to MySQL
* Clean REST APIs
* Proper request & response handling

It is intentionally kept **simple, readable, and functional**.

---


