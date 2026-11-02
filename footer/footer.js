const bottoneTelefono = document.getElementById("bottone-telefono");
const numeroTelefono = document.getElementById("numero-telefono");
let telefonoVisibile = false;

bottoneTelefono.onclick = function () {
    if (telefonoVisibile === true) {
        numeroTelefono.style.display = "none";
        telefonoVisibile = false;
    } else {
        numeroTelefono.style.display = "block";
        telefonoVisibile = true;
    }
};
