const quizData = [

{

    question: "which language runs in a web browers ?",
    a:"java",
    b:"c",
    c:"python",
    d:"javaScript",
    correct:"b"
},
{

    question: "what does CSS stands for ?",
    a:"Central style sheet",
    b:"Cascading style sheet",
    c:"Cascading simple sheet",
    d:"central simple sheet",
    correct:"b"

},
{

    question: "what does HTML stands for ?",
    a:"HyperText markup language",
    b:"hypertext makeup language",
    c:"HyperText marking language",
    d:"HighText markup language",
    correct:"b"

},
{

    question: "what year was Javascrpit lanuched ?",
    a:"1996",
    b:"1995",
    c:"1994",
    d:"nopne of the above",
    correct:"b"

}
];

//  getting elements in js

const quiz = document.getElementById('quiz')
const questionE1 = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
const answerE1s = document.querySelectorAll('.answer')

let currentQuiz = 0

loadQuiz()

function loadQuiz(){
    deselectAnswers()
    const currentQuizdata = quizData[currentQuiz]

    
        questionE1.innerText =currentQuizdata.question
        a_text.innerText =currentQuizdata.a
        b_text.innerText =currentQuizdata.b
        c_text.innerText =currentQuizdata.c
        d_text.innerText =currentQuizdata.d  
}
// load quiz()

function deselectAnswers(){
    answerE1s.forEach(answerE1 => 
        answerE1.checked = false
        
    
    )
}
let score = 0;
function getSelected(){
    let answer

    answerE1s.forEach(answerE1 => {
        if(answerE1.checked){
            answer = answerE1.id
        }
    })
    return answer
}

submitBtn.addEventListener('click',() =>{
    const answer = getSelected()
    // console.log(answer)
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++
        }
        currentQuiz++

        if(currentQuiz < quizData.length){
            loadQuiz()
        }else{
            quiz.innerHTML =`
            <h2> You answerd ${score}/${quizData.length}questions correctly</h2>
            <button onclick="location.reload()">Reload</button>
            `
        }
    }
})






      
