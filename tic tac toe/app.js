let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")
let turn0 = true;//playerX,player0

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 5],
    [3, 4, 5],
    [6, 7, 8]
];


boxes.forEach(
    (box) => {
        box.addEventListener("click", () => {
            console.log("box was clicked");
            if (turn0) {
                box.innerText = "0";
                turn0 = false;
            }
            else {
                box.innerText = "X";
                turn0 = true;
            }
            box.disabled = true;
            checkWinner();
        });
    });

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulation ,winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner = () => {
    for (let pettern of winPatterns) {
        let pos1val = boxes[pettern[0]].innerText;
        let pos2val = boxes[pettern[1]].innerText;
        let pos3val = boxes[pettern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("winner", pos1val);
                showWinner(pos1val);
            }
        }

        // console.log(pettern);
    }
}

const resetgame = () => {
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");

};

newGameBtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);