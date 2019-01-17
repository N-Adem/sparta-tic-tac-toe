
let tableArray = document.getElementsByTagName('td');
let playerXTurn = true;
console.log("GameCheck");
//======================||X button Funtion||===========================|
function gamePlayState(xButton, oButton) {
    for (let i = 0; i < tableArray.length; i++) {
        tableArray[i].addEventListener('click', function (event) {
            console.log(playerXTurn);
           if(playerXTurn === true){
               console.log("x's turn");
            xButton[i].setAttribute('class', 'X');
            event.target.innerText = "x"; 
            //playerXTurn = false; 
            playerXTurn = !playerXTurn;  
            console.log(playerXTurn);
            console.log("X Button Places are ===", xButton);    
        }else if(playerXTurn === false){
                console.log("y's turn");
                oButton[i].setAttribute('class', 'O');
                event.target.innerText = "o"; 
                playerXTurn = true;
            }    
            WinCondition(xButton,oButton); 
        });
    }
}
//======================||Game win condition||===========================|
function WinCondition(x, o) {
    let win =[ [111000000],[100100100],[000111000],[000000111],[010010010],[001001001],[100001001],[001010100]]
    for(let i = 0; i < win.length; i ++ )
    if(this.x || this.o == win[i].length ){
        console.log("the output of the answer for X is", x, "the output of the answer for y is", o);
    }
}
//-----------------------------------------------------------------------
/*/ Function which checks the X win condition
function checkWinX() {
    let currentPlayX = [];
    for (let i = 0; i < tableArray.length; i++) {
        console.log(tableArray);
        for (let j = 0; j < currentPlayX.length; j++) {
            if (currentPlayX[j] == tableArray[i]) {
            }
        }
    }
}// End of the function*/

    //==========================|| Game Loop ||===========================|
function gameStart(){
    console.log("gamestate active");
    gamePlayState(tableArray,tableArray);
}

gameStart();

