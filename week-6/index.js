const submitFeedback = () => {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const age = document.getElementById("age").value;
  const feedbackMessage = document.getElementById("feedbackMessage");

  if (!name || !email || !age) {
    feedbackMessage.textContent = "Please fill in all fields.";
    feedbackMessage.className = "error";
    return; // to end a funcion from continuing
  }

  feedbackMessage.textContent = "Thank you for your feedback, " + name + "!";
  feedbackMessage.className = "success";

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("age").value = "";
};
