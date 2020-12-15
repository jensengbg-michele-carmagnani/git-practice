let darkBtn = document.querySelector(".dark-btn");
let titleSection = document.querySelector(".title-section");
let title = document.querySelector(".title");
let main = document.querySelector(".main");
let text = document.querySelector(".text");
let bodyPage = document.querySelector(".body-page");

let isDark = false;

function darkMode() {
  if (!isDark) {
    console.log("when dark is true");
    bodyPage.classList.add("dark-screen");
    title.classList.add("dark-screen");
    titleSection.classList.add("dark-screen");
    main.classList.add("dark-screen");
    text.classList.add("dark-screen");
    isDark = true;
    console.log("dark", isDark);
  } else {
    console.log("when dark is false");
    bodyPage.classList.remove("dark-screen");
    title.classList.remove("dark-screen");
    titleSection.classList.remove("dark-screen");
    main.classList.remove("dark-screen");
    text.classList.remove("dark-screen");
    isDark = false;
    console.log("dark", isDark);
  }
}

darkBtn.addEventListener("click", () => {
  darkMode();
});
