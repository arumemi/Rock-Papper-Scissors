   function playGame(playermove) {
     const computerMove = pickComputerMove();
     let result = '';
   
     if (playermove === 'Rock') {
       if (computerMove === 'Paper') {
         result = 'You win';
       } else if (computerMove === 'paper') {
         result = 'Tie';
       } else if (computerMove === 'Scissors') {
         result = 'You lose';
       }
       alert(`You picked ${playermove}. Computer picked ${computerMove}. ${result}`);
       
     } else if (playermove === 'Paper') {
       if (computerMove === 'rock') {
         result = 'You win!';
       } else if (computerMove === 'Scissors') {
         result = 'You lose!';
       } else if (computerMove === 'Paper') {
         result = 'Tie';
       }
        alert(`You picked ${playermove}. Computer picked ${computerMove}.${result}`);

     } else if (playermove === 'Scissors') {
       if (computerMove === 'rock') {
         result = 'You win';
       } else if (computerMove === 'paper') {
         result = 'You lose';
       } else if (computerMove === 'Scissors') {
         result = 'You win';
       }
       alert(`You picked ${playermove}. Computer picked ${computerMove}. ${result}`);
     }
   }
   
   function pickComputerMove() {
     const randomNumber = Math.random();
     let computerMove = '';
     if (randomNumber >= 0 && randomNumber < 1 / 3) {
       computerMove = 'rock';
     } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
       computerMove = 'paper';
     } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
       computerMove = 'Scissors';
     }
     return computerMove;
   }