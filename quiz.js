const quizData= [
    {
question: "1. Where was Jesus born?",
a: "Canada",
b: "Jos",
c: "Bethlehem",
d: "Jerusalem",
correct: "c",
    },

    {
        question: "2. Who is the father of Jesus?",
        a: "Marry",
        b: "Joseph",
        c: "Job",
        d: "Alchemy",
        correct: "b",
            },
            {
                question: "3. Who is the mother of Jesus?",
                a: "Mary",
                b: "Virgin",
                c: "Hannah",
                d: "Elizabeth",
                correct: "a",
                
                    },
                    {
                        question: "4. Who betray Jesus?",
                        a: "John",
                        b: "Judas",
                        c: "Judah",
                        d: "Matthew",
                        correct: "b",
                        
                            },
                            
                                                {
                        question: "5. How may desciples did Jesus have?",
                        a: "two",
                        b: "Twelve",
                        c: "Twenty",
                        d: "Seven",
                        correct: "b",
                        
                            },

                            {
                                question: "6. Jesus died on the cross of _____________?",
                                a: "Calvary",
                                b: "Corner stone",
                                c: "Judea",
                                d: "Nazareth",
                                correct: "a",
                                
                                    },

                                    {
                                        question: "7. Who was the first person to see Jesus after his resurrection?",
                                        a: "Jezebel",
                                        b: "Deborah",
                                        c: "Mary Madgalene",                          
                                        d: "Sarah",
                                        correct: "c",
                                        
                                            },
                                            {
                                                question: "8. Which of the desciples does not believe that Jesus resurrect?",
                                                a: "Timothy",
                                                b: "Thomas",
                                                c: "Peter",
                                                d: "Paul",
                                                correct: "b",
                                                
                                                    },
];

console.log(quizData);

const start_icon = document.getElementById('start');
const startPage = document.getElementById('start-form');



const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const preBtn = document.getElementById('previous');


start_icon.onclick = function(){
    startPage.style.transform = "scale(0)";
    quiz.style.transform = "scale(1)";


}


let currentQuiz = 0
let score = 0

loadQuiz()
function loadQuiz(){
    
    deselectAnswers() 
    
    const currentQuizData = quizData[currentQuiz]
    
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;


}

function deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected(){
    let answerEl
    answerEls.forEach(answerEl => {
        if(answerEl.checked){  
          answer =  answerEl.id
        }
    })
    return answer
}
// preBtn.addEventListener('click', () =>{
//     currentQuiz--


// });

submitBtn.addEventListener('click', () => {
    let random = Math.floor(Math.random()* quizData.length);

    const answer = getSelected()
    if (answer){
        if (answer === quizData[currentQuiz].correct){
            score++
        }
    currentQuiz++
        if(currentQuiz < quizData.length){
            loadQuiz()
        }else{
            quiz.innerHTML = `
            <center><h2>You answered ${score}/${quizData.length} questions correctly</h2>
            <br>
            <br>
            <br>
            <button onclick= "location.reload()">Reload</button></center>
            `
        }
    }


})


