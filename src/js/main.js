/* 
GAME FUNCTION:

- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

// Game values.
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// UI elements.
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');
      console.log(message);

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Listen for guess
guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);
  
  // Validate
  if(isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }
  
  // Check if won
  if (guess === winningNum) {
    // Game over - WON
    gameOver(true, `${winningNum} is correct, you WON!`, 'green'); 
  } else {
    // Wrong number
    guessesLeft--;
    if (guessesLeft === 0) {
      // Game over - LOST
      gameOver(false, `Game over, you LOST! The correct number was ${winningNum}.`, 'red');
    } else {
      guessInput.style.borderColor = 'red';
      guessInput.value = '';
      // Game continues - Answer wrong
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left.`, 'red');
    }
  }
});

// Set message
function setMessage(value, color) {
  message.style.color = color;
  message.textContent = value;
}

// Game over
function gameOver(won, msg, txtColor) {
  // Disable input
  guessInput.disabled = true;
  // Change border color
  guessInput.style.borderColor = won ? 'green' : 'red';
  // Set message
  setMessage(msg, txtColor);
}