var book_time = {'0': 1/4, '1': 1/2, '2': 3/4, '3': 1, '4': 2, '5': 3, '6': 4, '7': 5, '8': 6, '9': 7, '10': 8, '11': 9, '12': 10, '13': 11, '14': 12, '15': 13, 
'16': 14, '17': 15, '18': 16, '19': 17, '20': 18, '21': 19, '22': 20, '23': 25, '24': 30, '25': 35, '26': 40, '27': 45, '28': 60, '29': 90, '30': 120, '31': 150, 
'32': 180}; 

var book_extra_time = {'0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, '11': 11, '12': 12, '13': 13, '14': 14, 
'15': 15, '16': 16, '17': 17, '18': 18, '19': 19, '20': 20, '21': 25, '22': 30, '23': 35, '24': 40, '25': 45, '26': 60, '27': 90, '28': 120, '29': 150, '30': 180}; 

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

function setColor(color){
    let answer;
    if (color == "Случайный"){
        if (Math.floor(Math.random() * 2) == 0)
            answer = "white";
        else 
            answer = "black";
    }

    else if (color == "Белый")
        answer = "white";
    else 
        answer = "black";
    localStorage.setItem('my_color', answer);
}

function setTimer(time, extra_time){
    localStorage.setItem('time', time);
    localStorage.setItem('extra_time', extra_time);
}

function show_time(time, type){
    let elem = document.getElementsByClassName("time_for_game")[type];
    let item = document.getElementsByClassName("range")[type];
    
    let step;
    if (type == 0){
        step = book_time[time];
    }
    if (type == 1){
        step = book_extra_time[time];
    }
    time = parseInt(time);
    item.value = time;
    elem.innerHTML = step;
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
        elem_game = document.getElementsByClassName("start_game_block")[0];
        if (elem_enter.style["visibility"] == "hidden" || elem_enter.style["visibility"] == ""){
            elem_main.style = "visibility: hidden;";
            if (elem_game != undefined)
                elem_game.style = "visibility: hidden;";
            elem_enter.style = "visibility: visible;";
        }
        else if (elem_enter.style["visibility"] == "visible"){
            elem_main.style = "visibility: visible;";
            if (elem_game != undefined)
                elem_game.style = "visibility: hidden;";
            elem_enter.style = "visibility: hidden";
        }
    };
}

button = document.getElementsByClassName("main_href")[0];
if (button != undefined) {
    button.onclick = function(event) {
        elem_main = document.getElementsByTagName("main")[0];
        elem_enter = document.getElementsByClassName("start_game_block")[0];

        elem_main.style = "visibility: hidden";
        elem_enter.style = "visibility: visible";
    
    }
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
            elem_game = document.getElementsByClassName("start_game_block")[0];
            if (elem_enter.style["visibility"] == "hidden" || elem_enter.style["visibility"] == ""){
                elem_main.style = "visibility: hidden;";
                if (elem_game != undefined)
                    elem_game.style = "visibility: hidden;";
                elem_enter.style = "visibility: visible;";
            }
            else if (elem_enter.style["visibility"] == "visible"){
                elem_main.style = "visibility: visible;";
                if (elem_game != undefined)
                    elem_game.style = "visibility: hidden;";
                elem_enter.style = "visibility: hidden";
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

    button = document.getElementsByClassName("main_href")[0];
    if (button != undefined) {
        button.onclick = function(event) {
            elem_main = document.getElementsByTagName("main")[0];
            elem_game = document.getElementsByClassName("start_game_block")[0];

            elem_main.style = "visibility: hidden";
            elem_game.style = "visibility: visible";
        
        }
    }

    button = document.getElementsByClassName("start_game_block")[0];
    if (button != undefined){

        button = document.getElementsByClassName("close")[0];
        if (button != undefined) {
            button.onclick = function(event) {
                elem_main = document.getElementsByTagName("main")[0];
                elem_game = document.getElementsByClassName("start_game_block")[0];

                elem_main.style = "visibility: visible";
                elem_game.style = "visibility: hidden";
            
            }
        }
    
        document.getElementsByClassName("time_control")[0].addEventListener('change', function (e) {
            close_elem = document.getElementsByClassName("close")[0];
            extra_menu = document.getElementsByClassName("extra_time_menu")[0];
            if (e.target.value == "Отсутствует"){
                extra_menu.style.display = "none";
            }
                
            else if (e.target.value = "По часам"){
                extra_menu.style.display = "inline";
            }
        })

        button = document.getElementsByClassName("start_game_call")[0];
        if (button != undefined) {
            button.onclick = function(event) {
                let elem = document.getElementsByClassName("color_control")[0]
                let color = elem.options[elem.selectedIndex].text;
                setColor(color);
                let type_time_temp = document.getElementsByClassName("time_control")[0];
                let type_time = type_time_temp.options[type_time_temp.selectedIndex].text;

                let time = 0, extra_time = 0;
                if (type_time != "Отсутствует") {
                    let time_elem = document.getElementsByClassName("range")[0];
                    let extra_time_elem = document.getElementsByClassName("range")[1];
                    time = book_time[time_elem.value];
                    extra_time = book_extra_time[extra_time_elem.value];
                }
                setTimer(time, extra_time);
                window.location.href = 'chess.html';
            }
        }
    }
});