// import React, { useState, useEffect } from 'react';

// function Script() {
//     const questions = [
//         {
//             question: "Which is the largest animal in the world?",
//             answers: [
//                 { text: "Shark", correct: false },
//                 { text: "Blue Whale", correct: true },
//                 { text: "Elephant", correct: false },
//                 { text: "Giraffe", correct: false },
//             ]
//         },
//         // Add other questions similarly...
//     ];

//     const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//     const [score, setScore] = useState(0);

//     useEffect(() => {
//         showQuestion();
//     }, [currentQuestionIndex]);

//     const startQuiz = () => {
//         setCurrentQuestionIndex(0);
//         setScore(0);
//     };

//     const showQuestion = () => {
//         const questionElement = document.getElementById("question");
//         const answerButtons = document.getElementById("answer-buttons");
//         const nextButton = document.getElementById("next-btn");

//         resetState(questionElement, answerButtons);
        
//         const currentQuestion = questions[currentQuestionIndex];
//         questionElement.innerHTML = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;

//         currentQuestion.answers.forEach((answer, index) => {
//             const button = document.createElement("button");
//             button.innerHTML = answer.text;
//             button.classList.add("button");
//             answerButtons.appendChild(button);
            
//             if (answer.correct) {
//                 button.dataset.correct = answer.correct;
//             }

//             button.addEventListener("click", selectAnswer);
//         });
//     };

//     const resetState = (questionElement, answerButtons) => {
//         questionElement.innerHTML = '';
//         while (answerButtons.firstChild) {
//             answerButtons.removeChild(answerButtons.firstChild);
//         }
//     };

//     const selectAnswer = (e) => {
//         const selectedBtn = e.target;
//         const isCorrect = selectedBtn.dataset.correct === "true";

//         if (isCorrect) {
//             setScore(score + 1);
//             selectedBtn.classList.add("correct");
//         } else {
//             selectedBtn.classList.add("incorrect");
//         }
//     };

//     return (
//         <div>
//             <div id="question"></div>
//             <div id="answer-buttons"></div>
//             <button id="next-btn" onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}>Next</button>
//             <button onClick={startQuiz}>Start Quiz</button>
//         </div>
//     );
// }

// export default Script;

import React, { useState } from 'react';

function Script() {
    const questions = [
        {
            question: "Which is the largest animal in the world?",
            answers: [
                { text: "Shark", correct: false },
                { text: "Blue Whale", correct: true },
                { text: "Elephant", correct: false },
                { text: "Giraffe", correct: false },
            ]
        },
        // Add other questions similarly...
    ];

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);

    const startQuiz = () => {
        setCurrentQuestionIndex(0);
        setScore(0);
    };

    const selectAnswer = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }
        setCurrentQuestionIndex(currentQuestionIndex + 1);
    };

    return (
        <div>
            {currentQuestionIndex < questions.length ? (
                <div>
                    <div>{`${currentQuestionIndex + 1}. ${questions[currentQuestionIndex].question}`}</div>
                    <div>
                        {questions[currentQuestionIndex].answers.map((answer, index) => (
                            <button key={index} onClick={() => selectAnswer(answer.correct)}>
                                {answer.text}
                            </button>
                        ))}
                    </div>
                </div>
            ) : (
                <div>
                    <div>{`You scored ${score} out of ${questions.length}!`}</div>
                    <button onClick={startQuiz}>Start Quiz Again</button>
                </div>
            )}
        </div>
    );
}

export default Script;

