var title = document.getElementById('title');
var answers = document.getElementById('answers');
var startBtn = document.querySelector('.start-btn');
var btnId = 0

var questions = [{
    ask: 'which one says red',
    answer: ['blue', 'blue', 'blue', 'red'],
    correctAnswer: '3'

},
{
    ask: 'select true',
    answer: ['true', 'false', 'false', 'false'],
    correctAnswer: '1'
}];

var activeQuestion = 0;


// this function starts on game load
var onPageLoad = function() {
    title.textContent = 'Press The Button Below to Start';
    startBtn.textContent = 'Start';
}

var startQuiz = function() {
    startBtn.parentNode.removeChild(startBtn)

    quiz()
    
}


var quiz = function() {
    //for (i = 0; i < questions.length; i++) {
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
                console.log('correct')
                quiz()
            } else {
                console.log('incorrect')
            }
        })
    //}
}

onPageLoad();

startBtn.addEventListener('click', startQuiz);
