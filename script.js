
let tableArray = document.getElementsByTagName('td');
let xButton = document.createElement('td');
let yButton = document.createElement('td');

let gameActive = prompt("REady to play the game (Yes/No)")

function gamePlayState(){
        
  
    function WinCondition(){

    }        
   
}
// Function which checks the X win condition
function checkWinX(){
    let currentPlayX = [];
    for(let i=0; i < tableArray.length; i++)
    {   
        console.log(tableArray);
        for(let j = 0; j < currentPlayX.length; j++)
        {
            if (currentPlayX[j] == tableArray[i]){
                
            }
        }
    }  
}// End of the function

//==========================|| Game Loop ||===============================|
while(gameActive === true){
    console.log("gamestate active");

}

