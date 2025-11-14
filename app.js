console.log("JS works")
const theNumber =   Math.floor(Math.random() * 100) + 1 ;

const inputBlock = document.getElementById('input')
const outputBlock = document.getElementById('output')
const buttonGuesss= document.getElementById('guessButton')
const  history = document.getElementById('histor')
isGuessed =false

buttonGuesss.addEventListener('click',handleClick)
let guesses =0
function handleClick(){
outputBlock.textContent ="";
guesses ++
let guessNumber =parseInt(inputBlock.value);
const li = history
  .appendChild(document.createElement("li"));
console.log(guesses)
if(isGuessed){
   window.location.reload();
}
if(isNaN(guessNumber)){
outputBlock.textContent ="Enter a number between 1 and 100 this counts as a guess"
li.textContent="Guessed: NOT NUMBER  MESSAGE: Enter a number between 1 and 100 this counts as a guess"
document.body.appendChild(history);
return;
}
else if( theNumber==guessNumber){
    outputBlock.textContent ="Congratualations! You have guessed the number in "+guesses+" attempts. Press The Guess Button to start a new guess"
    li.textContent="Guessed: "+guessNumber+"  MESSAGE: GUESSED THE NUMBER in "+guesses+" attempts."
    isGuessed=true
}else if(guessNumber > theNumber){
    outputBlock.textContent ="To High! Try again!"
    li.textContent="Guessed: "+guessNumber+"  MESSAGE: To High! Try again!"
}else if(guessNumber < theNumber){
    outputBlock.textContent ="To Low! Try again!"
    li.textContent="Guessed: "+guessNumber+"  MESSAGE: To Low! Try again!"
}
document.body.appendChild(history);
}


console.log(theNumber)