let selectedFood = "";

const responses = {
  "Your cooking": "THE BEST CHOICE. 👨‍🍳❤️",
  "Japanese": "Lets do it! Some sake afterwards? 🍶",
  "Thai": "Never thought you'd pick this. 🌶",
  "Western": "Lets gooo! We haven't really had proper Western yet. 🍔",
  "Chicken Rice": "Can't go wrong with comfort food. 😌",
  "HDL": "YAYYY GOOD CHOICE! 🎉<br><br>We'll complain about how full we are afterwards 😂",
  "You": "Well... I guess you're my main dish. ❤️"
};

function switchScreen(id) {
  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showMenu() {
  document.getElementById("saveStatus").textContent = "";

  const lockButton = document.getElementById("lockButton");
  lockButton.disabled = false;
  lockButton.textContent = "Lock it in ✅";

  switchScreen("menu");
}

function choose(food) {
  selectedFood = food;
  document.getElementById("responseText").innerHTML = responses[food];
  switchScreen("result");
}

function submitResponse() {
  document.getElementById("foodChoiceInput").value = selectedFood;
  document.getElementById("googleForm").submit();
}

function confirmDate() {
  const lockButton = document.getElementById("lockButton");
  lockButton.disabled = true;
  lockButton.textContent = "Saved ❤️";

  document.getElementById("saveStatus").textContent = "Response saved.";

  submitResponse();

  setTimeout(() => {
    switchScreen("final");
  }, 500);
}

document.getElementById("yesButton").addEventListener("click", showMenu);
document.getElementById("lockButton").addEventListener("click", confirmDate);
document.getElementById("tryAgainButton").addEventListener("click", showMenu);
document.getElementById("backToMenuButton").addEventListener("click", showMenu);

document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    choose(card.dataset.food);
  });
});
