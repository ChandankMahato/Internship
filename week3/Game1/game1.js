//chalenge 1:your age in days
function ageInDays()
{
var birthYear=prompt('What year were you born')
var ageInDayss = (2024-birthYear)*365;
var h2= document.createElement('h2');
var textAnswer = document.createTextNode('You are ' + ageInDayss + 'days old.');
h2.setAttribute('id', 'ageInDays');
h2.appendChild(textAnswer);
document.getElementById('flex-box-result').appendChild(h2);
}

function reset() 
{
    document.getElementById('ageInDays').remove();
}

//challenge 2:cat generator
function generatecat(){
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src="http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
}

//challenge 3:Rock, Paper, Scissor
//challenge 3:Rock, Paper, Scissor
function rpsGame(yourChoice){
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;

    botChoice = bot(r());
    console.log('Computer choice:', botChoice);

    results = decideWinner(humanChoice, botChoice);
    console.log(results);

    message = finalMessage(results);
    console.log(message);

    rpsFrontEnd(yourChoice.id, botChoice, message);

    // Hide the initial choices (rock, paper, scissors)
    document.getElementById('rock').style.display = 'none';
    document.getElementById('paper').style.display = 'none';
    document.getElementById('scissors').style.display = 'none';
}

function ResetRRS(){
    // Show the initial choices (rock, paper, scissors)
    document.getElementById('rock').style.display = 'inline';
    document.getElementById('paper').style.display = 'inline';
    document.getElementById('scissors').style.display = 'inline';

    // Remove result elements
    var removeDivs = document.querySelectorAll('.rps-result');
    removeDivs.forEach(div => {
        div.remove();
    });
}

function r(){
    return Math.floor(Math.random()*3);
}

function bot(number){
    return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(yourChoice, computerChoice){
    var rpsDatabase = {
        'rock':{'scissors':1, 'rock':0.5, 'paper':0},
        'paper':{'rock':1, 'paper':0.5, 'scissors':0},
        'scissors':{'paper':1, 'scissors':0.5, 'rock':0}
    };

    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}

function finalMessage([yourScore,computerScore]){
    if (yourScore === 0){
        return{'message':'You Lost!', 'color':'red'};
    }else if(yourScore === 0.5){
        return{'message':'You Tied!', 'color':'yellow'};
    }else{
        return{'message':'You Won!', 'color':'green'};
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }
    
    // Remove existing result elements
    var removeDivs = document.querySelectorAll('.rps-result');
    removeDivs.forEach(div => {
        div.remove();
    });

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.className = 'rps-result';
    botDiv.className = 'rps-result';
    messageDiv.className = 'rps-result';

    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] +"' height=150 width=150 style='box-shadow:0px 10px 50px blue'>"
    messageDiv.innerHTML = "<h1 style='color:" + finalMessage['color'] + "; font-size:60px; padding:30px; '>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] +"' height=150 widht=150 style='box-shadow:0px 10px 50px red'>"

    document.getElementById('Challenge-3').appendChild(humanDiv);
    document.getElementById('Challenge-3').appendChild(messageDiv);
    document.getElementById('Challenge-3').appendChild(botDiv);
}


//challenge-4 change the color of all buttons
var button_all = document.getElementsByTagName("button");

let copyAllButtons =[];
for(let i=0; i<button_all.length; i++){
    copyAllButtons.push(button_all[i]);
}
function buttonColorChange(buttonChange){
    if(buttonChange.value === 'red'){
        buttonRed();
    }
    else if(buttonChange.value === 'green'){
        buttongreen();
    }
    else if(buttonChange.value === 'yellow'){
        buttonyellow();
    }
    else if(buttonChange.value === 'blue'){
        buttonblue();
    }
    else if(buttonChange.value === 'tomato'){
        buttontomato();
    }
    else if(buttonChange.value === 'orange'){
        buttonorange();
    }
    else if(buttonChange.value === 'gray'){
        buttongray();
    }
    else if(buttonChange.value === 'reset'){
        buttonreset();
    }
    else if(buttonChange.value === 'random'){
        buttonRandom();
    }

}
function buttonRed(){
    for(let i=0; i<button_all.length; i++){
       button_all[i].classList.remove(button_all[i].classList); 
       button_all[i].classList.add('btn-secondary');
    }

}
function buttonblue(){
    for(let i=0; i<button_all.length; i++){
        button_all[i].classList.remove(button_all[i].classList);
        button_all[i].classList.add('btn-primary');
    }
}
function buttongreen(){
    for(let i=0; i<button_all.length; i++){
        button_all[i].classList.remove(button_all[i].classList);
        button_all[i].classList.add('btn-4');
    }
}
function buttonyellow(){
    for(let i=0; i<button_all.length; i++){
        button_all[i].classList.remove(button_all[i].classList);
        button_all[i].classList.add('btn-3');
    }
}
function buttonorange(){
    for(let i=0; i<button_all.length; i++){
        button_all[i].classList.remove(button_all[i].classList);
        button_all[i].classList.add('btn-1');
    }
}
function buttontomato(){
    for(let i=0; i<button_all.length;i++){
        button_all[i].classList.remove(button_all[i].classList);
        button_all[i].classList.add('btn-2');
    }
}
function buttongray(){
    for(let i=0; i<button_all.length; i++){
        button_all[i].classList.remove(button_all[i].classList);
        button_all[i].classList.add('btn-third');
    }
}
function buttonreset(){
    for(let i=0; i<button_all.length;i++){
        button_all[i].classList.remove(button_all[i].classList);
        button_all[i].classList.add('copyAllButtons[i]')
    }
}
function buttonRandom(){
   var choices = ['btn-primary', 'btn-secondary', 'btn-third', 'btn-1', 'btn-2', 'btn-3', 'btn-4']
   for(let i=0; i<button_all.length;i++){
    let randomNumber = Math.floor(Math.random()*7);
    button_all[i].classList.remove(button_all[i].classList);
    button_all[i].classList.add(choices[randomNumber]);
   }  
}