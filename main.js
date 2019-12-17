let sign = "X";
let disp = document.getElementById("play");

function changeSign() {
    if(sign == "X") {
        sign = "O";
    }else {
        sign = "X";
    }
}

function printx(n) {
    let x = document.getElementById("r"+n);
    console.log(x)

    if(x.innerText == "") {
        x.innerText = sign;
        checkWin();
        changeSign();
        disp.innerHTML = sign + "'s turn";
    }
}

function getBox(num) {
    return document.getElementById("r"+num).innerHTML;
}

function checkMove(a,b,c,m) {
    if(getBox(a) == m && getBox(b) == m && getBox(c) == m) 
        return true;
    else 
        return false;
}

function checkWin() {
    if((checkMove(1, 2, 3, sign)) || (checkMove(4, 5, 6, sign)) || (checkMove(7, 8, 9, sign)) || (checkMove(1, 4, 7, sign)) || (checkMove(2, 5, 8, sign)) || (checkMove(3, 6, 9, sign)) || (checkMove(1, 5, 9, sign)) || (checkMove(3, 5, 7, sign))) {
        disp.innerHTML = sign+" won !!";
        for(let i = 1; i <= 9; i++) {
            document.getElementById("r"+i).innerHTML = "";
        }
        throw "Game Over";
    }else {
        if((getBox(1) != "") && (getBox(2) != "") && (getBox(3) != "") && (getBox(4) != "") && (getBox(5) != "") && (getBox(6) != "") && (getBox(7) != "") && (getBox(8) != "") && (getBox(9) != "")) {
            disp.innerHTML = "It's a tie !!";
            for(let i = 1; i <= 9; i++) {
                document.getElementById("r"+i).innerHTML = "";
            }
            throw "tie";
        }
    }
}