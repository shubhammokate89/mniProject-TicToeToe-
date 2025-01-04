let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".rest_btn");
let newBtn = document.querySelector(".new_btn");
let msgContainer = document.querySelector(".msg_container");
let msg = document.querySelector(".msg");
resetBtn.addEventListener("click", resetGame);
newBtn.addEventListener("click", resetGame);


let turn = true;
var winArr = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 5, 8],
    [6, 7, 8]
];

boxes.forEach(function (box) {
    box.addEventListener("click", funBox);
    function funBox() {
        if (turn) {
            box.innerHTML = "X";
            // box.style.background = "red";
            turn = false;
        }
        else {
            box.innerHTML = "O";
            // box.style.background = "yellow";
            turn = true;
        }
        box.disabled = true;
        checkWinner();
    }
});

function checkWinner() {
    for (let patterns of winArr) {
        let pos1val = boxes[patterns[0]].innerText;
        let pos2val = boxes[patterns[1]].innerText;
        let pos3val = boxes[patterns[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                showWinner(pos1val);
            }
        }
    }
}

function showWinner(winner) {
    msg.innerText = `Congratulations winner is ${winner}`;
    msgContainer.classList.remove("hide");
    dissableBtn();
};

function resetGame() {
    turn = true; 
    enableBtn();
    msgContainer.classList.add("hide");
};

function dissableBtn() {
    for (box of boxes) {
        box.disabled = true;
    }
};

function enableBtn() {
    for (box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};




