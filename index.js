let boxes=document.querySelectorAll(".box");
let reset_btn=document.querySelector("#reset");

let new_btn=document.querySelector("#new");
let msgContainer=document.querySelector(".msg-container");
let para=document.querySelector(".msg-container p");


let turnO=true;


const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const disableboxes=()=> {
    for(let box of boxes) {
        box.disabled=true;
    }
}

boxes.forEach((box)=> {
    box.addEventListener("click",()=> {
        if(turnO) {
            box.innerText='O';
            turnO=false;
            box.classList.add("change");

        }

        else {
            box.innerText='X';

            turnO=true;
            box.classList.remove("change");
        }

        box.disabled=true;

        checkWinner();
    });
});


const checkWinner=()=> {
    for(let pattern of winPatterns) {

        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val!=="" && pos2Val!=="" && pos3Val!=="") {
            if(pos1Val=== pos2Val && pos2Val===pos3Val) {
                showwinner(pos1Val);
            }
        }
       }
};

const showwinner=(winner)=> {

    para.innerText =` Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableboxes();
};

const newgame=()=> {
    msgContainer.classList.add("hide");

    boxes.forEach((box)=> {
        box.disabled=false;
        box.innerText=" ";
        
    })


}



    const resetgame=()=> {
        turnO=true;

        boxes.forEach((box)=> {
            box.disabled=false;
            box.innerText=" ";
        })
    
    
    }

new_btn.addEventListener("click",newgame);

reset_btn.addEventListener("click",resetgame);




