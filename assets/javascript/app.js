// questions, answers stored in an object
// timer counting down 
// when 0 display out of time
// shows correct answer
// moves on to next question
// press start to start game
// on click 
// if wrong displays right answer
// increment right/wrong counter to keep track of score
// with no user input it moves on to next question
// last page displays score
// restarts game after click or timer
// does not reload the page!
// ********** STYLE ***********
// buttons highlight on hover
// display picture with right answer display

var questions = [
    {
        question: "What is the name of Jon's Direwolf?",
        correct: "Ghost",
        choices: [
            "Shaggy Dog",
            "Grey Hound",
            "Ghost",
            "Shadowfax"]

    },

    {
        question: "In the first episode, King Robert Baratheon says 'In my dreams, I kill him every night.' To whome is the king referring and why?",
        correct: "Rhaegar Targaryen because he kidnapped Lyanna Stark.",
        choices: [
            "Samewell Tarly because he is willing to risk his life to rescue the wildling girl Gilly.",
            "Missandei because she rose to chief advisor to Daenerys Targeryen.",
            "Meera Reed because she helps Bran Stark past the Wall to the lair of the Three-Eyed Raven.",
            "Rhaegar Targaryen because he kidnapped Lyanna Stark."]

    },

    {
        question: "How many fingertips did Stannis Baratheon chop off of Davos' hand(s)?",
        correct: "Four",
        choices: [
            "Five",
            "One",
            "Four",
            "Two"]

    },

    {
        question: "Which chemical was used during the Battle of Blackwater to destroy Stannis Baratheon's fleet?",
        correct: "Wildfire",
        choices: [
            "Wildfire",
            "Feruchemy",
            "Stormlight",
            "Sureblood"]
    },

    {
        question: "Who created the first White Walker?",
        correct: "The Children of the Forest",
        choices: ["Grey Wind",
            "The Children of the Forest",
            "The Others",
            "The Wildlings"]

    }];

display();
// display stuff places
function display() {

    var correct = 0;
    var incorrect = 0;

    $('.center-answers').empty();


    function randQuestion() {
    
        var randQuest = questions[Math.floor(Math.random() * 5)];
        $('.questions').append(randQuest.question);
        questionCall(randQuest);
        return randQuest;
    }

    var currentQuestion = randQuestion();

    function questionCall(questions) {
        $('.center-answers').empty();
        for (var j = 0; j < questions.choices.length; j++) {
            $('.center-answers').append("<button class='test'>" + questions.choices[j] + "</button>");
        }
        $('button.test').on("click", function () {
            // console.log("f");
            var doc = $(this);
            answerCheck(doc.text());
            console.log(doc.text());
           
        });
    }

    function answerCheck(answer) {
        if (answer === currentQuestion.correct) {
            alert("true");
            correct++;
            // console.log('a');
            randQuestion();
            // console.log('b')
        } else {
            incorrect++;
            // console.log('c');
            randQuestion();
            // console.log('d')
        }
        
        console.log(correct);
        console.log(incorrect);
    }


}





// count down from 45 sec
// at 0 remove all text and display correct answer with picture
// reset to 45 sec every question
// remove when correct question is shown
function timer() {
    var timeLeft = 45;
    var countDown = setInterval(function () {
        $('#display-time').text("Time Remaining: " + timeLeft + " Seconds");
        timeLeft -= 1;
        if (timeLeft >= 0) {
            clearInterval(countDown);
        }
    }, 1000);

}

$('.timer').on("click", timer);