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
        question: 'Who is the president of US?',
        a: 'Florin',
        b: 'Donald Trump',
        C: 'Barak Obama',
        d: 'Mihai',
        correct: 'b'
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
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerHTML = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}
function getSelected(){
    const answerEls = document.querySelectorAll('.answer');

    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            return answerEl.id;
        }
    });

    return undefined;
}

submitBtn.addEventListener('click', () => {
    //check to see the answer
    const answer = getSelected();
    if(answer){
        if(answer && answer=== quizData[currentQuiz]){
            currentQuiz++;
        }
    

    

    
        if(currentQuiz < quizData.length){
                loadQuiz();
        }else{
                //TODO: show results
                alert('You finished!');
        }
    }
    
});