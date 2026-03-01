document.addEventListener("DOMContentLoaded", function () {
  const generateBtn = document.getElementById("generateBtn");
  const resultDiv = document.getElementById("result");
  const progressBar = document.getElementById("progressBar");

  generateBtn.addEventListener("click", async function () {
    const subject = document.getElementById("subject").value;
    const hours = document.getElementById("hours").value;

    if (!subject || !hours) {
      alert("Please enter subject and study hours");
      return;
    }

    resultDiv.innerHTML = "Generating plan...";
    progressBar.style.width = "30%";

    try {
      const response = await fetch("https://smart-study-planner-wx04.onrender.com/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          subject: subject,
          hours: hours
        })
      });

      const data = await response.json();

      if (data.plan) {
        resultDiv.innerHTML = data.plan;
        progressBar.style.width = "100%";
      } else {
        resultDiv.innerHTML = "Error generating plan.";
        progressBar.style.width = "0%";
      }

    } catch (error) {
      console.error(error);
      resultDiv.innerHTML = "Server error. Please try again.";
      progressBar.style.width = "0%";
    }
  });
});