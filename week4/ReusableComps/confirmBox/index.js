const confirmationBox = document.getElementById("popup_box");
const cancelButton = document.getElementById("btn1");
const okButton = document.getElementById("btn2");
const showBtn = document.getElementById("show-box");
showBtn.addEventListener("click", showConfirmationBox);
okButton.addEventListener("click", hideConfirmationBox);
cancelButton.addEventListener("click", hideConfirmationBox);

function showConfirmationBox() {
  confirmationBox.style.top = "200px";
  confirmationBox.style.display = "block";
}

function hideConfirmationBox() {
  confirmationBox.style.display = "none";
}
