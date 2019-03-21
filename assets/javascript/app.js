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

var q1 = {
    question: "What is the name of Jon's Direwolf?",
    correct: "Ghost",
    choices: {
        answer1: "Shaggy Dog",
        answer2: "Grey Hound",
        answer3: "Ghost",
        answer4: "Shadowfax"
    }
}
var q2 = {
    question: "In the first episode, King Robert Baratheon says 'In my dreams, I kill him every night.' To whome is the king referring and why?",
    correct: "Rhaegar Targaryen because he kidnapped Lyanna Stark.",
    choices: {
        answer1: "Samewell Tarly because he is willing to risk his life to rescue the wildling girl Gilly.",
        answer2: "Missandei because she rose to chief advisor to Daenerys Targeryen.",
        answer3: "Meera Reed because she helps Bran Stark past the Wall to the lair of the Three-Eyed Raven.",
        answer4: "Rhaegar Targaryen because he kidnapped Lyanna Stark."
    }
}
var q3 = {
    question: "How many fingertips did Stannis Baratheon chop off of Davos' hand(s)?",
    correct: "Four",
    choices: {
        answer1: "Five",
        answer2: "One",
        answer3: "Four",
        answer4: "Two"
    }
}
var q4 = {
    question: "Which chemical was used during the Battle of Blackwater to destroy Stannis Baratheon's fleet?",
    correct: "Wildfire",
    choices: {
        answer1: "Wildfire",
        answer2: "Feruchemy",
        answer3: "Stormlight",
        answer4: "Sureblood"
    }
}
var q5 = {
    question: "Who created the first White Walker?",
    correct: "The Children of the Forest",
    choices: {
        answer1: "Grey Wind",
        answer2: "The Children of the Forest",
        answer3: "The Others",
        answer4: "The Wildlings"
    }
}

// count down from 45 sec
// at 0 remove all text and display correct answer with picture
// reset to 45 sec every question
    // remove when correct question is shown
function timer(){
var timeLeft = 45;
var countDown = setInterval (function(){
    $('#display-time').text("Time Remaining: " + timeLeft + " Seconds");
    timeLeft -= 1;
    if (timeLeft <= 0){
        clearInterval(countDown);
    }
}, 1000);

}

$('.timer').on("click",timer);