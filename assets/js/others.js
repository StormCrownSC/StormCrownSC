function applyTheme(theme) {
    document.body.classList.remove("light-theme", "dark-theme");
    document.body.classList.add(theme + "-theme");
}


document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme") || "auto";
    applyTheme(savedTheme);

    for (const optionElement of document.querySelectorAll("#theme option")) {
        optionElement.selected = savedTheme === optionElement.value;
    }
});




button = document.getElementsByClassName("settings")[0];
button.onclick = function(event) {
    elem = document.getElementsByClassName("dropdown-content")[0];
    if (elem.style.display != "block")
        elem.style = "display: block";
    else{
        elem.style = "display: none";
        elem = document.getElementsByClassName("dropdown_fon-content")[0];
        elem.style = "display: none";
    }
};

button = document.getElementsByClassName("fon")[0];
button.onclick = function(event) {
    elem = document.getElementsByClassName("dropdown_fon-content")[0];
    if (elem.style.display != "block"){
        elem.style = "display: block";
    }
    else {
        elem.style = "display: none";
    }
};

button = document.getElementsByClassName("light")[0];
button.onclick = function(event) {
    localStorage.setItem("theme", "light");
    applyTheme("light");
    elem = document.getElementsByClassName("dropdown-content")[0];
    elem.style = "display: none";
    elem = document.getElementsByClassName("dropdown_fon-content")[0];
    elem.style = "display: none";
};

button = document.getElementsByClassName("dark")[0];
button.onclick = function(event) {
    localStorage.setItem("theme", "dark");
    applyTheme("dark");
    elem = document.getElementsByClassName("dropdown-content")[0];
    elem.style = "display: none";
    elem = document.getElementsByClassName("dropdown_fon-content")[0];
    elem.style = "display: none";
};

button = document.getElementsByClassName("login_href")[0];
button.onclick = function(event) {
    elem_main = document.getElementsByTagName("main")[0];
    elem_enter = document.getElementsByClassName("login_block")[0];
    if (elem_main.style["visibility"] == "hidden"){
        elem_enter.style = "visibility: hidden";
        elem_main.style = "visibility: visible";
    }
    else{
        elem_main.style = "visibility: hidden";
        elem_enter.style = "visibility: visible";
    }
};

button = document.getElementsByTagName("main")[0];
button.onclick = function(event) {
    elem = document.getElementsByClassName("dropdown-content")[0];
    elem.style = "display: none";
    elem = document.getElementsByClassName("dropdown_fon-content")[0];
    elem.style = "display: none";
};