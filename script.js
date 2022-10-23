document.addEventListener("keydown", keydownHandler);
const spans = Array.from(document.querySelectorAll('.word span'));
console.log(spans);

spans.forEach(function(item) {
    console.log(item);
})

function keydownHandler(event) {
    console.log(event.key);
    if (event.key === 'a') {
        item.classList.add('c')
    } else {
        item.classList.add('w')
    }

}
//const letter = letter.find((x) => x.dataset.letters.includes(event.key));



/*const span = document.querySelector('.word');
if (letter) {
    press(event.key);
    return;
}


const arr = new Array('chicken',
    'rooster', 'turkey', 'gobbler', 'goat', 'kid',
    'sheep', 'ram', 'lamb', 'bull', 'cow', 'calf',
    'horse', 'stallon', 'colt', 'mare', 'pig', 'sow',
    'piglet', 'rabbit', 'kit', 'doe', 'buck');

function press(letter) {
    console.log(letter);
}*/