const textContainer = document.getElementById('text-container')
const Words = ["JIJAZ", "JIKONI"]
let delay = 500;

function displayWords(){
    Words.forEach((word, index) => {
        setTimeout(() => {
            const span = document.createElement("span");
            span.textContent = word + " ";
            textContainer.appendChild(span);
        }, index * delay);
    });
}

displayWords();