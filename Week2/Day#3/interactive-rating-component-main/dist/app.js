function submitBtn() {
  var value = sessionStorage.getItem("value");
  let firstsession = document.getElementById("firstsession");
  firstsession.classList.add("hidden");
  let thanku = document.getElementById("thanku");
  thanku.classList.remove("hidden");
  let rating = document.getElementById("rating");
  rating.innerHTML = value;
}

function getRating(value) {
  sessionStorage.setItem("value", JSON.stringify(value));
}
