// initially both users' scores = 0
let userScore = 0,
    computerScore = 0,
    round = 1;

let userChoice;
let computerChoice;

function startGame(element) {
    $(element).fadeOut();
    $('#play').fadeIn(1000);
    $('#win').fadeOut();
    round = 1, userScore = 0, computerScore = 0;
    $('#p-score').html(userScore);
    $('#c-score').html(computerScore);
    $('#round').html(round)
}

$('.play').on('click', function () {
    console.log(this.id)
    userChoice = this.id;
    play(this.id);
})

function play(user) {
    if (round != 6) {
        $('#round').html(round);
        userChoice = user;
        // generates random play of computer
        computerChoice = Math.random();
        if (computerChoice < 0.34) {
            computerChoice = "rock";
        } else if (computerChoice <= 0.67) {
            computerChoice = "paper";
        } else {
            computerChoice = "scissors";
        }
        compare();
    }
    if (round == 6) {
        displayResult();
    }
}

// function that compares user's choice and computer choice
function compare() {
    if (userChoice === computerChoice) {
        $('#player').html(`<img src="assets/img/` + userChoice + `.png">`);
        $('#computer').html(`<img src="assets/img/` + computerChoice + `.png">`);
        $('#p-score').html(userScore);
        $('#c-score').html(computerScore);
        console.log('USER : ' + userChoice);
        console.log('Computer : ' + computerChoice);
        round++;
        return "tie";
    }
    else if (userChoice === "rock") {
        if (computerChoice === "scissors") {
            $('#player').html(`<img src="assets/img/` + userChoice + `.png">`);
            $('#computer').html(`<img src="assets/img/` + computerChoice + `.png">`);
            console.log('USER : ' + userChoice);
            console.log('Computer : ' + computerChoice);
            userScore++;
            round++;
            $('#p-score').html(userScore);
            $('#c-score').html(computerScore);
            return "rock wins"
        }
        else if (computerChoice === "paper") {
            $('#player').html(`<img src="assets/img/` + userChoice + `.png">`);
            $('#computer').html(`<img src="assets/img/` + computerChoice + `.png">`);
            console.log('USER : ' + userChoice);
            console.log('Computer : ' + computerChoice);
            computerScore++;
            round++;
            $('#p-score').html(userScore);
            $('#c-score').html(computerScore);
            return "paper wins";
        }
    }
    else if (userChoice === "paper") {
        if (computerChoice === "scissors") {
            $('#player').html(`<img src="assets/img/` + userChoice + `.png">`);
            $('#computer').html(`<img src="assets/img/` + computerChoice + `.png">`);
            console.log('USER : ' + userChoice);
            console.log('Computer : ' + computerChoice);
            computerScore++;
            round++;
            $('#p-score').html(userScore);
            $('#c-score').html(computerScore);
            return "scissors win"
        }
        else if (computerChoice === "rock") {
            $('#player').html(`<img src="assets/img/` + userChoice + `.png">`);
            $('#computer').html(`<img src="assets/img/` + computerChoice + `.png">`);
            console.log('USER : ' + userChoice);
            console.log('Computer : ' + computerChoice);
            userScore++;
            round++;
            $('#p-score').html(userScore);
            $('#c-score').html(computerScore);
            return "paper wins";
        }
    }
    else if (userChoice === "scissors") {
        if (computerChoice === "paper") {
            $('#player').html(`<img src="assets/img/` + userChoice + `.png">`);
            $('#computer').html(`<img src="assets/img/` + computerChoice + `.png">`);
            console.log('USER : ' + userChoice);
            console.log('Computer : ' + computerChoice);
            userScore++;
            round++;
            $('#p-score').html(userScore);
            $('#c-score').html(computerScore);
            return "scissors win"
        }
        else if (computerChoice === "rock") {
            $('#player').html(`<img src="assets/img/` + userChoice + `.png">`);
            $('#computer').html(`<img src="assets/img/` + computerChoice + `.png">`);
            console.log('USER : ' + userChoice);
            console.log('Computer : ' + computerChoice);
            computerScore++;
            round++;
            $('#p-score').html(userScore);
            $('#c-score').html(computerScore);
            return "rock wins";
        }
    }

}
// function that displayes the results at the end pf the game
function displayResult() {
    console.log("YOU : " + userScore);
    console.log("Computer : " + computerScore);
    $('#win').fadeIn(1000);
    $('#start').fadeIn(1000);
    $('#play').fadeOut();
    if (userScore > computerScore) {
        console.log("YOU WON !!");
        $('#win').html("YOU WON !!");
    }
    else if (userScore < computerScore) {
        console.log("Computer WON");
        $('#win').html("Computer WON");
    }
}