const input = document.querySelector(".input");
const submit = document.querySelector(".submit");
const reset = document.querySelector(".reset");
const guesses = document.querySelector(".guesses");
const clue = document.querySelector(".clue");
const answer = document.querySelector(".answer");
const remaining = document.querySelector(".remaining");
const guessList = document.createElement("ul");
const therandom = document.querySelector(".therandom");
const instructions = document.querySelector(".directions");
const body = document.querySelector("body");
const title = document.querySelector("h1");
const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const test = document.querySelector(".test");
const please = document.querySelector(".please");
let array = [];



const value = Number(input.value);
guesses.appendChild(guessList);
guessList.style.display = "flex";
guessList.style.width = "80vw";
guessList.style.flexWrap = "wrap";
guessList.style.gap = "0 3rem";
guessList.style.transform = "translatex(20px)";



let x = 10;


remaining.innerHTML = `${x}`;



function eleven(value) {
  return Math.floor(Math.random() * value)+1;
};

let randomImg = eleven(11);

//test.innerHTML = `url("images/${randomImg}.jpg")`;
//test.innerHTML = `${randomImg}`;


function randm(value) {
 return Math.floor(Math.random() * value)+1;
}

let random = randm(269);


//therandom.innerHTML = random;






submit.addEventListener("click", () => {
 if (array.includes(input.value)) {
  instructions.style.background = "red";
  instructions.innerHTML = "You have already guessed this number!";
  clue.innerHTML = "";
  } else if (submit.getAttribute("class") == "submit" && input.value <= 269) {
  submitFunc();
  //instructions.innerHTML = "Please input a number between 1-100";
  instructions.style.background = "none";
} else {
/*
clue.innerHTML = "Please enter a number between 1 to 100";
clue.style.top = "90%";
 clue.style.left = "20px";
 */
 instructions.innerHTML = "Please input a number between 1-269!";
 instructions.style.background = "red";
 input.value = "";
 input.focus();
}
  
});



function pusher() {
 if(input.value !== "") {
   array.push(input.value);
}};





function submitFunc() {
  
const guess = document.createElement("li");
guess.style.listStyleType = "icons";
guess.style.color = "#fc0303";
 pusher();
 guess.innerHTML = array[array.length -1] + "   ";
  if (Number(input.value) === random) {
    //if (array.length > 0 && array.length <= 5) {
      if (array.length == 1) {
 answer.innerHTML = `You got it on your ${array.length}st try! The number was  ${random}!`;
 
    } else if (array.length == 2) {
      answer.innerHTML = `You got it on your ${array.length}nd try! The number was  ${random}!`;
    
    } else if (array.length == 3) {
      answer.innerHTML = `You got it on your ${array.length}rd try! The number was  ${random}!`;
      
    } else if (array.length == 4 || array.length == 5) {
      answer.innerHTML = `You got it on your ${array.length}th try! The number was  ${random}!`;
      
    } else {
      answer.innerHTML = `You got it! The number was  ${random}!`;
      
    }
    clue.innerHTML = "8=======D";
    
 guessList.appendChild(guess);
  reset.setAttribute("class", "reset-1");
  submit.setAttribute("class", "submit-1");
  guessCount();
  body.style.backgroundImage = `linear-gradient(90deg, rgba(0,0,0,.5) 0%, rgba(0,0,0,.5) 100%), url("backgrounds/2.jpeg")`;
    body.style.backgroundSize = "200%";
  submit.style.backgroundImage = `linear-gradient(90deg, rgba(0,0,0,.5) 0%, rgba(0,0,0,.5) 100%), url("images/${randomImg}.jpg")`;
  
submit.style.backgroundSize = "cover";
submit.style.backgroundPosition = "center center";
submit.style.position = "fixed";
  submit.style.top = "3%";
  submit.style.left = "-50%";
  submit.style.transform = "translatex(50%)";
  submit.style.width = "100%";
  submit.style.padding = "50px";
  submit.style.borderRadius ="20px";
  submit.style.aspectRatio = "1/1"
  submit.style.zIndex = -1;
  submit.innerHTML = "";
  
  guess.style.listStyleType = "icon";
  input.style.display = "none";
  input.style.visibility = "hidden";
  instructions.innerHTML = "";
  title.style.color = "white";
  answer.style.color = "white";
  reset.style.display = "block";
  reset.style.visibility = "visible";
  reset.style.top = "60%";
  $("li:last-child").css("color", "#2cfc03");
 
  
      
  
    
    
  }
  else if(isNaN(input.value) || input.value == ""){
  clue.innerHTML = "Please enter a number";
} 
  else if(input.value > random && x == 1){
  clue.innerHTML = "Last guess was too high!";
  answer.innerHTML = "The answer was " + random;
  guessCount();
    guessList.appendChild(guess);
    asd();
} 
else if(input.value < random && x == 1){
  clue.innerHTML = "Last guess was too low!";
  guessCount();
  answer.innerHTML = "The answer was " + random;
    guessList.appendChild(guess);
    asd();
} 
else if (input.value > random) {
    clue.innerHTML = "Your guess was too high!";
    guessCount();
    guessList.appendChild(guess);
    asd();
    input.focus();
  }
  else if (input.value < random) {
    clue.innerHTML = "Your guess was too low!";
   // guess.innerHTML = input.value;
    guessCount();
    guessList.appendChild(guess);
    asd();
    input.focus();
  }
  
  
 input.value = "";
 
};





function asd() {
  if (x === 0){
  input.disabled = true;
  submit.setAttribute("class", "submit-1");
  reset.setAttribute("class", "reset-1");
  body.style.backgroundImage = `linear-gradient(90deg, rgba(0,0,0,.7) 0%, rgba(0,0,0,.7) 100%), url("backgrounds/crying.gif")`;
    body.style.backgroundSize = "200%";
    reset.style.display = "block";
  reset.style.visibility = "visible";
  submit.style.display = "none";
  submit.style.visibility = "none";
  } else if (x === 2 && input.value !== random) {
    body.style.backgroundImage = `linear-gradient(90deg, rgba(0,0,0,.60) 0%, rgba(0,0,0,.60) 100%), url("backgrounds/1.jpeg")`;
    body.style.backgroundSize = "300%";
    body.style.backgroundPosition = "center";
  }
  else if (x === 1 && input.value !== random) {
    body.style.backgroundImage = `linear-gradient(90deg, rgba(0,0,0,.70) 0%, rgba(0,0,0,.70) 100%), url("backgrounds/1.jpeg")`;
    body.style.backgroundSize = "400%";
  body.style.backgroundPosition = "center";
  }
  
};

function guessCount() {
  
  if (x <= 10 && x > 0) {
    x--;
  } 
  remaining.innerHTML = `${x}`;
};



reset.addEventListener("click", () => {
  
  if(reset.getAttribute("class") === "reset-1") {
 random = randm(269);
submit.style.backgroundImage = "none";
randomImg = eleven(11);
//test.innerHTML = `url("images/${randomImg}.jpg")`;
  input.disabled = false;
  x = 10;
  remaining.innerHTML = `${x}`;
  clue.innerHTML = "";
 // therandom.innerHTML = random;
  answer.innerHTML = "";
 guessList.innerHTML = "";
 submit.setAttribute("class", "submit");
  reset.setAttribute("class", "reset");
  body.style.backgroundImage = `linear-gradient(90deg, rgba(0,0,0,.5) 0%, rgba(0,0,0,.5) 100%), url("backgrounds/1.jpeg")`;
    body.style.backgroundSize = "200%";
  body.style.backgroundPosition = "bottom center";
  submit.style.backgroundImg = "none";
  reset.style.display = "none";
  reset.style.visibility = "hidden";
submit.style.display = "block";
  submit.style.visibility = "visible";
  
submit.style.top = "56%";
  submit.style.left = "50%";
  submit.style.transform = "translatex(-50%)";

submit.style.position = "absolute";
  submit.style.width = "40%";
  submit.style.padding = "50px";
  submit.style.borderRadius = "20px";
 submit.style.aspectRatio = "unset";
  submit.style.zIndex = 0;
  submit.innerHTML = "Submit";
  submit.style.fontFamily = `'VT323', monospace`;
  submit.style.fontSize = `2rem`;
 input.style.display = "block";
  input.style.visibility = "visible";
  instructions.innerHTML = "Please input a number between 1-269";
  title.style.color = "black";
  answer.style.color = "black";
// please.style.fontSize = "9rem";
 //submit.style.display = `flex`;
 array = []
 
  } 
});
 



