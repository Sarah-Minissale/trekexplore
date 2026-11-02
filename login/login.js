const login = document.getElementById("login");
const registrazione = document.getElementById("registrazione");
const vaiRegistrazione = document.getElementById("vai-registrazione");
const vaiLogin = document.getElementById("vai-login");

function mostraLogin() {
    login.style.display = "block";
    registrazione.style.display = "none";
    window.location.hash = "login";
}

function mostraRegistrazione() {
    login.style.display = "none";
    registrazione.style.display = "block";
    window.location.hash = "registrazione";
}

vaiRegistrazione.onclick = mostraRegistrazione;
vaiLogin.onclick = mostraLogin;

if (window.location.hash === "#registrazione") {
    mostraRegistrazione();
}

const bottonePasswordLogin = document.getElementById("mostra-password-login");
const passwordLogin = document.getElementById("password-login");

bottonePasswordLogin.onclick = function () {
    if (passwordLogin.type === "password") {
        passwordLogin.type = "text";
        bottonePasswordLogin.innerHTML = "Nascondi";
    } else {
        passwordLogin.type = "password";
        bottonePasswordLogin.innerHTML = "Mostra";
    }
};

const bottonePasswordRegistrazione = document.getElementById(
    "mostra-password-registrazione",
);
const passwordRegistrazione = document.getElementById("password-registrazione");

bottonePasswordRegistrazione.onclick = function () {
    if (passwordRegistrazione.type === "password") {
        passwordRegistrazione.type = "text";
        bottonePasswordRegistrazione.innerHTML = "Nascondi";
    } else {
        passwordRegistrazione.type = "password";
        bottonePasswordRegistrazione.innerHTML = "Mostra";
    }
};

const moduloLogin = document.getElementById("modulo-login");
const messaggioLogin = document.getElementById("messaggio-login");

moduloLogin.onsubmit = function (evento) {
    evento.preventDefault();
    messaggioLogin.style.color = "#39735d";
    messaggioLogin.innerHTML = "Accesso effettuato!";

    setTimeout(function () {
        window.location.href = "../index.php";
    }, 1000);
};

const moduloRegistrazione = document.getElementById("modulo-registrazione");
const confermaPassword = document.getElementById("conferma-password");
const messaggioRegistrazione = document.getElementById(
    "messaggio-registrazione",
);

moduloRegistrazione.onsubmit = function (evento) {
    evento.preventDefault();

    if (passwordRegistrazione.value !== confermaPassword.value) {
        messaggioRegistrazione.innerHTML = "Le password non coincidono.";
    } else {
        messaggioRegistrazione.style.color = "#39735d";
        messaggioRegistrazione.innerHTML = "Registrazione completata!";

        setTimeout(function () {
            window.location.href = "../index.php";
        }, 1000);
    }
};
