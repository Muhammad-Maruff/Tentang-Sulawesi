function buttonclick() {
  document.getElementById("list").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".buttonbtn")) {
    var buttondowns = document.getElementsByClassName("buttondown-content");
    var indeks;
    for (indeks = 0; indeks < buttondowns.length; indeks++) {
      var buttonDropdown = buttondowns[indeks];
      if (buttonDropdown.classList.contains("show")) {
        buttonDropdown.classList.remove("show");
      }
    }
  }
};

document.addEventListener("DOMContentLoaded", function () {
  const backToTopBtn = document.getElementById("backToTopBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
