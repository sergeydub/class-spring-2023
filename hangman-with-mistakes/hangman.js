function includes(char, string) {
    for (var i = 0; i < string.length; i++) {
        var currentStrChar = string[i];
        if (char === currentStrChar) {
            return true;
        }
    }
    return false;
}
function createDivWithText(text) {
    var div = document.createElement('div');
    div.innerHTML = text;
    return div;
}
function getRandomEntry(array) {
    var randomIdx = Math.floor(Math.random() * array.length);
    return array[randomIdx];
}
function Hangman(secretWord) {
    this.origionalGameState = document.body.innerHTML;
    this.secretWord = secretWord;
    this.characterGuessed = '';
    this.remainingBadGuesses = 6;
}
Hangman.prototype.playerLost = function () {
    return this.remainingBadGuesses === 0;
};
Hangman.prototype.showGameEnd = function () {
    var gameContainer = document.getElementById('game');
    gameContainer.classList.add('game-inactive');
    var gameEndContainer = document.getElementById('game-end');
    gameEndContainer.classList.remove('no-display');
    var messageContainer = document.getElementById('game-end-message');
    if (this.playerLost()) {
        messageContainer.innerHTML = 'You Lose!';
    } else {
        messageContainer.innerHTML = 'You Win!';
    }
    var secretContainer = document.getElementById('revealed-secret');
    secretContainer.innerHTML = 'The secret was ' + this.secretWord;
};
Hangman.prototype.playerWon = function () {
    for (var i = 0; i < this.secretWord.length; i++) {
        var secretChar = this.secretWord[i];
        if (!includes(secretChar, this.characterGuessed)) {
            return false;
        }
    }
    return true;
};
Hangman.prototype.addToCharactersGuessed = function (char) {
    this.characterGuessed += char;
}; 
Hangman.prototype.appendGuessedCharacter = function (key) {
    var guessedCharDiv = createDivWithText(key);
    guessedCharDiv.classList.add('character');
    var container = document.getElementById('guessed-characters');
    container.append(guessedCharDiv);
};
Hangman.prototype.updateSecretCharacter = function (char) {
    var allSecretChars = document.getElementsByClassName('secret-character');
    for (var i = 0; i < allSecretChars.length; i++) {
        var secretChar = allSecretChars[i];
        if (char.toLowerCase() === secretChar.innerHTML.toLowerCase()){
            secretChar.classList.remove('hidden');
        }
    }
};

Hangman.prototype.revealBodyPart = function () {
    this.remainingBadGuesses -= 1;
    function reveal(id) {
        var container = document.getElementById(id);
        container.classList.remove('intact');
    }
    if (this.remainingBadGuesses === 5) {
        reveal('head')
    } else if (this.remainingBadGuesses === 4){
        reveal('body')
    } else if (this.remainingBadGuesses === 3) {
        reveal('arm-left')
    } else if (this.remainingBadGuesses === 2){
        reveal('arm-right')
    } else if (this.remainingBadGuesses === 1) {
        reveal('leg-left')
    }
};
Hangman.prototype.updateGameMessage = function (msg) {
    var messageContainer = document.getElementById('game-message');
    messageContainer.innerHTML = msg;
};
Hangman.prototype.renderRemainingGuesses = function () {
    var container = document.getElementById('remaining-guesses');
    container.innerHTML = this.remainingBadGuesses;
};
Hangman.prototype.resetGameState = function () {
    document.body.innerHTML = this.origionalGameState;
};
Hangman.prototype.initializeSecretWord = function () {
    var container = document.getElementById('secret-word');
    for (var i = 0; i < this.secretWord.length; i++) {
        var secretChar = this.secretWord[i];
        var div = createDivWithText(secretChar);
        div.classList.add('secret-character', 'hidden');
        container.append(div);
    }
};
Hangman.prototype.alreadyGuessed = function (guessedKey) {
    return includes(guessedKey, this.characterGuessed);
};
Hangman.prototype.isInvalidGuess = function (guessedKey) {
    var isAlphabetic = includes(guessedKey, 'abcdefghijklmnopqrstuvwxyz');
    return !isAlphabetic;
};
Hangman.prototype.clearGameMessage = function (msg) {
    var messageContainer = document.getElementById('game-message');
    messageContainer.innerHTML = msg;
};
Hangman.prototype.clearGameMessage = function () {
    var messageContainer = document.getElementById('game-message');
    messageContainer.innerHTML = '';
};
Hangman.prototype.correctGuess = function (guessedKey) {
    return includes(guessedKey, this.secretWord);
};

/**
 * Removes word from wordBank if found.  Does nothing if word was not found.
 */
 Hangman.prototype.removeFromWordBank = function (word) {
    var idx = wordBank.indexOf(word);
    if (idx > -1) {
        wordBank.splice(idx, 1);
    }
};

var wordBank = [
    'cat',
    'soul',
    'watch',
];

function initialize() {

    if (wordBank.length <= 0) {
        alert("NO MORE WORDS!");
        return;
    }

    var randomWord = getRandomEntry(wordBank);
    var game = new Hangman(randomWord);
    game.initializeSecretWord();
    document.addEventListener('keydown', function (event) {
        if (game.playerWon() || game.playerLost()) {
            return;
        }
        var guessedKey = event.key.toLowerCase();
        if (game.isInvalidGuess(guessedKey)) {
            return;
        }
        if (game.alreadyGuessed(guessedKey)) {
            game.updateGameMessage('You already Guessed ' + guessedKey);
            return;
        }
        game.addToCharactersGuessed(guessedKey);
        game.appendGuessedCharacter(guessedKey);
        if (game.correctGuess(guessedKey)) {
            game.updateGameMessage('Yes! The secret contains ' + guessedKey);
            game.updateSecretCharacter(guessedKey);
        } else {
            game.updateGameMessage('Nope, the secret does not have a ' + guessedKey);
            game.revealBodyPart();
        }
        if (game.playerWon() || game.playerLost()) {
            game.showGameEnd();

            if (game.playerWon()) {
                game.removeFromWordBank(randomWord);
            }
            return;
        }
    });
    var playAgainButton = document.getElementById('restart-game');
    playAgainButton.addEventListener('click', function () {
        game.resetGameState();
        initialize();
    });
}

initialize();

