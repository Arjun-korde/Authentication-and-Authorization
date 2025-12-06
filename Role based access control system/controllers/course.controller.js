exports.getCourses = (req, res) => {
  res.json({ message: "Courses visible to Teacher/Admin" });
};

exports.createCourse = (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ message: "Course title required" });

  res.json({
    message: "Course created successfully",
    course: { id: Date.now(), title, createdBy: req.user.username },
  });
};

exports.enroll = (req, res) => {
  const { id } = req.params;
  res.json({
    message: `User ${req.user.username} enrolled in course ${id}`
  });
};
