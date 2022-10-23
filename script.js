const words = ["apple", "horse", "weather", "homework", "love", "banana", "belief", "peace", "space", "universe",
    "law", "secret", "evil", "cloud", "failure", "action", "force", "soul", "heed", "gunpowder", "crowd", "pollution",
    "cage", "maple", "basket"
];

const wordContainer = document.querySelector(".word");

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function generateWord() {
    return words[getRandomInt(words.length)];
}

function addWord() {
    const fragment = new DocumentFragment();

    let randomWord = generateWord();
    const letters = randomWord.split("");

    letters.forEach((letter) => {
        const letterContainer = document.createElement("span");
        letterContainer.textContent = letter;
        fragment.append(letterContainer);
    })

    wordContainer.append(fragment);
    return randomWord;
}

let word = addWord();

//////////////////////////////////////////////////////////////

const wordMistakes = document.querySelector(".word-mistakes");
const correctCount = document.querySelector(".correct-count");
const wrongCount = document.querySelector(".wrong-count");

let i = 0;
let correctWords = 0;
let wrongWords = 0;
let wrong = 0;
let fortime = false;
let timerId = null;

document.addEventListener("keydown", (event) => {
    if (!fortime) {
        seconds = 0;
        minutes = "00";
        timerId = setInterval(makeCountdown, 1000);
        fortime = true;
    }

    let wordLetters = Array.from(document.querySelectorAll(".word span"));

    if (event.key == word[i]) {
        wordLetters[i].className = "c";
        i++;
    } else {
        wordLetters[i].className = "w";
        wrong++;
        wordMistakes.textContent = wrong;
    }

    if (i == wordLetters.length) {
        if (wrong === 0) {
            correctWords++;
            correctCount.textContent = correctWords;
        } else {
            wrongWords++;
            wrongCount.textContent = wrongWords;
        }
    }

    if (i >= wordLetters.length) {
        if (correctWords == 5) {
            showMessage("Ура, ты победила!");
        } else if (wrongCount.textContent === "5") {
            showMessage("Ты проигралa :(");
        } else {
            i = 0;
            wrong = 0;
            wordMistakes.textContent = 0;
            wordContainer.innerHTML = "";
            word = addWord();
        }

    }
});

//////////////////////////////////////////////////////////////

function showMessage(info) {
    clearInterval(timerId);
    const message = setTimeout(() => {
        alert(`${info}     Твое время: ${timer.textContent}      Попробуй снова!`);
        nuller();
    }, 0);
}

function nuller() {
    fortime = false;
    i = 0;
    wrong = 0;
    correctWords = 0;
    wrongWords = 0;
    correctCount.textContent = 0;
    wrongCount.textContent = 0;
    wordMistakes.textContent = 0;
    timer.textContent = "00:00";
    wordContainer.innerHTML = "";
    word = addWord();
}

//////////////////////////////////////////////////////////////

const timer = document.querySelector("#timer");
const minutesSeconds = timer.textContent.split(":");
let minutes = minutesSeconds[0];
let seconds = minutesSeconds[1];

function makeCountdown() {
    seconds++;

    if (seconds > 59) {
        seconds = 00;
        minutes++;

        if (minutes < 10) {
            minutes = '0' + minutes;
        }
    }

    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    minutesSeconds[0] = minutes;
    minutesSeconds[1] = seconds;
    timer.textContent = minutesSeconds.join(":");
}