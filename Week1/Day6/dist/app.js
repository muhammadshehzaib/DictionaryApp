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

// Typing animation
function typeWriter(text, elementId, speed) {
  let i = 0;
  const element = document.getElementById(elementId);
  element.innerHTML = "";
  function type() {
    if (i <= text.length) {
      const visibleText = text.substring(0, i);
      const cursor = i === text.length ? "" : "|";
      element.innerHTML = visibleText + cursor;
      i++;
      const cursorSpeed = i === text.length ? 500 : 0;
      setTimeout(type, speed + cursorSpeed);
    } else {
      i = 0;
      setTimeout(type, 1000);
    }
  }
  type();
}
function startTypingEffect() {
  const h1Text = "Learn to code by watching others";
  typeWriter(h1Text, "typed-h1", 40);
}
startTypingEffect();

function validateForm() {
  // Basic validation example
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (!firstName || !lastName || !email || !password) {
    alert("Please fill in all fields.");
    return false;
  }

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  // Password validation (at least 8 characters, one uppercase, one lowercase, one digit)
  var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  if (!passwordRegex.test(password)) {
    alert(
      "Password must be at least 8 characters and contain at least one uppercase letter, one lowercase letter, and one digit."
    );
    return false;
  }

  return true;
}
