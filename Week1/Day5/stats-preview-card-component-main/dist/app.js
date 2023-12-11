document.addEventListener("DOMContentLoaded", function () {
  animateCountUp("countUpCompanies", 0, 10000, 200000, "K+");
  animateCountUp("countUpTemplates", 0, 314, 200000);
  animateCountUp("countUpQueries", 0, 12000, 200000, "M+");
});
function animateCountUp(elementId, start, end, duration, suffix = "") {
  const element = document.getElementById(elementId);
  const increment = (end - start) / (duration / 1000);
  let currentValue = start;
  const intervalId = setInterval(() => {
    currentValue += increment;
    // Format the text with suffix
    let formattedValue = "";
    if (currentValue >= end) {
      if (elementId === "countUpCompanies") {
        formattedValue =
          end >= 1000000
            ? (end / 1000000).toFixed(1) + "M+"
            : (end / 1000).toFixed(1) + "K+";
      } else if (elementId === "countUpQueries") {
        formattedValue =
          end >= 1000000
            ? (end / 1000000).toFixed(1) + "M+"
            : (end / 1000).toFixed(1) + "M+";
      } else {
        formattedValue = Math.floor(currentValue);
      }
      element.textContent = formattedValue;
      clearInterval(intervalId);
    } else {
      formattedValue = suffix
        ? (currentValue / 1000).toFixed(1) + suffix
        : Math.floor(currentValue);
      element.textContent = formattedValue;
    }
  }, 1);
}
