console.log('game started');
let move=0;
let playerTurn="X";

//checkValue 
const checkValue=(element)=>{
    let td1 = (document.getElementById(element.id)).innerText;
    if(playerTurn!==undefined && td1==="")
    {
        displayMessage(element.id,playerTurn);
        changeTurn();   
    }
}

//change the player turn 
const changeTurn = () => {
   if(move<=8 && playerTurn!==undefined )
   {
        if(checkWin())
        {  
            displayMessage("showMessage", "Player "+ playerTurn+ " Won");
            stopGame();
        }
        else
        {
            playerTurn=playerTurn==="X"?"O":"X";
            displayMessage("showMessage", "Player "+playerTurn);
            if (move === 8)
            {
                displayMessage("showMessage","Match Draw");
            }
            move++;
        }    
   }
}

//get data 
const getData=(id)=>{
   // console.log('id is',id);
   return document.getElementById(id).innerHTML;
}

//check condition 
const checkCondition=(div1,div2,div3)=>{
  // console.log('div1= ',div1," div2= ",div2," div3= ",div3);
    if(getData(div1)!=="" && getData(div2)!=="" && getData(div3)!=="" && getData(div1)===getData(div2) && getData(div2)===getData(div3))
    return true;
}

//check for winner
const checkWin=()=>
{
//    if(checkCondition('cell1','cell2','cell3')||checkCondition('cell4','cell5','cell6',)||checkCondition('cell7','cell8','cell9')||checkCondition('cell1','cell4','cell7')||checkCondition('cell2','cell5','cell8')||checkCondition('cell3','cell6','cell9')||checkCondition('cell1','cell5','cell9')||checkCondition('cell3','cell5','cell7'))
let isWinner=false;
checkWinArray.forEach((index)=>{
    if(checkCondition(index[0],index[1],index[2]))
    {
        console.log('winwer is got ');
        isWinner=true;
    }
   }); 
   return isWinner; 
}

//array for winning condition 
const checkWinArray=[
    ['cell1','cell2','cell3'],
    ['cell4','cell5','cell6'],
    ['cell7','cell8','cell9'],
    ['cell1','cell4','cell7'],
    ['cell2','cell5','cell8'],
    ['cell3','cell6','cell9'],
    ['cell1','cell5','cell9'],
    ['cell3','cell5','cell7']
];


//reset the game 
const resetGame=()=>{
    for(let index=0;index<9;index++)
    {
        let elementId=document.getElementsByClassName("gamecell")[index].id;
        displayMessage(elementId,"");
    }
    displayMessage("showMessage","Player X");
    playerTurn="X";
    move=0;
}

//display player turn at p tag
const displayMessage=(id,message)=>{
    document.getElementById(id).innerHTML=message;
}
displayMessage("showMessage","Player X");

//stopGame
const stopGame=()=>{
    console.log('Game End');
    playerTurn=undefined;
    move=undefined;
}

