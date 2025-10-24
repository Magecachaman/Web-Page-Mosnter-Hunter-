const hideMe = document.getElementById("hide-me");
const toggleButton = document.getElementById("toggle-button");

toggleButton.addEventListener("click", hidePhoto);

function hidePhoto() {
  if (hideMe.style.display === "none") {
    hideMe.style.display = "block";
  } else {
    hideMe.style.display = "none";
  }
}
