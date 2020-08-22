var title = document.getElementById('title');
var answers = document.getElementById('answers');
var startBtn = document.querySelector('.start-btn');
var answerCheck = document.querySelector('.answerCheck')
var btnId = 0
var activeQuestion = 0;
var endQuiz = false;

var questions = [{
    ask: 'which one says red',
    answer: ['blue', 'yellow', 'green', 'red'],
    correctAnswer: '3'

},
{
    ask: 'select true',
    answer: ['true', 'false', 'false', 'false'],
    correctAnswer: '0'
},
{
    ask: 'select ass',
    answer: ['yes', 'no', 'sometimes', 'ass'],
    correctAnswer: '3'
}];




// this function starts on game load
var onPageLoad = function() {
    title.textContent = 'Press The Button Below to Start';
    startBtn.textContent = 'Start';
}

var startQuiz = function() {
    startBtn.parentNode.removeChild(startBtn)

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

    answerQuestion();
    
    
}

var answerQuestion = function(){
    
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
    console.log("Starting quiz with question # " + actQ)
    buildQuestion(actQ);

}

onPageLoad();

startBtn.addEventListener('click', startQuiz);
