const bottoneMenu = document.getElementById("bottone-menu");
const menu = document.getElementById("menu");
let menuAperto = false;

bottoneMenu.onclick = function () {
    if (menuAperto === true) {
        menu.style.display = "none";
        bottoneMenu.innerHTML = "☰";
        menuAperto = false;
    } else {
        menu.style.display = "block";
        bottoneMenu.innerHTML = "×";
        menuAperto = true;
    }
};
