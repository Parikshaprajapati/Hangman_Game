var programming_languages=[
    "camel",
    "crocodile",
    "panda",
    "bear",
    "walrus",
    "seal",
    "polarbear",
    "elephant",
    "giraffe",
    "fox",
    "reindeer",
    "moose",
    "wolf",
    "owl",
    "dog",
    "sheep",
    "lamb",
    "pig",
    "duck",
    "horse",
    "goat",
    "cat",
    "rabbit",
    "donkey",
    "cow",
    "frog",
    "tiger",
    "lion",
    "monkey",
    "turtle"
];


let answer=" ";
let maxWrong=6;
let mistakes=0;
let guessed=[];
let wordStatus=null;

function randomWord(){
 answer=programming_languages[Math.floor(Math.random()*programming_languages.length)];
    console.log(answer);
}

function generateButtons(){
let buttonsHTML='abcdefghijklmnopqrstuvwxyz'.split("").map(letter =>`   
   <button
       class="btn btn-lg btn-primary m-2"
       id='` +letter+ `' 
       onClick="handleGuess('`+letter+`')" 
     >
       ` + letter + ` 
  </button>                                                                     
   ` ).join('');
                                                           
  document.getElementById("keyboard").innerHTML=buttonsHTML;                                                         
}


function handleGuess(chosenLetter){
    guessed.indexOf(chosenLetter)===-1?guessed.push(chosenLetter):null;
    
document.getElementById(chosenLetter).setAttribute("disabled",true);
    if(answer.indexOf(chosenLetter)>=0){
        guessedWord();
        checkIfGameWon();
    }
    else if(answer.indexOf(chosenLetter)===-1){
        mistakes++;     
        updateMistakes(); 
        checkIfGameLost();
        updateHangmanPic();
    }
}

function updateHangmanPic(){
    document.getElementById("hangmanpic").src="./hangMan/"+mistakes+".jpg";
}


function checkIfGameLost(){
    if(mistakes===maxWrong){
        document.getElementById("wordSpotlight").innerHTML="The answer was :"+answer;
        document.getElementById("keyboard").innerHTML="You Lost!!!";
    }
}


function checkIfGameWon(){
    if(wordStatus===answer){
        document.getElementById("keyboard").innerHTML="You Won!!!";
    }
}


function updateMistakes(){
    document.getElementById("mistakes").innerHTML=mistakes;
}

function guessedWord(){
    wordStatus=answer.split('').map(letter =>(guessed.indexOf(letter)>=0?letter:" _ ")).join('');
    document.getElementById("wordSpotlight").innerHTML=wordStatus;
}

function reset(){
    mistakes=0;
    guessed=[];
document.getElementById("hangmanpic").src="./hangMan/0.jpg";
    
    randomWord();
    guessedWord();
    updateMistakes();
    generateButtons();
}


document.getElementById("maxWrong").innerHTML=maxWrong;

randomWord();
generateButtons();
guessedWord();
reset();

