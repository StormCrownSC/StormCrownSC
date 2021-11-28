function applyTheme(theme) {
    document.body.classList.remove("light-theme", "dark-theme");
    document.body.classList.add(theme + "-theme");
}

function applyLogin(name){
    elem = document.getElementsByClassName("login_href")[0];
    elem.innerHTML = name;
}

document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    applyTheme(savedTheme);

    const savedLogin = localStorage.getItem("login");
    applyLogin(savedLogin);

    for (const optionElement of document.querySelectorAll("#theme option")) {
        optionElement.selected = savedTheme === optionElement.value;
    }
});

function setFigure(type_figure){
    localStorage.setItem('figure', type_figure);
    figure_create();
}

function setLogin(login_name){
    elem = document.getElementsByClassName("login_href")[0];
    elem.innerHTML = login_name;
    localStorage.setItem('login', login_name);
}

function main_menu_show(){
    elem = document.getElementsByClassName("dropdown-content")[0];
    elem.style = "display: none";
    elem.innerHTML = "";
    let one = document.createElement('a');
    one.classList = "fon";
    one.innerHTML = "Фон";

    let two = document.createElement('a');
    two.classList = "style-figures";
    two.innerHTML = "Оформление фигур";

    let three = document.createElement('a');
    three.classList = "style-board";
    three.innerHTML = "Оформление доски";

    elem.appendChild(one);
    elem.appendChild(two);
    elem.appendChild(three);
}

button = document.getElementsByClassName("settings")[0];
if (button != undefined) {
    button.onclick = function(event) {
        elem = document.getElementsByClassName("dropdown-content")[0];
        if (elem.style.display != "block")
            elem.style = "display: block";
        else {
            main_menu_show();
        }
    };  
}

button = document.getElementsByClassName("login_href")[0];  
        if (button != undefined) {
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
        }

$('body').click(function (event) {
    button = document.getElementsByClassName("settings")[0];
    if (button != undefined) {
        button.onclick = function(event) {
            elem = document.getElementsByClassName("dropdown-content")[0];
            if (elem.style.display != "block")
                elem.style = "display: block";
            else {
                main_menu_show();
            }
        };  
    }

    button = document.getElementsByClassName("login_href")[0];  
    if (button != undefined) {
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
    }

    button = document.getElementsByTagName("main")[0];
    if (button != undefined) {
        button.onclick = function(event) {
            main_menu_show();
        };
    }

    button = document.getElementsByClassName("fon")[0];
    if (button != undefined) {
        button.onclick = function(event) {
            elem = document.getElementsByClassName("dropdown-content")[0];
            elem.innerHTML = "";
            let fon = document.createElement('a');
            fon.classList = "setting_exit";
            fon.innerHTML = "< Фон";

            let white = document.createElement('a');
            white.classList = "light";
            white.innerHTML = "Светлая";

            let black = document.createElement('a');
            black.classList = "dark";
            black.innerHTML = "Темная";


            elem.appendChild(fon);
            elem.appendChild(white);
            elem.appendChild(black);
        };
    }


    button = document.getElementsByClassName("light")[0];
    if (button != undefined){
        button.onclick = function(event) {
            localStorage.setItem("theme", "light");
            applyTheme("light");
        };
    }

    button = document.getElementsByClassName("dark")[0];
    if (button != undefined){
        button.onclick = function(event) {
            localStorage.setItem("theme", "dark");
            applyTheme("dark");
        };
    }
    

    button = document.getElementsByClassName("setting_exit")[0];
    if (button != undefined){
        button.onclick = function(event) {
            elem = document.getElementsByClassName("dropdown-content")[0];
            elem.innerHTML = "";
            let one = document.createElement('a');
            one.classList = "fon";
            one.innerHTML = "Фон";

            let two = document.createElement('a');
            two.classList = "style-figures";
            two.innerHTML = "Оформление фигур";

            let three = document.createElement('a');
            three.classList = "style-board";
            three.innerHTML = "Оформление доски";

            elem.appendChild(one);
            elem.appendChild(two);
            elem.appendChild(three);
        };
    }

    button = document.getElementsByClassName("style-figures")[0];
    if (button != undefined) {
        button.onclick = function(event) {
            elem = document.getElementsByClassName("dropdown-content")[0];
            elem.innerHTML = "";
            let one = document.createElement('a');
            one.classList = "setting_exit";
            one.innerHTML = "< Оформление фигур";

            let two = document.createElement('a');
            two.classList = "figure_settings";
            two.innerHTML = '<img src="/assets/images/white_knight.png" width="60px">';
            two.style.width = "70px";
            two.style.height = "70px";
            two.style.padding = "30px";

            let three = document.createElement('a');
            three.classList = "figure_settings";
            three.innerHTML = "&#9816;";
            three.style.fontSize = "70px";
            three.style.height = "110px";
            three.style.width = "70px";

            dop_cont = document.createElement('div');
            dop_cont.style.display = "flex";
            dop_cont.style["flex-direction"] = "row;";

            dop_cont.appendChild(two);
            dop_cont.appendChild(three);
            elem.appendChild(one);
            elem.appendChild(dop_cont);
        };
    }

    button = document.getElementsByClassName("figure_settings")[0];
    if (button != undefined) {
        button.onclick = function(event) {
            setFigure("images");
        };
    }

    button = document.getElementsByClassName("figure_settings")[1];
    if (button != undefined) {
        button.onclick = function(event) {
            setFigure("ascii");
        };
    }

    button = document.getElementsByClassName("style-board")[0];
    if (button != undefined) {
        button.onclick = function(event) {
            elem = document.getElementsByClassName("dropdown-content")[0];
            elem.innerHTML = "";
            let one = document.createElement('a');
            one.classList = "setting_exit";
            one.innerHTML = "< Оформление доски";

            let two = document.createElement('a');
            two.classList = "board_settings";
            two.innerHTML = '<img src="/assets/images/maple.thumbnail.jpg">';

            let three = document.createElement('a');
            three.classList = "board_settings";
            three.innerHTML = '<img src="/assets/images/green-plastic.thumbnail.png">';

            dop_cont = document.createElement('div');
            dop_cont.style.display = "flex";
            dop_cont.style["flex-direction"] = "row;";

            dop_cont.appendChild(two);
            dop_cont.appendChild(three);
            elem.appendChild(one);
            elem.appendChild(dop_cont);
        };
    }

    button = document.getElementsByClassName("board_settings")[0];
    if (button != undefined) {
        button.onclick = function(event) {
            elem_white = document.getElementsByClassName("square white");
            elem_dark = document.getElementsByClassName("square black");
            for(let i = 0; i < 32; ++i){
                elem_white[i].style = "background-color: background-color: #F0DFB5;";
                elem_dark[i].style = "background-color: background-color: #B98A63;";
            }
        };
    }

    button = document.getElementsByClassName("board_settings")[1];
    if (button != undefined) {
        button.onclick = function(event) {
            elem_white = document.getElementsByClassName("square white");
            elem_dark = document.getElementsByClassName("square black");
            for(let i = 0; i < 32; ++i){
                elem_white[i].style = "background-color: white;";
                elem_dark[i].style = "background-color: rgb(88, 148, 93);";
            }
        };
    }

    button = document.getElementById("enter");
    if (button != undefined) {
        button.onclick = function(event) {
            elem = document.getElementsByClassName("login_inp")[0];
            setLogin(elem.value);
        }
    }
});