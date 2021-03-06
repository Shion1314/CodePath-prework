// global constants
var clueHoldTime = 250; //how long to hold each clue's light/sound
const cluePauseTime = 200; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
//Global Variables
var tonePlaying = false;

const pattern = []//create an array for pattern

//var pattern = [2, 2, 4, 3, 2, 1, 2, 4,5,2];
var progress = 0; 
var gamePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;
const ARRAY_LENGTH = 10


function startGame(){
 
  for(let i = 0; i<10; i++) { // create an array with 10 different pattern
  const rndInt = Math.floor(Math.random() * 5) + 1 //generate rand int from the range of 1 to 5
  pattern.push(rndInt)} // push them in t
console.log(pattern[0])
    //initialize game variables
    progress = 0;
    gamePlaying = true;
  clueHoldTime=250;
  // swap the Start and Stop buttons
document.getElementById("startBtn").classList.add("hidden");
document.getElementById("stopBtn").classList.remove("hidden");
 
  playClueSequence()
}
function stopGame(){
    //initialize game variables
   
    gamePlaying = false;
  clueHoldTime=250;
  // swap the Start and Stop buttons
document.getElementById("startBtn").classList.remove("hidden");
document.getElementById("stopBtn").classList.add("hidden");
   pattern.splice(0,pattern.length);//clear the int in the array so the player will play with a new pattern
}
// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 520.1
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}




// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)
function lightButton(btn){
  document.getElementById("Button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("Button"+btn).classList.remove("lit")
}
function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}
function playClueSequence(){
  //context.resume()
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime; 
    console.log(clueHoldTime)
    delay += cluePauseTime;
    
  }
}
function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}
function winGame(){
  stopGame();
  alert("Game Over. You WIN");
}
function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  if(pattern[guessCounter] == btn){
    //Guess was correct!
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        //GAME OVER: WIN!
        pattern.splice(0,pattern.length);//clear the int in the array so the player will play with a new pattern
        winGame();
        clueHoldTime=250;
      }else{
        //Pattern correct. Add next segment
        progress++;
       clueHoldTime = clueHoldTime-20;
        playClueSequence();
      }
    }else{
      //so far so good... check the next guess
      guessCounter++;
    }
  }else{
    //Guess was incorrect
    //GAME OVER: LOSE!
    pattern.splice(0,pattern.length);//clear the int in the array so the player will play with a new pattern
    loseGame();
    clueHoldTime=250;
  }
  // add game logic here
}