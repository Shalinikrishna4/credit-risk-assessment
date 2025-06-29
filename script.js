document.getElementById("predictForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Collect user input (you can send this to a backend later)
  const inputs = Array.from(document.querySelectorAll("input"));
  const values = inputs.map(input => Number(input.value));

  // Simulated logic for now
  const riskScore = values.reduce((acc, val) => acc + val, 0);

  let resultText = "";
  if (riskScore < 200) {
    resultText = "Low Risk ✅";
  } else if (riskScore < 350) {
    resultText = "Medium Risk ⚠️";
  } else {
    resultText = "High Risk ❌";
  }

  document.getElementById("result").innerText = "Prediction: " + resultText;
});
