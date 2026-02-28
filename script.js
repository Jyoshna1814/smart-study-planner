console.log("JS working");
async function generatePlan() {
    const subject = document.getElementById("subject").value;
    const examDate = document.getElementById("examDate").value;
    const hoursPerDay = document.getElementById("hoursPerDay").value;

    const response = await fetch("https://smart-study-planner-wx04.onrender.com", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            subject,
            examDate,
            hoursPerDay
        })
    });

    const data = await response.json();

    document.getElementById("planOutput").innerText = data.message;
}