const workWord = document.querySelector(".word");

const correctCount = document.querySelector(".correct-count");
const wrongCount = document.querySelector(".wrong-count");
const wordMistakes = document.querySelector(".word-mistakes");

const timer = document.querySelector("#timer");


//рандомные слова
function getRandomWord() {
    const arr = [
        'chicken', 'rooster', 'turkey', 'gobbler', 'goat', 'kid',
        'sheep', 'ram', 'lamb', 'bull', 'cow', 'calf',
        'horse', 'stallon', 'colt', 'mare', 'pig', 'sow',
        'piglet', 'rabbit', 'kit', 'doe', 'buck'
    ];

    const rand = Math.floor(Math.random() * (arr.length));
    return arr[rand];
}

let currentWord = getRandomWord();
renderWord(currentWord);


//обернем в span
function renderWord(word) {
    workWord.innerHTML = word
        .split("")
        .map((char) => `<span>${char}</span>`)
        .join("");
}


//обработчик события
let rand = 0;

document.addEventListener("keypress", (event) => {
    console.log(event.key, currentWord);
    if (event.key === currentWord[rand]) {
        workWord.children[rand].className = "c";
        rand++;
    } else {
        workWord.children[rand].className = "w";
        wrongCount.textContent = ++wrongCount.textContent;
        wordMistakes.textContent = ++wordMistakes.textContent;
    }

    if (rand === currentWord.length) {
        correctCount.textContent = ++correctCount.textContent;
        setTimeout(nextWord, 0);
    }

});

//вывод следующего слова
function nextWord() {
    checkWordsCount();
    currentWord = getRandomWord();
    renderWord(currentWord);
    rand = 0;
    wordMistakes.textContent = 0;
}

//итог
function checkWordsCount() {
    if (wrongCount.textContent >= 5) {
        alert(`Вы проиграли :( Ваше время ${timer.textContent}`);
        clearTimer();
    }

    if (correctCount.textContent >= 5) {
        alert(`Победа! Ваше время ${timer.textContent}`);
        clearTimer();
    }
}

// таймер
let seconds = "00";
let minutes = "00";

let timerFunction = setInterval(() => {
    document.querySelector("#timer").innerHTML = `${minutes}:${seconds}`;

    if (seconds < 59) {
        seconds++;
    } else {
        minutes++;
        seconds = 0;
    }
    seconds = seconds < 10 ? "0" + seconds : seconds;
}, 1000);

function clearTimer() {
    clearInterval(timerFunction);
    timer.textContent = `00:00`;
}