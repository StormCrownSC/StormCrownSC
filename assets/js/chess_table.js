var map = new Array(64), count_stroke = 0, colorStroke = "white";
map = ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P','R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']
const list_stroke = [];
list_stroke[count_stroke] = Object.assign({}, map);

$(function () {
    table_create();
    setDroppable();
    //setInterval('showFiguresPHP()', 3000)
});

function setDraggable() {
    if (list_stroke.length - 1 == count_stroke) {
        $('.figure-white').draggable();
        $('.figure-black').draggable();
        if (colorStroke == "white") {
            $('.figure-white').draggable('enable');
            $('.figure-black').draggable('disable');
        }
        else {
            $('.figure-white').draggable('disable');
            $('.figure-black').draggable('enable');
        }
    }
    else {
        $('.figure-white').draggable('disable');
        $('.figure-black').draggable('disable');
    }
}

function setDroppable() {
    $('.square').droppable({
        drop: function (event, ui) {
            let fromPoly = ui.draggable.attr('id');
            let toPoly = this.id;
            moveFigure(fromPoly, toPoly);
        }

    })
}

// Движение фигур

function moveFigure(fromPoly, toPoly){
    let poly = document.getElementById(fromPoly);
    let newPoly = document.getElementById(toPoly);
    let elem = poly.innerHTML.replace(fromPoly, toPoly).replace(/position: relative; [\w\s-;: ]+/, 'position: relative;');
    console.log(poly.innerHTML);
    console.log(elem);
    let fig = /\/([\w]+).png/.exec(elem)[0].replace("/", "").replace(".png", "");
    let color = getColor(poly);
    fig = /_[a-zA-Z]+/.exec(fig)[0].replace("_", "");
    if (checkStroke(fig, color, fromPoly, toPoly) && color == colorStroke) {
        poly.innerHTML = "";
        newPoly.innerHTML = elem;
        map[toPoly] = map[fromPoly];
        map[fromPoly] = '0';
        count_stroke += 1;
        list_stroke[count_stroke] = Object.assign({}, map);
        if (colorStroke == "white")
            colorStroke = "black";
        else if (colorStroke == "black")
            colorStroke = "white";
        setDraggable();
    }
    else {
        elem = elem.replace(toPoly, fromPoly);
        poly.innerHTML = elem;
        setDraggable();
    }
}

function checkStroke(fig, color, fromPoly, toPoly){
    switch (fig){
        case "pawn": return movePawn(color, fromPoly, toPoly);
        case "knight": return moveKnight(color, fromPoly, toPoly);
        case "bishop": return moveBishop(color, fromPoly, toPoly);
        case "rock": return moveRook(color, fromPoly, toPoly);
        case "queen": return moveQueen(color, fromPoly, toPoly);
        case "king": return moveKing(color, fromPoly, toPoly);
    }
}

function movePawn(color, fromPoly, toPoly){
    let newPoly = document.getElementById(toPoly);
    let newColor = getColor(newPoly);
    if (newColor == "") {
        if (((fromPoly >= 48 && fromPoly <= 55 && color == "white") || (fromPoly >= 8 && fromPoly <= 15 && color == "black")) && (Math.abs(fromPoly - toPoly)) / 8 == 2 && newColor != color && getFreeLines(fromPoly, toPoly, 2))
            return true;
        else if ((Math.abs(fromPoly - toPoly)) / 8 == 1)
            return true;
        else
            return false;
    }
    else{
        if (Math.round((Math.abs(fromPoly - toPoly)) / 8) == 1 && (Math.abs(fromPoly - toPoly) == 7 || Math.abs(fromPoly - toPoly) == 9) && color != newColor && Math.abs(getRows(toPoly) - getRows(fromPoly)) == 1)
            return true;
        else
            return false;
    }
}

function moveKnight(color, fromPoly, toPoly){
    let newPoly = document.getElementById(toPoly);
    let newColor = getColor(newPoly);
    if ((Math.abs(fromPoly - toPoly) == 17 || Math.abs(fromPoly - toPoly) == 15) && color != newColor && Math.abs(getRows(toPoly) - getRows(fromPoly)) == 2)
        return true;
    else if ((Math.abs(fromPoly - toPoly) == 6 || Math.abs(fromPoly - toPoly) == 10) && color != newColor && Math.abs(getRows(toPoly) - getRows(fromPoly)) == 1)
        return true;
    else
        return false;

}

function moveBishop(color, fromPoly, toPoly){
    let newPoly = document.getElementById(toPoly);
    let newColor = getColor(newPoly);
    if (Math.abs(fromPoly - toPoly) % 7 == 0 && color != newColor && getFreeLines(fromPoly, toPoly, 3) && Math.abs(fromPoly - toPoly) / 7 == Math.abs(getRows(toPoly) - getRows(fromPoly)))
        return true;
    else if (Math.abs(fromPoly - toPoly) % 9 == 0 && color != newColor && getFreeLines(fromPoly, toPoly, 4) && Math.abs(fromPoly - toPoly) / 9 == Math.abs(getRows(toPoly) - getRows(fromPoly)))
        return true;
    else
        return false;
}

function moveRook(color, fromPoly, toPoly){
    let newPoly = document.getElementById(toPoly);
    let newColor = getColor(newPoly);
    if (Math.abs(fromPoly - toPoly) % 8 == 0 && color != newColor && getFreeLines(fromPoly, toPoly, 2))
        return true;
    else if (color != newColor && Math.abs(getRows(toPoly) - getRows(fromPoly)) == 0 && getFreeLines(fromPoly, toPoly, 1))
        return true;
    else
        return false;

}

function moveQueen(color, fromPoly, toPoly){
    let newPoly = document.getElementById(toPoly);
    let newColor = getColor(newPoly);
    if (color != newColor && Math.abs(getRows(toPoly) - getRows(fromPoly)) == 0 && getFreeLines(fromPoly, toPoly, 1))
        return true;
    else if (Math.abs(fromPoly - toPoly) % 8 == 0 && color != newColor && getFreeLines(fromPoly, toPoly, 2))
        return true;
    else if (Math.abs(fromPoly - toPoly) % 7 == 0 && color != newColor && getFreeLines(fromPoly, toPoly, 3) && Math.abs(fromPoly - toPoly) / 7 == Math.abs(getRows(toPoly) - getRows(fromPoly)))
        return true;
    else if (Math.abs(fromPoly - toPoly) % 9 == 0 && color != newColor && getFreeLines(fromPoly, toPoly, 4) && Math.abs(fromPoly - toPoly) / 9 == Math.abs(getRows(toPoly) - getRows(fromPoly)))
        return true;
    else
        return false;
}

function moveKing(color, fromPoly, toPoly){
    let newPoly = document.getElementById(toPoly);
    let newColor = getColor(newPoly);
    if (color != newColor && Math.abs(getRows(toPoly) - getRows(fromPoly)) == 1 && Math.abs(toPoly - fromPoly) == 8)
        return true;
    if (color != newColor && Math.abs(getRows(toPoly) - getRows(fromPoly)) == 0 && Math.abs(toPoly - fromPoly) == 1)
        return true;
    else if (Math.abs(fromPoly - toPoly) / 8 == 1 && color != newColor)
        return true;
    else if (Math.abs(fromPoly - toPoly) / 7 == 1 && color != newColor && Math.abs(fromPoly - toPoly) / 7 == Math.abs(getRows(toPoly) - getRows(fromPoly)))
        return true;
    else if (Math.abs(fromPoly - toPoly) / 9 == 1 && color != newColor && Math.abs(fromPoly - toPoly) / 9 == Math.abs(getRows(toPoly) - getRows(fromPoly)))
        return true;
    else
        return false;
}

// Создание доски

function table_create(){
    let table = document.createElement("table");
    table.className = "table_chess";
    let container = document.getElementsByClassName("container_chess")[0];
    for (let i = 0; i < 8; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < 8; j++) {
            let td = document.createElement('td');
            if (i%2 == j%2) {
                td.className = "square white";
                td.id = String(i * 8 + j);
                td.innerHTML = "";
            }
            else {
                td.className = "square black";
                td.id = String(i * 8 + j);
                td.innerHTML = "";
            }
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    container.appendChild(table);
    figure_create();
}

function figure_create() {
    let tds = document.getElementsByTagName("td");
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            tds[i * 8 + j].innerHTML = getFigures(map[i * 8 + j], i * 8 + j)
        }
    }
    setDraggable();
}

function getFigures(figure, cord){
    switch (figure){
        case 'k' : return "<div class='figure-black' id='$cord'><img src='../../assets/images/black_king.png' width='60px' height='60px'></div>".replace('$cord', cord);
        case 'q' : return "<div class='figure-black' id='$cord'><img src='../../assets/images/black_queen.png' width='60px' height='60px'></div>".replace('$cord', cord);
        case 'r' : return "<div class='figure-black' id='$cord'><img src='../../assets/images/black_rock.png' width='60px' height='60px'></div>".replace('$cord', cord);
        case 'n' : return "<div class='figure-black' id='$cord'><img src='../../assets/images/black_knight.png' width='60px' height='60px'></div>".replace('$cord', cord);
        case 'b' : return "<div class='figure-black' id='$cord'><img src='../../assets/images/black_bishop.png' width='60px' height='60px'></div>".replace('$cord', cord);
        case 'p' : return "<div class='figure-black' id='$cord'><img src='../../assets/images/black_pawn.png' width='60px' height='60px'></div>".replace('$cord', cord);

        case 'K' : return "<div class='figure-white' id='$cord'><img src='../../assets/images/white_king.png' width='60px' height='60px'></div>".replace('$cord', cord);
        case 'Q' : return "<div class='figure-white' id='$cord'><img src='../../assets/images/white_queen.png' width='60px' height='60px'></div>".replace('$cord', cord);
        case 'R' : return "<div class='figure-white' id='$cord'><img src='../../assets/images/white_rock.png' width='60px' height='60px'></div>".replace('$cord', cord);
        case 'N' : return "<div class='figure-white' id='$cord'><img src='../../assets/images/white_knight.png' width='60px' height='60px'></div>".replace('$cord', cord);
        case 'B' : return "<div class='figure-white' id='$cord'><img src='../../assets/images/white_bishop.png' width='60px' height='60px'></div>".replace('$cord', cord);
        case 'P' : return "<div class='figure-white' id='$cord'><img src='../../assets/images/white_pawn.png' width='60px' height='60px'></div>".replace('$cord', cord);
        case '0' : return "";
    }
}

// Служебные

function stockfish_move() {
    var stockfish = new Worker('/stockfish.js-master/stockfish.js');
    stockfish.postMessage('go depth 15');
    stockfish.onmessage = function(event) {
        console.log(event.data);
    };
}

function generationFen(board){
    let fen = "", RANK_SEPARATOR = "/";
    for (let i = 0; i < 8; i++) {
        let empty = 0;
        let rankFen = "";
        for (let j = 0; j < 8; j++) {
            if(board[i * 8 + j] == 0) {
                empty++;
            }
            else {
                if (empty != 0)
                    rankFen += empty;
                rankFen += board[i * 8 + j];
                empty = 0;
            }
        }
        if (empty != 0) rankFen += empty;
        fen += rankFen;
        if (!(i == 7))
            fen += RANK_SEPARATOR;
        else {
            fen += " ";
        }
    }
    return fen;
}

function back_stroke(){
    if (count_stroke > 0) {
        count_stroke -= 1;
        $('.figure-white').draggable('disable');
        $('.figure-black').draggable('disable');
        map = transformToMap(count_stroke);
        figure_create();
    }
}

function next_stroke(){
    if (count_stroke < list_stroke.length - 1) {
        count_stroke += 1;
        map = transformToMap(count_stroke);
        figure_create();
        setDraggable();
    }
}

function fullBack_stroke(){
    count_stroke = 0;
    $('.figure-white').draggable('disable');
    $('.figure-black').draggable('disable');
    map = transformToMap(count_stroke);
    figure_create();
}

function fullNext_stroke(){
    count_stroke = list_stroke.length - 1;
    map = transformToMap(count_stroke);
    figure_create();
    setDraggable();
}

function reverse(){
    map = map.reverse();
    figure_create();
}

function transformToMap(count) {
    let temp = [];
    for (let [key, value] of Object.entries(list_stroke[count])) {
        temp.push(value);
    }
    return temp;
}

function showFiguresPHP() {
    console.log(map);
}

function getColor(elem){
    try {
        let fig = /\/([\w]+).png/.exec(elem.innerHTML)[0].replace("/", "").replace(".png", "");
        return /[a-zA-Z]+_/.exec(fig)[0].replace("_", "");
    }
    catch (error){
        return "";
    }
}

function getRows(number){
    if (number < 8)
        return 8;
    else if (number < 16)
        return 7;
    else if (number < 24)
        return 6;
    else if (number < 32)
        return 5;
    else if (number < 40)
        return 4;
    else if (number < 48)
        return 3;
    else if (number < 56)
        return 2;
    else
        return 1;

}

function getFreeLines(fromPoly, toPoly, type){
    if (parseInt(fromPoly) > parseInt(toPoly)) {
        let tmp = fromPoly;
        fromPoly = toPoly;
        toPoly = tmp;
    }
    if (type == 1){
        for (let i = parseInt(fromPoly) + 1; i < parseInt(toPoly); ++i){
            let newPoly = document.getElementById(i);
            let newColor = getColor(newPoly);
            if (newColor != "")
                return false;
        }
        return true;
    }
    else if (type == 2){
        for (let i = parseInt(fromPoly) + 8; i < parseInt(toPoly); i += 8){
            let newPoly = document.getElementById(i);
            let newColor = getColor(newPoly);
            if (newColor != "")
                return false;
        }
        return true;
    }
    else if (type == 3){
        for (let i = parseInt(fromPoly) + 7; i < parseInt(toPoly); i += 7){
            let newPoly = document.getElementById(i);
            let newColor = getColor(newPoly);
            if (newColor != "")
                return false;
        }
        return true;
    }
    else if (type == 4){
        for (let i = parseInt(fromPoly) + 9; i < parseInt(toPoly); i += 9){
            let newPoly = document.getElementById(i);
            let newColor = getColor(newPoly);
            if (newColor != "")
                return false;
        }
        return true;
    }
}