let secretNumber = Math.trunc(20 * Math.random()) + 1; // Fixed the calculation of secretNumber
let highscore = 0;
let time = [0, 0];
let timer; // Declare the timer variable outside the event listener

document.querySelector('.again').addEventListener('click', function () { // Changed 'Click' to 'click'
    clearInterval(timer); // Clear the timer interval
    time = [0, 0];
    secretNumber = Math.trunc(20 * Math.random()) + 1; // Regenerate secretNumber
    document.querySelector('.score').textContent = '20'; // Corrected the selector for score
    document.querySelector('.guess').value = '';
    document.getElementById('timer').innerHTML = '';
    document.querySelector('.check').style.backgroundColor = '#f1356d';
    document.querySelector('body').style.backgroundColor = 'white';
});

document.querySelector('.check').addEventListener('click', function () { // Changed arrow function to regular function to fix 'this' binding
    let guess = Number(document.querySelector('.guess').value); // Convert input to a number

    if (!guess || guess < 1 || guess > 20) { // Check for valid input
        document.querySelector('.message').textContent = 'Not a valid input';
        return; // Exit the function early
    }

    clearInterval(timer); // Clear the timer interval
    timer = setInterval(() => {
        time[1]++;
        if (time[1] % 60 === 0) {
            time[0]++;
        }
        document.getElementById('timer').innerHTML = ` ${time[0]} : ${time[1]} `;
    }, 1000);

    this.style.backgroundColor = 'black';

    if (guess === secretNumber) {
        clearInterval(timer); // Clear the timer interval
        document.querySelector('.message').textContent = 'You guessed it right';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').textContent = secretNumber;
        if (highscore < Number(document.querySelector('.score').textContent)) {
            highscore = Number(document.querySelector('.score').textContent);
        }
        document.querySelector('.highscore').textContent = highscore;
    } else if (guess > secretNumber) {
        document.querySelector('.message').textContent = 'Too high';
        document.querySelector('.score').textContent--;
    } else {
        document.querySelector('.message').textContent = 'Too low';
        document.querySelector('.score').textContent--;
    }

    if (Number(document.querySelector('.score').textContent) == 0) {
        clearInterval(timer); // Clear the timer interval
        document.querySelector('.message').textContent = 'You lost the game';
        document.getElementById('timer').innerHTML = '';
        document.getElementById('hiddenresult').textContent = secretNumber;
        this.style.backgroundColor = '#f1356d';
    }
});
