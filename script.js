const questions = [
  { question: "What is 2 + 2?", answer: "4" },
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "What language runs in a web browser?", answer: "JavaScript" },
  { question: "What color is the sky on a clear day?", answer: "Blue" }
];

const quizContainer = document.getElementById("quiz")

questions.forEach((q, index) => {
    const questionEl = document.createElement("p")
    questionEl.textContent = `${index + 1}.${q.question}`;

    const inputEl = document.createElement("input")
    inputEl.type = "text"
    inputEl.id = `q${index + 1}`;

    quizContainer.appendChild(questionEl)
    quizContainer.appendChild(inputEl)
})

function calculateScore(callback){
    const userAnswers = [];
    
    questions.forEach((q, index) => {
        const input = document.getElementById(`q${index + 1}`)
        userAnswers.push(input.value.trim())
    })

    const score = callback(userAnswers, questions)

    document.getElementById("result").textContent = `Your Score : ${score}/${questions.length}`
}

function StrictScoring(userAnswers, questions){
    let score = 0;

    userAnswers.forEach((ans, index) => {
        if(ans.toLowerCase() ===  questions[index].answer.toLowerCase()){
            score ++;
        }
    })
    return score
}

function checkScore(){
    calculateScore(StrictScoring);
}