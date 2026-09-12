/* =========================================
   CHECK LOGIN
========================================= */

const isLoggedIn = localStorage.getItem("docHouseLoggedIn");

if (isLoggedIn !== "true") {
  window.location.href = "../index.html";
}

/* =========================================
   CURRENT USER
========================================= */

const currentUser = localStorage.getItem("docHouseCurrentUser");

if (currentUser) {
  const user = JSON.parse(currentUser);

  const dashboardUserName = document.getElementById("dashboardUserName");

  if (dashboardUserName) {
    dashboardUserName.textContent = user.name;
  }
}

/* =========================================
   GET ELEMENTS
========================================= */

const menuLinks = document.querySelectorAll(".menu-link");

const notificationBtn = document.getElementById("notificationBtn");

const profileBtn = document.getElementById("profileBtn");

/* =========================================
   SIDEBAR MENU
========================================= */

menuLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    const page = link.getAttribute("data-page");

    /*
     * Home button should work normally.
     * Other dashboard menu buttons are demo buttons.
     */

    if (page === "Home") {
      return;
    }

    event.preventDefault();

    /* Remove active */

    menuLinks.forEach(function (item) {
      item.classList.remove("active");
    });

    /* Add active */

    link.classList.add("active");

    console.log("Selected:", page);
  });
});

/* =========================================
   NOTIFICATION
========================================= */

notificationBtn.addEventListener("click", function () {
  alert("You don't have any new notifications.");
});

/* =========================================
   PROFILE
========================================= */

profileBtn.addEventListener("click", function () {
  alert("Admin profile clicked.");
});

/* =========================================
   CHART MENU
========================================= */

const chartMenus = document.querySelectorAll(".chart-menu");

chartMenus.forEach(function (button) {
  button.addEventListener("click", function () {
    alert("Chart options will appear here.");
  });
});

/* =========================================
   LOGOUT FUNCTION
========================================= */

function logout() {

    localStorage.removeItem(
        "docHouseLoggedIn"
    );


    localStorage.removeItem(
        "docHouseCurrentUser"
    );


    window.location.href =
        "../index.html";

}