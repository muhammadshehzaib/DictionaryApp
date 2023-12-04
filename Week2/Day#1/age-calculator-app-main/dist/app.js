const birthyears = document.getElementById("years");
const birthmonths = document.getElementById("months");
const birthdays = document.getElementById("days");
const arrowsBtn = document.getElementById("arrowBtn");

const yearError = document.getElementById("yearError");
const monthError = document.getElementById("monthError");
const dayError = document.getElementById("dayError");

const getyear = new Date().getFullYear(); // get the current year

// Function to calculate age
const calculateAge = (year, month, day) => {
  let birthDate = new Date(year, month, day); //these dates will be specified by us
  let currentDate = new Date();
  let timeDifference = currentDate - birthDate;
  let seconds = Math.floor(timeDifference / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);
  let remainingDays = days % 365.25;
  let years = Math.floor(days / 365.25);
  let months = Math.floor(remainingDays / 30);
  let remainingDaysInMonth = Math.floor(remainingDays % 30);

  return { years, months, remainingDaysInMonth };
};

// Function to handle input errors
const handleInputErrors = (year, month, day) => {
  yearError.style.visibility = "hidden";
  monthError.style.visibility = "hidden";
  dayError.style.visibility = "hidden";

  if (!year && !month && !day) {
    yearError.style.visibility = "visible";
    monthError.style.visibility = "visible";
    dayError.style.visibility = "visible";
    return true;
  }

  return false;
};

// Function to update age on the page
const updateAgeOnPage = (years, months, remainingDaysInMonth) => {
  document.getElementById("ageYears").innerText = years;
  document.getElementById("ageMonths").innerText = months;
  document.getElementById("ageDays").innerText = remainingDaysInMonth;
};

// Function to handle button click
const handleButtonClick = (e) => {
  e.preventDefault();
  const year = birthyears.value;
  const month = birthmonths.value;
  const day = birthdays.value;

  if (handleInputErrors(year, month - 1, day)) {
    updateAgeOnPage("--", "--", "--");
    return;
  }

  if (
    day > 31 ||
    day < 1 ||
    month > 12 ||
    month < 1 ||
    year.length !== 4 ||
    year > getyear
  ) {
    dayError.style.visibility = day > 31 || day < 1 ? "visible" : "hidden";
    monthError.style.visibility =
      month > 12 || month < 1 ? "visible" : "hidden";
    yearError.style.visibility =
      year.length !== 4 || year > getyear ? "visible" : "hidden";
    updateAgeOnPage("--", "--", "--");
    return;
  }

  const { years, months, remainingDaysInMonth } = calculateAge(
    year,
    month - 1,
    day
  );
  updateAgeOnPage(years, months, remainingDaysInMonth);
};

// Add Event Listener to the Arrow Down Button
arrowsBtn.addEventListener("click", handleButtonClick);
function validateInput(inputElement) {
  // Get the entered value
  let inputValue = inputElement.value;

  // Convert the input value to a number
  let numericValue = parseFloat(inputValue);

  // Check if the numeric value is negative
  if (numericValue < 0 || isNaN(numericValue)) {
    // If negative or NaN, set the input value to an empty string
    inputElement.value = "";
  }
}

//Icons
const sunIcon = document.querySelector(".sun");
const moonIcon = document.querySelector(".moon");

//Theme Vars
const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme:dark)").matches;

//Icon toggling
const iconToggle = () => {
  moonIcon.classList.toggle("display-none");
  sunIcon.classList.toggle("display-none");
};

//Initial Theme Check
const themeCheck = () => {
  if (userTheme === "dark" || (!userTheme && systemTheme)) {
    document.documentElement.classList.add("dark");
    moonIcon.classList.add("display-none");
    return;
  }
  sunIcon.classList.add("display-none");
};

//Manual Theme Switch

const themeSwitch = () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    iconToggle();
    return;
  }
  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
  iconToggle();
};

//call theme switch on clicking buttons
sunIcon.addEventListener("click", () => {
  themeSwitch();
});
moonIcon.addEventListener("click", () => {
  themeSwitch();
});

//invoke theme check on intial load
themeCheck();
