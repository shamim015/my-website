/* =========================================
   DOC HOUSE AUTHENTICATION
========================================= */

/* =========================================
   ELEMENTS
========================================= */

const signInBox = document.getElementById("signInBox");

const signUpBox = document.getElementById("signUpBox");

const showSignUp = document.getElementById("showSignUp");

const showSignIn = document.getElementById("showSignIn");

const signInForm = document.getElementById("signInForm");

const signUpForm = document.getElementById("signUpForm");

const signInMessage = document.getElementById("signInMessage");

const signUpMessage = document.getElementById("signUpMessage");

/* =========================================
   SHOW SIGN UP
========================================= */

showSignUp.addEventListener("click", function () {
  signInBox.classList.add("hidden");

  signUpBox.classList.remove("hidden");

  clearMessages();
});

/* =========================================
   SHOW SIGN IN
========================================= */

showSignIn.addEventListener("click", function () {
  signUpBox.classList.add("hidden");

  signInBox.classList.remove("hidden");

  clearMessages();
});

/* =========================================
   SIGN UP
========================================= */

signUpForm.addEventListener("submit", function (event) {
  event.preventDefault();

  /* Get values */

  const name = document.getElementById("signupName").value.trim();

  const email = document
    .getElementById("signupEmail")
    .value.trim()
    .toLowerCase();

  const password = document.getElementById("signupPassword").value;

  const confirmPassword = document.getElementById("confirmPassword").value;

  /* =================================
           VALIDATION
        ================================= */

  if (password.length < 6) {
    showMessage(
      signUpMessage,
      "Password must be at least 6 characters.",
      "error",
    );

    return;
  }

  if (password !== confirmPassword) {
    showMessage(signUpMessage, "Passwords do not match.", "error");

    return;
  }

  /* =================================
           CHECK EXISTING ACCOUNT
        ================================= */

  const existingUser = localStorage.getItem("docHouseUser");

  if (existingUser) {
    const user = JSON.parse(existingUser);

    if (user.email === email) {
      showMessage(
        signUpMessage,
        "An account with this email already exists.",
        "error",
      );

      return;
    }
  }

  /* =================================
           CREATE USER
        ================================= */

  const newUser = {
    name: name,

    email: email,

    password: password,
  };

  localStorage.setItem("docHouseUser", JSON.stringify(newUser));

  /* =================================
           LOGIN STATUS
        ================================= */

  localStorage.setItem("docHouseLoggedIn", "true");

  localStorage.setItem(
    "docHouseCurrentUser",
    JSON.stringify({
      name: name,
      email: email,
    }),
  );

  /* =================================
           SUCCESS
        ================================= */

  showMessage(
    signUpMessage,
    "Account created successfully! Redirecting...",
    "success",
  );

  /*
   * Redirect to Dashboard
   */

  setTimeout(function () {
    window.location.href = "Dashboard/dashboard.html";
  }, 800);
});

/* =========================================
   SIGN IN
========================================= */

signInForm.addEventListener("submit", function (event) {
  event.preventDefault();

  /* Get values */

  const email = document
    .getElementById("loginEmail")
    .value.trim()
    .toLowerCase();

  const password = document.getElementById("loginPassword").value;

  /* =================================
           GET USER
        ================================= */

  const savedUser = localStorage.getItem("docHouseUser");

  if (!savedUser) {
    showMessage(
      signInMessage,
      "No account found. Please create an account first.",
      "error",
    );

    return;
  }

  const user = JSON.parse(savedUser);

  /* =================================
           CHECK LOGIN
        ================================= */

  if (email !== user.email || password !== user.password) {
    showMessage(signInMessage, "Invalid email or password.", "error");

    return;
  }

  /* =================================
           LOGIN SUCCESS
        ================================= */

  localStorage.setItem("docHouseLoggedIn", "true");

  localStorage.setItem(
    "docHouseCurrentUser",
    JSON.stringify({
      name: user.name,
      email: user.email,
    }),
  );

  /* =================================
           REDIRECT
        ================================= */

  window.location.href = "Dashboard/dashboard.html";
});

/* =========================================
   FORGOT PASSWORD
========================================= */

const forgotPassword = document.getElementById("forgotPassword");

forgotPassword.addEventListener("click", function (event) {
  event.preventDefault();

  alert("Password reset system will be added later.");
});

/* =========================================
   MESSAGE FUNCTION
========================================= */

function showMessage(element, message, type) {
  element.textContent = message;

  element.className = "message " + type;
}

/* =========================================
   CLEAR MESSAGE
========================================= */

function clearMessages() {
  signInMessage.textContent = "";

  signUpMessage.textContent = "";

  signInMessage.className = "message";

  signUpMessage.className = "message";
}
