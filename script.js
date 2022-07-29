const quizData = [
    {
        question: 'How old is Cryst?',
        a: '10',
        b: '38',
        c: '25',
        d: '97',
        correct: 'c'
    },{
        question: 'What is the most used programming language in 2020?',
        a: 'Java',
        b: 'Python',
        c: 'Javascript',
        d: 'PHP',
        correct: 'c'
    },{
        question: 'What does HTML stand for?',
        a: 'Hypertext Markup Language',
        b: 'Cascading Style sheet',
        c: 'Hypertext Multiple Language',
        d: 'Jason Object Model',
        correct: 'a'
    },{
        question: 'What year was JavaScript launched?',
        a: '2020',
        b: '1994',
        c: '1995',
        d: 'none',
        correct: 'c'
    }
];
const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score =0;
loadQuiz();

function loadQuiz(){
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerHTML = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}
function getSelected(){

    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers(){
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    //check to see the answer
    const answer = getSelected();
    console.log(answer);
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        }else{
            // //TODO: show results
            // alert('You finished!');
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
            
            <button onclick = "location.reload()">Reload</button>`
        }
    }
})