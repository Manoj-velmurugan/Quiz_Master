# Quiz_Master
## Date : 13/07/2025
## Objective:
To demonstrate the concepts of callback functions and higher-order functions in JavaScript by building a simple quiz scoring system where the evaluation logic is passed as a callback to a higher-order function.

## Tasks:

#### 1. Create the HTML Layout:
Add a heading ```<h1>QuizMaster</h1>```

Add a few mock questions (or inputs for answers — optional)

Add a “Check Score” button

Display the final score in a ```<div> or <p>```

#### 2. Add CSS Styling:
Style the layout with a clean font and spacing

Add background color and rounded buttons

Keep the output score in a prominent style

#### 3. JavaScript Functionality:
Create a higher-order function called calculateScore(callback)

The callback will contain the logic for checking answers (or mocked results)

Pass different callback functions to demonstrate modular scoring (e.g., strict or lenient scoring)
## HTML Code:
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quiz Master</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="quiz-container">
        <h1>Quiz Master</h1>
        <div id="quiz"></div>
        <button onclick="checkScore()">Check Score</button>
        <p id="result"></p>
    </div>
    <script src="script.js"></script>
</body>
</html>
```
## CSS Code:
```
body {
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-image: url("back.jpg");
  padding: 30px;
  max-width: 600px;
  margin: auto;
  border-radius: 10px;
}

.quiz-container {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}


h1 {
  text-align: center;
  color: #30296F;
}

p {
  font-size: 18px;
  color: #30296F;
  margin-top: 15px;
}

input[type="text"] {
  width:fit-content;
  padding: 8px;
  font-size: 16px;  
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  display: block;
  background-color: #30296F;
  color: white;
  padding: 12px 20px;
  font-size: 16px;
  margin: 20px auto;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}

#result {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: #28a745;
  margin-top: 20px;
  padding: 10px;
  border-radius: 8px;
}
```
## JavaScript Code:
```
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

function strictScoring(userAnswers, questions){
    let score = 0;

    userAnswers.forEach((ans, index) => {
        if(ans.toLowerCase() ===  questions[index].answer.toLowerCase()){
            score ++;
        }
    })
    return score
}

function checkScore(){
    calculateScore(strictScoring);
}
```
## Output:

## Result:
A mini module using JavaScript callbacks and higher-order functions is successfully created. This reinforces real-world use of passing functions as arguments to other functions and modularizes logic for reusability.
