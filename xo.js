var is_player = true;
var game_end = true
var board = [
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"]
];
let player1,player2;
const prompt = require("prompt-sync")();
function players_name()
{
     player1 = prompt("enter name of first player: ");
     player2 = prompt("enter name of second player: ");
}
players_name();
function start_with_x() {
    if (is_player) {
        value = 'x';
        return true;
    }
    else {
        value = 'o';
        return false;
    }
}

if (start_with_x() == true) {
    console.log(player1 + "'s Turn (x) :");
}
else {
    console.log(player2 + "'s Turn (o) :");
}
while (game_end) 
{
    check_input_row();
    let row = 0;
    let col = 0;

    function check_input_row() 
    {
        let row = prompt("enter a row: ");
        if (row < 0 || row > 2) {
            console.log("Your row out of bounary !!!");
            return false;
        }
        else {
            check_input(row);
            return true;
        }

    }

    function check_input(row) 
    {
        let col = prompt("enter a col: ");
        if (col < 0 || col > 2) {
            console.log("Your col out of bounary !!!");
            return false;
        }
        else if (board[row][col] != '-') {
            console.log("Someone has already made a move there....");
            return false;
        }
        else {
            fill_board(row, col);
        }

    }
    check_who_winner();
}

function fill_board(row, col)
     {
        if (value == 'x') {
            board[row][col] = 'x';
            draw_board();
            value = 'o'
        }
        else if (value == 'o') {
            board[row][col] = 'o';
            draw_board();
            value = 'x'
        }
    }
    function check_who_winner() 
    {
        if (winner(board) == 'x') {
            console.log(player1 + ": has Won");
            game_end = false;
        }
        else if (winner(board) == 'o') {
            console.log(player2 + ": has Won");
            game_end = false;
        }
        else {
            if (has_tied(board)) {

                console.log("Its Tieee");
            }
            else {
                is_player = !is_player;
            }
        }
    }
function check_row() {
    for (var i = 0; i < 3; i++) {
        //row
        if (board[i][0] == board[i][1] && board[i][1] == board[i][2] && board[i][0] != '-') {
            console.log(board[i][0]);
            return board[i][0];
        }
        else {
            return check_col();
        }
    }
}

function check_col() {
    for (var j = 0; j < 3; j++) {
        //col
        if (board[0][j] == board[1][j] && board[1][j] == board[2][j] && board[0][j] != '-') {
            console.log(board[0][j]);
            return board[0][j];
        }
    }
}
function check_diagonal() {
    if (board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] != '-') {
        return board[0][0];
    }
    //reverse diagonal
    if (board[2][0] == board[1][1] && board[1][1] == board[0][2] && board[2][0] != '-') {
        return board[2][0];
    }
}

function winner(board) {
    return check_row() || check_diagonal();

}
//check if bpard fulled
function has_tied(board) {
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if (board[i][j] == '-') {
                return false;
            }
        }
    }

    return true;
}
function draw_board() {
    for (var i = 0; i < 3; i++) 
    {
    console.log(board[i][0]+" "+board[i][1]+" "+board[i][2]+" ");
    }
        console.log("\n");

    }