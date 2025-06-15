const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const ageInput = document.getElementById("age");
const feedbackMessage = document.getElementById("feedbackMessage");
const submitBtn = document.getElementById("btn");

const submitFeedback = (event) => {
  console.log(event);
  const nameValue = nameInput.value;
  const emailValue = emailInput.value;
  const ageValue = ageInput.value;

  if (!nameValue || !emailValue || !ageValue) {
    feedbackMessage.textContent = "Please fill in all fields.";
    feedbackMessage.className = "error";
    return; // to end a funcion from continuing
  }

  feedbackMessage.textContent = "Thank you for your feedback, " + name + "!";
  feedbackMessage.className = "success";

  nameInput.value = "";
  emailInput.value = "";
  ageInput.value = "";
};

const onClickEnter = (anything) => {
  if (anything.key === "Enter") {
    submitFeedback(anything);
  }
};

submitBtn.addEventListener("click", (e) => {
  submitFeedback(e);
});

document.addEventListener("keydown", (e) => {
  onClickEnter(e);
});
