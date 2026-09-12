/* =========================================
   GET HTML ELEMENTS
========================================= */

const loginForm = document.getElementById("loginForm");

const emailInput = document.getElementById("email");

const passwordInput = document.getElementById("password");

const emailError = document.getElementById("emailError");

const passwordError = document.getElementById("passwordError");

const togglePassword = document.getElementById("togglePassword");

const createAccountButton = document.getElementById("createAccountButton");

const buttonText = document.getElementById("buttonText");

const loading = document.getElementById("loading");

const successMessage = document.getElementById("successMessage");

const forgotPassword = document.getElementById("forgotPassword");

const signUpLink = document.getElementById("signUpLink");

/* =========================================
   EMAIL VALIDATION
========================================= */

function validateEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return pattern.test(email);
}

/* =========================================
   PASSWORD VALIDATION
========================================= */

function validatePassword(password) {
  return password.length >= 6;
}

/* =========================================
   SHOW / HIDE PASSWORD
========================================= */

togglePassword.addEventListener("click", function () {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";

    togglePassword.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';

    togglePassword.setAttribute("aria-label", "Hide password");
  } else {
    passwordInput.type = "password";

    togglePassword.innerHTML = '<i class="fa-solid fa-eye"></i>';

    togglePassword.setAttribute("aria-label", "Show password");
  }
});

/* =========================================
   CLEAR EMAIL ERROR
========================================= */

emailInput.addEventListener("input", function () {
  emailError.textContent = "";

  successMessage.style.display = "none";
});

/* =========================================
   CLEAR PASSWORD ERROR
========================================= */

passwordInput.addEventListener("input", function () {
  passwordError.textContent = "";

  successMessage.style.display = "none";
});

/* =========================================
   LOGIN / CREATE ACCOUNT FORM
========================================= */

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  /* Clear previous */

  emailError.textContent = "";

  passwordError.textContent = "";

  successMessage.style.display = "none";

  /* Get values */

  const email = emailInput.value.trim();

  const password = passwordInput.value.trim();

  let valid = true;

  /* =====================================
           EMAIL CHECK
        ====================================== */

  if (email === "") {
    emailError.textContent = "Please enter your email.";

    valid = false;
  } else if (!validateEmail(email)) {
    emailError.textContent = "Please enter a valid email.";

    valid = false;
  }

  /* =====================================
           PASSWORD CHECK
        ====================================== */

  if (password === "") {
    passwordError.textContent = "Please enter your password.";

    valid = false;
  } else if (!validatePassword(password)) {
    passwordError.textContent = "Password must be at least 6 characters.";

    valid = false;
  }

  /* =====================================
           STOP
        ====================================== */

  if (!valid) {
    return;
  }

  /* =====================================
           LOADING
        ====================================== */

  createAccountButton.disabled = true;

  buttonText.style.display = "none";

  loading.style.display = "inline";

  /* =====================================
           DEMO PROCESS
        ====================================== */

  setTimeout(function () {
    createAccountButton.disabled = false;

    buttonText.style.display = "inline";

    loading.style.display = "none";

    successMessage.textContent = "Account created successfully!";

    successMessage.style.display = "block";

    /* Clear form */

    emailInput.value = "";

    passwordInput.value = "";
  }, 1500);
});

/* =========================================
   FORGOT PASSWORD
========================================= */

forgotPassword.addEventListener("click", function (event) {
  event.preventDefault();

  const email = emailInput.value.trim();

  if (email === "") {
    alert("Please enter your email address first.");

    emailInput.focus();

    return;
  }

  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");

    emailInput.focus();

    return;
  }

  alert("Password reset link will be sent to " + email);
});

/* =========================================
   SIGN UP
========================================= */

signUpLink.addEventListener("click", function (event) {
  event.preventDefault();

  alert("Sign Up page will be opened here.");
});
