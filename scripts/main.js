let heading = document.getElementById("greeting");

const today = new Date();
const hour = today.getHours();
const time_period =
  hour >= 6 && hour < 12
    ? "morning"
    : hour >= 12 && hour < 19
    ? "afternoon"
    : "evening";

heading.innerHTML = `Good ${time_period}! I'm Corey Fuller.`;
