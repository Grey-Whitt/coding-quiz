var title = document.getElementById('title');
var answers = document.getElementById('answers');
var startBtn = document.querySelector('.start-btn');
var answerCheck = document.querySelector('.answerCheck')
var time = document.getElementById('timeLeft')
var endQuiz = false;
var btnId = 0
var activeQuestion = 0;

//array of questions with possible and correct answer
var questions = [{
    ask: 'which one says red',
    answer: ['blue', 'yellow', 'green', 'red'],
    correctAnswer: '3'

},
{
    ask: 'select e',
    answer: ['e', 'r', 't', 'y'],
    correctAnswer: '0'
},
{
    ask: 'select blue',
    answer: ['blue', 'false', 'false', 'false'],
    correctAnswer: '0'
},
{
    ask: 'select yes',
    answer: ['no', 'no', 'yes', 'no'],
    correctAnswer: '2'
},
{
    ask: 'select 2',
    answer: ['1','2','3','4'],
    correctAnswer: '1'
},
{
    ask: 'select g',
    answer: ['g','h','j','k'],
    correctAnswer: '0'
}];






// this function starts on game load
var onPageLoad = function() {
    title.textContent = 'Press The Button Below To Start';
    startBtn.textContent = 'Start';
}

var startQuiz = function() {
    startBtn.parentNode.removeChild(startBtn)
    time.textContent = 'time left:'
    quiz(activeQuestion)
    
}

var buildQuestion = function(activeQuestion) {
    //build question
    title.textContent = questions[activeQuestion].ask;
        
    //builds answers with unique id's
    for (var i = 0; i < questions[activeQuestion].answer.length; i++) {
        var item = document.createElement('button');
        item.setAttribute('id', btnId)
        item.className = 'btn'
        item.textContent = questions[activeQuestion].answer[i];
        answers.appendChild(item);
        btnId++
    }

    answers.addEventListener('click', function(){
        
        if (event.target.id === questions[activeQuestion].correctAnswer) {
            
            answerCheck.textContent = 'Correct!'
            
        } else {
            
            answerCheck.textContent = 'Incorrect!'

        }
        answers.innerHTML = ''; //Delete ALL CHILDREN
        
        activeQuestion++
    
        if(activeQuestion != questions.length){
            quiz(activeQuestion)
        }
    })
    btnId = 0;
       
}

var quiz = function(actQ) {

    buildQuestion(actQ);
}

onPageLoad();

startBtn.addEventListener('click', startQuiz);
