function changeColors(
  navbar,
  main,
  sidebar,
  content1,
  content2,
  content3,
  footer
) {
  document.documentElement.style.setProperty("--navbar", navbar);
  document.documentElement.style.setProperty("--main", main);
  document.documentElement.style.setProperty("--sidebar", sidebar);
  document.documentElement.style.setProperty("--content1", content1);
  document.documentElement.style.setProperty("--content2", content2);
  document.documentElement.style.setProperty("--content3", content3);
  document.documentElement.style.setProperty("--footer", footer);
}

// Example usage:
function changeColorCool() {
  changeColors(
    "#7ED7C1",
    "#F0DBAF",
    "#DC8686",
    "#B06161",
    "#363062",
    "#435585",
    "#818FB4"
  );
}

function changeColorCrispy() {
  changeColors(
    "#EEF5FF",
    "#9EB8D9",
    "#7C93C3",
    "#A25772",
    "#860A35",
    "#AF2655",
    "#A3B763"
  );
}

function changeColorDark() {
  changeColors(
    "#7B2869",
    "#9D3C72",
    "#C85C8E",
    "#FFBABA",
    "#A9A9A9",
    "#FECDA6",
    "#FF9130"
  );
}

function changeColorModern() {
  changeColors(
    "#219C90",
    "#E9B824",
    "#EE9322",
    "#D83F31",
    "#2B3499",
    "#FF6C22",
    "#FF9209"
  );
}

function changeColorNeutral() {
  changeColors(
    "#7B2869",
    "#9D3C72",
    "#C85C8E",
    "#FFBABA",
    "#A9A9A9",
    "#FECDA6",
    "#FF9130"
  );
}

function changeColorFlex() {
  changeColors(
    "#EEF5FF",
    "#9EB8D9",
    "#7C93C3",
    "#A25772",
    "#860A35",
    "#AF2655",
    "#A3B763"
  );
}

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
