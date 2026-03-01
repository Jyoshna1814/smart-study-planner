const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/generate", (req, res) => {
  const { subject, hours, examDate } = req.body;
  if (!subject || !hours) {
    return res.status(400).json({ error: "Missing data" });
  }

 const plan = `
Study Plan for ${subject}
Exam Date: ${examDate}

Hour 1:
- Revise basic concepts
- Watch 1 tutorial video
- Solve 5 practice questions

Remaining Hours:
- Practice problems
- Revise weak areas
- Take short notes
`;

  res.json({ plan });
});

app.get("/", (req, res) => {
  res.send("Backend is running!");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});