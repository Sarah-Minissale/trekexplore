document.addEventListener("DOMContentLoaded", function () {
  var loginPanel = document.getElementById("login");
  var registrationPanel = document.getElementById("registrazione");
  var showRegistrationButton = document.getElementById("show-registration");
  var showLoginButton = document.getElementById("show-login");
  var passwordButtons = document.getElementsByClassName("password-button");

  function showLogin() {
    registrationPanel.classList.add("is-hidden");
    loginPanel.classList.remove("is-hidden");
    window.location.hash = "login";
  }

  function showRegistration() {
    loginPanel.classList.add("is-hidden");
    registrationPanel.classList.remove("is-hidden");
    window.location.hash = "registrazione";
  }

  if (window.location.hash === "#registrazione") {
    showRegistration();
  } else {
    showLogin();
  }

  showRegistrationButton.addEventListener("click", showRegistration);
  showLoginButton.addEventListener("click", showLogin);

  for (var i = 0; i < passwordButtons.length; i++) {
    passwordButtons[i].addEventListener("click", function () {
      var targetId = this.getAttribute("data-target");
      var passwordInput = document.getElementById(targetId);

      if (passwordInput.type === "password") {
        passwordInput.type = "text";
        this.setAttribute("aria-label", "Nascondi la password");
      } else {
        passwordInput.type = "password";
        this.setAttribute("aria-label", "Mostra la password");
      }
    });
  }

  var loginForm = document.getElementById("login-form");
  var loginMessage = document.getElementById("login-message");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    loginMessage.className = "form-message success-message";
    loginMessage.textContent = "Accesso effettuato! Reindirizzamento alla Home Page...";

    window.setTimeout(function () {
      window.location.href = "../index.php";
    }, 1500);
  });

  var registrationForm = document.getElementById("registration-form");
  var registrationPassword = document.getElementById("registration-password");
  var confirmPassword = document.getElementById("registration-confirm-password");
  var registrationMessage = document.getElementById("registration-message");

  registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (registrationPassword.value !== confirmPassword.value) {
      registrationMessage.className = "form-message error-message";
      registrationMessage.textContent = "Le due password non coincidono.";
      confirmPassword.focus();
      return;
    }

    registrationMessage.className = "form-message success-message";
    registrationMessage.textContent = "Registrazione avvenuta con successo! Reindirizzamento alla Home Page...";

    window.setTimeout(function () {
      window.location.href = "../index.php";
    }, 1500);
  });
});
