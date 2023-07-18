// TOGGLE
const toggle = document.querySelector(".slider");

// CONTAINER
const containerDark = document.querySelector(".container");

// DASHBOARD HEADER
const dashboardHeaderDark = document.querySelector(".dashboard-header");

// SOCIAL MEDIA CARDS
const socialCardDark = document.querySelectorAll(".social-media-card");
const socialNameDark = document.querySelectorAll(".social-media-name");
const followersAmountDark = document.querySelectorAll(".followers-amount");
const followersDark = document.querySelectorAll(".followers");

// OVERVIEW CARDS
const overviewDark = document.querySelector(".overview");
const overviewCardDark = document.querySelectorAll(".overview-card");
const viewsLikesDark = document.querySelectorAll(".views-likes");
const viewsLikesAmountDark = document.querySelectorAll(".views-likes-amount");

// TOGGLE FUNCTION
toggle.addEventListener("click", () => {
  containerDark.classList.toggle("active");
  dashboardHeaderDark.classList.toggle("active");
  overviewDark.classList.toggle("active");
});

// TOGGLE FUNCTION FOR SOCIAL MEDIA CARDS
for (let i = 0; i < socialCardDark.length; i++) {
  toggle.addEventListener("click", function () {
    socialCardDark[i].classList.toggle("active");
  });
}

for (let i = 0; i < socialNameDark.length; i++) {
  toggle.addEventListener("click", function () {
    socialNameDark[i].classList.toggle("active");
  });
}

for (let i = 0; i < followersAmountDark.length; i++) {
  toggle.addEventListener("click", function () {
    followersAmountDark[i].classList.toggle("active");
  });
}

for (let i = 0; i < followersDark.length; i++) {
  toggle.addEventListener("click", function () {
    followersDark[i].classList.toggle("active");
  });
}

// TOGGLE FUNCTION FOR OVERVIEW CARDS
for (let i = 0; i < overviewCardDark.length; i++) {
  toggle.addEventListener("click", function () {
    overviewCardDark[i].classList.toggle("active");
  });
}

for (let i = 0; i < viewsLikesDark.length; i++) {
  toggle.addEventListener("click", function () {
    viewsLikesDark[i].classList.toggle("active");
  });
}

for (let i = 0; i < viewsLikesAmountDark.length; i++) {
  toggle.addEventListener("click", function () {
    viewsLikesAmountDark[i].classList.toggle("active");
  });
}
