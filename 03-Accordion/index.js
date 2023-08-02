const abutton = document.querySelectorAll(".btn");
// const content = document.querySelectorAll(".content");

abutton.forEach((button, index) => {
  button.addEventListener("click", function () {
    console.log(`Button ${index + 1} clicked`);
    const content = this.parentElement.nextElementSibling;
    if (content.style.display === "none") {
      content.style.display === "block";
    } else {
      content.style.display === "none";
    }
  });
});
