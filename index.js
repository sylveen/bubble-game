let canvas = document.querySelector('.canvas');
let time = document.querySelector('.time');
let guess = document.querySelector('.guess');
let score = document.querySelector('.score');
makeBubble()

function makeBubble(){
    for(let i = 0; i <36 ; i++){ 
    let randomNumber = Math.floor(Math.random()*10); 
    canvas.innerHTML= canvas.innerHTML + `<div class = "bubble">${randomNumber}</div>`
}
}
let timer = 60;
function setTimer(){
    if(timer >= 0){
        time.innerHTML = `${timer}`
        timer--;
    }
    else{
        canvas.innerHTML = `<div>game over</div> <br> <h1> your score is ${score.innerHTML}</h1>`
        guessNumber = `0`
    }
}
setTimer()
setInterval(setTimer, 700)
 
function guessNumber(){
     let guessnum = Math.floor(Math.random()*10)
     guess.innerHTML = `${guessnum}`
}
guessNumber()

canvas.addEventListener('click', function(event){
     if(event.target.textContent == guess.innerHTML){
         guessNumber()
         canvas.innerHTML = " ";
         incrementScore()
         makeBubble()
          }
})
let scores = 0
function incrementScore(){
      scores= scores+ 10
      score.innerHTML = `${ scores}`
}