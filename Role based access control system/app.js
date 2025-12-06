require("dotenv").config();
const express = require('express');
const app = express();

app.use(express.json());

// Public home
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Home (Public)" });
});

// Routes
const authRoutes = require("./routes/auth.routes");
const courseRoutes = require("./routes/course.routes");
const dashboardRoutes = require("./routes/dashboard.routes");

app.use("/auth", authRoutes);
app.use("/courses", courseRoutes);
app.use("/dashboard", dashboardRoutes);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

