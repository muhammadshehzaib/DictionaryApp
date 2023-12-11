const navLinks = document.querySelector(".nav-links");

function onToggleMenu(e) {
  e.name = e.name === "menu" ? "close" : "menu";
  navLinks.classList.toggle("right-[0%]");
}

function Featuresdropdown() {
  let featuresdropdown = document.getElementById("featuresdropdown");
  let features = document.getElementById("features");

  featuresdropdown.addEventListener("mouseover", function () {
    features.classList.remove("hidden");

    featuresdropdown.addEventListener("mouseout", function () {
      features.classList.add("hidden");
    });
  });
}

function Companydropdown() {
  let featuresdropdown = document.getElementById("companydropdown");
  let features = document.getElementById("company");

  featuresdropdown.addEventListener("mouseover", function () {
    features.classList.remove("hidden");

    featuresdropdown.addEventListener("mouseout", function () {
      features.classList.add("hidden");
    });
  });
}
