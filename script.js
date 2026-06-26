let selectedFood = "";

function switchScreen(id) {
  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");
}

function showMenu() {
  document.getElementById("saveStatus").textContent = "";

  const lockButton = document.getElementById("lockButton");
  lockButton.disabled = false;
  lockButton.textContent = "Lock it in ✅";

  switchScreen("menu");
}

function choose(food, response) {
  selectedFood = food;
  document.getElementById("responseText").innerHTML = response;
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
