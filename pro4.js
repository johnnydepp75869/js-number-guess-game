 let randomeNumber = parseInt(Math.random() * 100 + 1);

 const submit = document.querySelector('#subt');
 const userInput = document.querySelector('#guessField');
 const guessSlot = document.querySelector('.guesses');
 const remaining = document.querySelector('.lastResult');
 const lowOrHi = document.querySelector('.lowOrHi');
 const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');


let preaGuess = [];
let numGuess = 1;

 
let playGame = true;

if (playGame){
    submit.addEventListener('click', function(e){
    e.preventDefault()    
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
});
}


function validateGuess(guess){
  if(isNaN(guess)){
    alert('please enter a valid number');
  } else if (guess < 1){
    alert('please enter a number more than 1');
  }
  else if (guess > 100){
    alert('please enter a number less than 100');
  } else{
    preaGuess.push(guess);
    if(numGuess === 11){
        dispalyGuess(guess);
        displayMessage(`Game over.randome was  ${randomeNumber}`);
        endGame();
    }else{
        dispalyGuess(guess);
        checkGuess(guess);
    }
  }
}

function checkGuess(guess){
   if(guess === randomeNumber){
    displayMessage(`You guessesn it right`);
    endGame(); 

   } else if (guess < randomeNumber) {
    displayMessage(`Number is Tooo Low`);

   } else if (guess > randomeNumber){
    displayMessage(`Number is Tooo Hight`);
   }
}

function dispalyGuess(guess){
     userInput.value = '';
     guessSlot.innerHTML += `${guess},   `;
     numGuess++;
     remaining.innerHTML = `${11- numGuess}`;
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
 userInput.value = ''
 userInput.setAttribute('disabled', '')
 p.classList.add('button')
 p.innerHTML = `<h2 id = "newGame">Start new Game</h2>`;
 startOver.appendChild(p)
 playGame = false;
 newGame();
}

function newGame(){
   const newGameButton = document.querySelector('#newGame')
   newGameButton.addEventListener('click', function(e){
    randomeNumber = parseInt(Math.random() * 100 + 1 );
    preaGuess = []
    numGuess = 1
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11 - numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true
   })
}