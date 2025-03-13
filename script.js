let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

function generateTarget() {
    return Math.floor(Math.random() * 10);
};

function compareGuesses(humanGuess, computerGuess, targetNumber) {
    let humanClosest = Math.abs(targetNumber - humanGuess);
    let computerClosest = Math.abs(targetNumber - computerGuess);

    if (humanClosest < computerClosest) {
        return true;
    } else if (humanClosest > computerClosest) {
        return false;
    } else if (humanClosest === computerClosest) {
        return true;
    };
};

const updateScore = winner => {
    if (winner === 'human') {
        humanScore += 1;
    } else {
        computerScore += 1;
    };
};

function advanceRound() {
    currentRoundNumber += 1;
};
console.log(advanceRound());
console.log(updateScore());