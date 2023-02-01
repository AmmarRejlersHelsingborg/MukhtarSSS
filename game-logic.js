// All code should be written in this file.

let playerOneMoveOneType= 0;
let playerOneMoveTwoType
let playerOneMoveThreeType

let playerTwoMoveOneType
let playerTwoMoveTwoType
let playerTwoMoveThreeType

let playerOneMoveOneValue
let playerOneMoveTwoValue
let playerOneMoveThreeValue

let playerTwoMoveOneValue
let playerTwoMoveTwoValue
let playerTwoMoveThreeValue

let roundOneWinner
let roundTwoWinner
let roundThreeWinner

let gameWinner



function setPlayerMoves (
    player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue
) {

//failfast return 
//if (!moveOneType || !moveTwoType || !moveOneValue || !moveTwoValue || !moveThreeType || !moveThreeValue){
 //   return 'error' ;
//};

//if(!isValidMoveType(moveOneType) || !isValidMoveType(moveTwoType) || !isValidMoveType(moveThreeType)){
   // return 'error';
//};

//if(!isValidMoveValue(moveOneValue) || !isValidMoveValue(moveTwoValue) || !isValidMoveValue(moveThreeValue)){
  //  return 'error';
//};

//if ((moveTwoValue + moveOneValue + moveThreeValue ) > 99 ){
//    return 'error';
//};



if (player === 'Player One') {
    playerOneMoveOneType = moveOneType;
    playerOneMoveTwoType = moveTwoType;
    playerOneMoveThreeType = moveThreeType;
    playerOneMoveOneValue = moveOneValue;
    playerOneMoveTwoValue = moveTwoValue;
    playerOneMoveThreeValue = moveThreeValue;

}
else if (player === 'Player Two') {
    playerTwoMoveOneType = moveOneType;
    playerTwoMoveTwoType = moveTwoType;
    playerTwoMoveThreeType = moveThreeType;
    playerTwoMoveOneValue = moveOneValue;
    playerTwoMoveTwoValue = moveTwoValue;
    playerTwoMoveThreeValue = moveThreeValue;

};

function isValidMoveType(moveType){
    return (moveType === 'rock' )|| (moveType === 'paper') || (moveType ==='scissors');
};

function isValidMoveValue(moveValue){
    return (moveValue >= 1) &&(moveValue <=99);
};


console.log(playerOneMoveOneType
        ,playerOneMoveTwoType
        , playerOneMoveThreeType
        , playerTwoMoveOneType
        , playerTwoMoveTwoType
        , playerTwoMoveThreeType);


return playerOneMoveOneValue
             ,playerOneMoveTwoValue
              ,playerOneMoveThreeValue
          ,playerTwoMoveOneValue
           ,playerTwoMoveTwoValue
            ,playerTwoMoveThreeValue
        ;
    

};





const getRoundWinner= (roundNumber)=> {


if (!playerOneMoveOneType || !playerOneMoveOneValue || !playerOneMoveThreeType || !playerOneMoveThreeValue 
    ||!playerOneMoveTwoType || !playerOneMoveTwoValue || !playerTwoMoveOneType || !playerTwoMoveOneValue ||
    !playerTwoMoveThreeType || !playerTwoMoveThreeValue || !playerTwoMoveTwoType || !playerTwoMoveTwoValue 
    ){return null};


if (roundNumber= 1) {

  if ((playerOneMoveOneType === playerTwoMoveOneType) && (playerOneMoveOneValue === playerTwoMoveOneValue))
      { roundOneWinner= 0;
 return (` Tie`)};

if ((playerOneMoveOneType ===playerTwoMoveOneType) && (playerOneMoveOneValue !== playerTwoMoveOneValue))
    {if(playerOneMoveOneValue > playerTwoMoveOneValue)
        {roundOneWinner= 1;
        return `Player One`};

    if (playerOneMoveOneValue < playerTwoMoveOneValue)
    {roundOneWinner= 2;
     return (`Player Two`)};};

     if(playerOneMoveOneType !==playerTwoMoveOneType){
        if(playerOneMoveOneType === 'Rock') {
        if (playerTwoMoveOneType === 'Paper'){roundOneWinner= 2; return (`Player Two`)};
        if (playerTwoMoveOneType === 'Scissors'){roundOneWinner=1; return(`Player One`)};
     };

     if(playerOneMoveOneType === 'Paper') {
            if (playerTwoMoveOneType === 'Scissors'){roundOneWinner= 2; return (`Player Two`)};
            if (playerTwoMoveOneType === 'Rock'){roundOneWinner=1; return (`Player One`)}; 
        };

     if(playerOneMoveOneType === 'Scissors') {
            if (playerTwoMoveOneType === 'Rock'){roundOneWinner= 2; return (`Player Two`)};
            if (playerTwoMoveOneType === 'Paper'){roundOneWinner=1; return(`Player One`)}; 
        };     
    }};



    if (roundNumber=2){
        if (playerOneMoveTwoType === playerTwoMoveTwoType && playerOneMoveTwoValue === playerTwoMoveTwoValue)
        { roundTwoWinner= 0;
            return (`The winner for round Two is Tie`)};
        
        if (playerOneMoveTwoType ===playerTwoMoveTwoType && playerOneMoveTwoValue !== playerTwoMoveTwoValue)
            {if(playerOneMoveTwoValue > playerTwoMoveTwoValue)
                {roundTwoWinner= 1;
                    return (`Player One`)};
        
            if (playerOneMoveTwoValue < playerTwoMoveTwoValue)
            {roundTwoWinner= 2;
                return (`Player Two`)};}
        
             if(playerOneMoveTwoType !==playerTwoMoveTwoType){
                if(playerOneMoveTwoType === 'Rock') {
                if (playerTwoMoveTwoType === 'Paper'){roundTwoWinner= 2; return (`Player Two`)};
                if (playerTwoMoveTwoType === 'Scissors'){roundTwoWinner=1; return(`Player One`)};
                };
        
             if(playerOneMoveTwoType === 'Paper') {
                    if (playerTwoMoveTwoType === 'Scissors'){roundTwoWinner= 2; return (`Player Two`)};
                    if (playerTwoMoveTwoType === 'Rock'){roundTwoWinner=1; return (`Player One`)}; 
                };
        
             if(playerOneMoveTwoType === 'Scissors') {
                    if (playerTwoMoveTwoType === 'Rock'){roundTwoWinner= 2; return (`Player Two`)};
                    if (playerTwoMoveTwoType === 'Paper'){roundTwoWinner=1; return (`Player One`)}; 
                };     
            }}
        

    ;
    
    

    if (roundNumber=3){
        if (playerOneMoveThreeType === playerTwoMoveThreeType && playerOneMoveThreeValue === playerTwoMoveThreeValue)
        { roundThreeWinner= 0;
            return (`The winner for round Three is Tie`)};
        
        if (playerOneMoveThreeType ===playerTwoMoveThreeType && playerOneMoveThreeValue !== playerTwoMoveThreeValue)
            {if(playerOneMoveThreeValue > playerTwoMoveThreeValue)
                {roundThreeWinner= 1;
                    return (`Player One`)};
        
            if (playerOneMoveThreeValue < playerTwoMoveThreeValue)
            {roundThreeWinner= 2;
                return (`Player Two`)};};
        
             if(playerOneMoveThreeType !==playerTwoMoveThreeType){
                if(playerOneMoveThreeType === 'Rock') {
                if (playerTwoMoveThreeType === 'Paper'){roundThreeWinner= 2; return (`Player Two`)};
                if (playerTwoMoveThreeType === 'Scissors'){roundThreeWinner=1; return (`Player One`)};
             };
        
             if(playerOneMoveThreeType === 'Paper') {
                    if (playerTwoMoveThreeType === 'Scissors'){roundThreeWinner= 2; return (`Player Two`)};
                    if (playerTwoMoveThreeType === 'Rock'){roundThreeWinner=1; return (`Player One`)}; 
                };
        
             if(playerOneMoveThreeType === 'Scissors') {
                    if (playerTwoMoveThreeType === 'Rock'){roundThreeWinner= 2; return (`Player Two`)};
                    if (playerTwoMoveThreeType === 'Paper'){roundThreeWinner=1; return (`Player One`)}; 
                };     
            }};

    };



   // 'Rock' && playerOneMoveOneValue === ''








function getGameWinner(){
    getRoundWinner(1);
    getRoundWinner(2);
    getRoundWinner(3);
    if (roundOneWinner + roundTwoWinner + roundThreeWinner === (1||3||5)){
        gameWinner= `The winner is player one ${this.player}`;
        
    };

    if(roundOneWinner + roundTwoWinner + roundThreeWinner === (2||4||6)){
        gameWinner= `The winner is player two The Computer`;
    };

    if(roundOneWinner + roundTwoWinner + roundThreeWinner === 0){
        gameWinner= `The winner is Tie`;  
    }
    return gameWinner;
};




function setComputerMoves () {

    let moveOneType= (Math.floor(Math.random()*3));
    if (moveOneType = 0){playertowMoveOneType = 'Rock'};
     if (moveOneType= 1){ playertowMoveOneType='Paper'};
     if (moveOneType= 2){ playertowMoveOneType='Scissors'}

    let moveTwoType = Math.floor(Math.random()*3);
     if (moveTwoType = 0){playertowMoveOneType = 'Rock'};
     if (moveTwoType= 1){ playertowMoveOneType='Paper'};
     if (moveTwoType= 2){ playertowMoveOneType='Scissors'}

    let moveThreeType = Math.floor(Math.random()*3);
    if (moveThreeType = 0){playertowMoveOneType = 'Rock'};
     if (moveThreeType= 1){ playertowMoveOneType='Paper'};
    if (moveThreeType= 2){ playertowMoveOneType='Scissors'}

      let moveOneValue = Math.floor(Math.random()*96) +1;
      let moveTwoValue = Math.floor(Math.random()*(97- moveOneValue)) +1;
      let moveThreeValue = Math.floor(Math.random()*(99 - moveOneValue - moveTwoValue)) ;
    

    setPlayerMoves('Player Two',moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue
    );
};



console.log('ok')

setPlayerMoves('Player One',1,20,1,20,1,10);
//setComputerMoves();
//getRoundWinner(1);

//console.log( playerOneMoveOneType );
//console.log( playerOneMoveTwoType );




//play.........
