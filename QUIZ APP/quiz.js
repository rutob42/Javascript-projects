const questions = [
    {
        question: "What is the capital of France?",
        choices: ["Berlin", "Madrid", "Paris", "Lisbon"],
        answer: "Paris"
    },
    {
        question: "What is 2 + 2?",
        choices: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        question: "Which language is primarily used for web development?",
        choices: ["Python", "JavaScript", "C++", "Java"],
        answer: "JavaScript"
    }
]

let currentQuestion = 0;
let score = 0;

function loadQuestion(){
   if(currentQuestion >= questions.length){
    document.body.innerHTML = `<h2> your score: ${score}/${questions.length}</h2>`;
    return;
   }
}

loadQuestion();