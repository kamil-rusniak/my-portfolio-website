// Updating date in footer
let d = new Date();
document.getElementById("data").innerHTML = d.getFullYear();

// Popup description windows and background blur
let mainWrapper = document.querySelector(".main-wrapper");
let popupExit1 = document.querySelector(".exit-button1");
let descButton1 = document.querySelector(".button-description1");
let projectPopup1 = document.querySelector(".project-popup1");
let popupExit2 = document.querySelector(".exit-button2");
let descButton2 = document.querySelector(".button-description2");
let projectPopup2 = document.querySelector(".project-popup2");

descButton1.addEventListener("click", displayPopup1);
popupExit1.addEventListener("click", hidePopup1);
descButton2.addEventListener("click", displayPopup2);
popupExit2.addEventListener("click", hidePopup2);

function displayPopup1() {
  mainWrapper.classList.add("blur");
  projectPopup1.style.display = "flex";
}

function hidePopup1() {
  mainWrapper.classList.remove("blur");
  projectPopup1.style.display = "none";
}

window.addEventListener("click", function (event) {
  if (event.target == projectPopup1) {
    hidePopup1();
  }
});

function displayPopup2() {
  mainWrapper.classList.add("blur");
  projectPopup2.style.display = "flex";
}

function hidePopup2() {
  mainWrapper.classList.remove("blur");
  projectPopup2.style.display = "none";
}

window.addEventListener("click", function (event) {
  if (event.target == projectPopup2) {
    hidePopup2();
  }
});
