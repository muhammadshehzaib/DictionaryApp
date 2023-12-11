const notificationArray = [
  {
    image: "./images/avatar-mark-webber.webp",
    name: "Mark Webber",
    reaction: "reacted to your recent post",
    message: "My first tournament today!",
    boldtext: "",
    comment: "",
    time: "1m ago",
    image_2: "",
    comment: "",
    unread: true,
  },
  {
    image: "./images/avatar-angela-gray.webp",
    name: "Angela Gray",
    reaction: "followed you",
    message: "",
    boldtext: "",
    comment: "",
    time: "5m ago",
    image_2: "",
    comment: "",
    unread: true,
  },
  {
    image: "./images/avatar-jacob-thompson.webp",
    name: "Jacob Thompson",
    reaction: "has joined your group",
    message: "",
    boldtext: "Chess Club",
    comment: "",
    time: "1 day ago",
    image_2: "",
    comment: "",
    unread: true,
  },
  {
    image: "./images/avatar-rizky-hasanuddin.webp",
    name: "Rizky Hasanuddin",
    reaction: "sent you a private message",
    message: "",
    boldtext: "",
    comment: "",
    time: "5 days ago",
    image_2: "",
    comment:
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    unread: false,
  },
  {
    image: "./images/avatar-kimberly-smith.webp",
    name: "Kimberly Smith",
    reaction: "commented on your picture",
    message: "",
    boldtext: "",
    comment: "",
    time: "5 days ago",
    image_2: "",
    comment: "",
    unread: false,
  },
  {
    image: "./images/avatar-nathan-peterson.webp",
    name: "Nathan Peterson",
    reaction: "reacted to your recent post",
    message: " 5 end-game strategies to increase your win rate",
    boldtext: "",
    comment: "",
    time: "2 weeks ago",
    image_2: "",
    comment: "",
    unread: false,
  },
  {
    image: "./images/avatar-anna-kim.webp",
    name: "Anna Kim",
    reaction: "left the group",
    message: "",
    boldtext: "Chess Club",
    comment: "",
    time: "2 weeks ago",
    image_2: "",
    comment: "",
    unread: false,
  },
];
var html = "";
notificationArray.map((value) => {
  if (value.unread === true) {
    html += `<li class="flex p-3 rounded-xl mt-5 bg-[#F6FAFD] remove_notification">`;
  } else {
    html += `<li class="flex p-3 rounded-xl mt-5 ">`;
  }
  html += `
  <img
    src="${value.image}"
    alt=""
    srcset=""
    class="h-full"
  />
  <div class="pl-3 font-semibold text-[#59616D]">
    <span class="text-lg font-bold text-black"
      >${value.name} </span
    >
    
    ${value.reaction}
        
    <span class="text-[#606676] font-bold"
    >${value.message} 
  </span>
  
  <span class="text-[#08276F] font-bold">${value.boldtext}</span>`;
  if (value.unread === true) {
    html += ` 
      <span class="active_dot">
        <i class="fa-solid fa-circle" style="color: #d8182b;"></i>
      </span>
      `;
  }
  `; 
    <span class="text-[#959CA8] font-semibold"
      ><br />
      ${value.time}</span
    >`;
  if (value.comment) {
    html += `
    <section class="text-[#626B74] border-2 rounded-lg px-5 py-4 mt-3">
      ${value.comment}
    </section>`;
  }
  html += `
  </div>
</li>`;
  let notification_bar = document.getElementById("notificationbar");
  notification_bar.innerHTML = html;
});

document.getElementById("markread").addEventListener("click", function (e) {
  e.preventDefault();
  var elements = document.getElementsByClassName("remove_notification");
  var active_dot = document.getElementsByClassName("active_dot");
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.remove("bg-[#F6FAFD]");
  }
  for (var j = 0; j < active_dot.length; j++) {
    active_dot[j].innerHTML = "";
  }
  var active_dot = (document.getElementById("notification").innerHTML = "0");
});

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
