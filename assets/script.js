var title = document.getElementById('title');
var answers = document.getElementById('answers');
var startBtn = document.getElementById('start-btn');

var questions = [{
    ask: 'which one says red',
    answer: ['blue', 'blue', 'blue', 'red'],
    correctAnswer: 'red'

},
{
    ask: 'select true',
    answer: ['true', 'false', 'false', 'false'],
    correctAnswer: 'true'
}];

var activeQuestion = 0;


// this function starts on game load
var onPageLoad = function() {
    title.textContent = 'Press The Button Below to Start';
    startBtn.textContent = 'Start';

}

var startQuiz = function() {
    startBtn.parentNode.removeChild(startBtn)


    for (i = 0; i < questions.length; i++) {
        //builds question
        title.textContent = questions[activeQuestion].ask;

        //builds answers
        for (var i = 0; i < questions[activeQuestion].answer.length; i++) {
            var item = document.createElement('button');
            item.className = 'btn'
            item.textContent = questions[activeQuestion].answer[i];
            answers.appendChild(item);
        }

        
    }
}

onPageLoad();

startBtn.addEventListener('click', startQuiz);
