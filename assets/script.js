var title = document.getElementById('title');
var answers = document.getElementById('answers');
var startBtn = document.getElementById('start');
var answerCheck = document.querySelector('.answerCheck')
var time = document.getElementById('timeLeft')
var scoreBoard = document.getElementById('scoreBoard')
var Restart = document.getElementById('reStart')
var saveScore = document.getElementById('saveScore')
var userNameInput = document.getElementById('userName')
var btnId = 0
var activeQuestion = 0;
var timeLeft = 59;
var end = 1;


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
    answer: ['1', '2', '3', '4'],
    correctAnswer: '1'
},
{
    ask: 'select g',
    answer: ['g', 'h', 'j', 'k'],
    correctAnswer: '0'
}];




function countdown() {

    // Use setInterval to call a function every second
    var timeInterval = setInterval(function () {

        if (end === 2) { // if the game is in the end game
            //stops timer and shows your score
            clearInterval(timeInterval)
            time.textContent = 'Your score is: ' + timeLeft
        } else if (timeLeft === 0) { //if time runs out
            //stops timer and gives you option to restart
            clearInterval(timeInterval)
            time.textContent = 'You ran out of time!'
            answers.parentNode.removeChild(answers)
            restart()
        } else { //if game is not in end game
            //updates timer by subtracting 1 from timeLeft and displays it
            time.textContent = 'Time Remaining: ' + timeLeft
            timeLeft--

        }

    }, 1000);
}




var restart = function () {
    reStart.setAttribute('class', 'btn start-btn')
    Restart.textContent = 'Restart?'
}

// this function starts on game load
var onPageLoad = function () {
    title.textContent = 'Press The Button To Start!';
    startBtn.textContent = 'Start';
    scoreBoard.textContent = 'Current Highscore: ' + localStorage.getItem('username') + ' - ' + localStorage.getItem('score')
}

var startQuiz = function () {
    //startBtn.parentNode.removeChild(startBtn)
    startBtn.setAttribute('class', 'btn start-btn remove')
    time.textContent = 'Time Remaining: 60'
    countdown()
    quiz(activeQuestion)
}

var buildQuestion = function (activeQuestion) {
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

    //calls checkAns function when you click an answer
    answers.addEventListener('click', checkAns)
    btnId = 0;


}

//checks to see if your answer is correct
var checkAns = function () {
    if (event.target.id === questions[activeQuestion].correctAnswer) {
        //if correct display correct and move to next question
        answerCheck.textContent = 'Correct!'

    } else {
        //if wrong subtract time by 5 and move to next question
        answerCheck.textContent = 'Incorrect!'
        decrementTime(5)
    }

    answers.innerHTML = ''; //Delete ALL CHILDREN

    //moves to next question in questions array
    activeQuestion++

    // checks to see if you are at last question
    if (activeQuestion != questions.length) {
        //if not at last question - continues
        quiz(activeQuestion)
    } else {
        //if at last question moves to endgame
        endGame()
    }
}

//removes 5 from timeLeft
var decrementTime = function (number) {
    timeLeft -= 5
}

var quiz = function (actQ) {

    buildQuestion(actQ);

}

var endGame = function () {
    end++
    title.textContent = "You've reached the end! Enter your initials to save your score."
    saveHighScore()
}

var saveHighScore = function() {
    saveScore.setAttribute('class', 'btn scoreBtn')
    userNameInput.classList.remove('remove')

    var userNameInputValue = document.getElementById('userName').value

    saveScore.addEventListener('click', function(){
        var userNameInputValue = document.getElementById('userName').value
        console.log('clicked submit')
        console.log(userNameInputValue)
        if (userNameInputValue === '') {
            window.alert('Enter two characters!')
        } else if (timeLeft > localStorage.getItem('score')) {
            localStorage.setItem('score', timeLeft)
            localStorage.setItem('username', userNameInputValue)
        }
        saveScore.textContent = 'Score Saved!'
        restart()
    })
    

}



onPageLoad();

startBtn.addEventListener('click', startQuiz);

