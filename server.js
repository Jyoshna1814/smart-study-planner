const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/generate", (req, res) => {
  const { subject, hours, examDate } = req.body;

  if (!subject || !hours || !examDate) {
    return res.status(400).json({ error: "Missing data" });
  }

  const today = new Date();
  const exam = new Date(examDate);

  const timeDifference = exam - today;
  const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  if (daysRemaining <= 0) {
    return res.json({ plan: "Exam date must be in the future!" });
  }

  const hoursPerDay = (hours / daysRemaining).toFixed(2);

  const plan = `
Study Plan for ${subject}
Exam Date: ${examDate}
Days Remaining: ${daysRemaining}
Hours Per Day: ${hoursPerDay}

Daily Routine:
- Study ${hoursPerDay} hours per day
- Revise previous topics
- Practice 10 questions
- Take short notes
`;

  res.json({ plan });
});