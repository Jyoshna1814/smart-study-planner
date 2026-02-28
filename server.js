const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/generate-plan", (req, res) => {
    const { subject, examDate, hoursPerDay } = req.body;

    const today = new Date();
    const exam = new Date(examDate);
    const timeDiff = exam - today;
    const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    if (daysLeft <= 0) {
        return res.json({
            message: "Exam date must be in the future."
        });
    }

    const plan = `
📘 Subject: ${subject}
📅 Days Left: ${daysLeft}
⏳ Study ${hoursPerDay} hours daily.
📌 Revise every 3rd day.
🔥 Final 2 days: Full revision & mock test.
    `;

    res.json({ message: plan });
});

app.listen(5000, () => {
    console.log("Server running at http://localhost:5000");
});