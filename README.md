# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Jiaxin Lin**

Time spent: **10** hours spent in total

Link to project: https://glitch.com/edit/#!/melodious-olive-hero 

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

← index.html: This is the main HTML page for gamesite.

← style.css: CSS files add styling rules to your content.

← script.js: If you're feeling fancy you can add interactivity to your site with JavaScript.

Glitch

I built this with Glitch!
Glitch is a friendly community where millions of people come together to build web apps and websites.
## Video Walkthrough (GIF)

![](https://i.imgur.com/IQym63p.gif)
![](https://i.imgur.com/uz3EvgF.gif)
![](https://i.imgur.com/sXiciRI.gif)

## Reflection on this project:
Outside resources: https://javascript.plainenglish.io/how-to-generate-an-array-of-random-numbers-in-javascript-f883de667e84
https://www.javascripttutorial.net/array/4-ways-empty-javascript-array/

1. Overall, this project wasn't anything over my ability since all the necessary instruction by creating this project was already given. However, if I have to mention a few, I will say the part where we have to add the guess function for the users and the optional features of creating a random integer for the game pattern in the game. For the guess function(),  I was genuinely confused about how I would compare the user's input and the random pattern played by the program and how I would allow the code to continue to the following pattern. I ended up fixing it by realizing that I could compare it using the guess counter variable created during the playClueSequence() function. So after every time the user has guessed the correct, we could plus that variable by 1(guess counter), the same thing goes for the progress; I was confused about how to make sure to take count in the progress of the game I use the same way. Of course, that wasn't enough, so I checked the sample answer that was given to fix up the minor mistake I made. For the optional features where I need to create random integers and input them into the pattern array, I know how would I create 10 random integers (for loop) and didn't know how would I push them into an array, but I ended up figuring out from the help of the internet, the website I put in the area of outside resources.
2.  After completing the website game, a few questions came to my mind. One is what exactly is API? I saw that phrase comes multiple when I researched web creation, etc. I searched up its definition but still couldn't understand how that works; all I know is that it's the connection between devices, but I couldn't understand how it works. The second question, for example, a website that provides books for a user to read, obviously has a huge database of books so the website could compare when the user search it up; my question is, how is it possible for a website to hold such a huge data by going fluently, and where do they save the actual book? If they are going to import pdf for all the books they have on their website, wouldn't that be too crowded for a website? How much data can a website hold? And one of the most important questions I want to ask, even if we have the code for our website, how do we allow others to see our website without giving them our code? Basically, how did people share their website throughout the internet?
3. If I have more hours and knowledge of web development, I would like to add extra feature's like a hard mode for the game.The hard mode will shffule the button after each stage is clear so it make it harder to remeber. A character at the corner of the screen that will cheer up the user every time they clear a stag(so it looks more welcome to the user). If the above features were something that I could possibly do with a certain amount of time the next one is really just an idea that I had. If possible I would like to add an option for the user to choose music that they want to play, similar to the magic piano and another similar app so the user can enjoy their music while strength their memory, but it will make the game become super hard to clear(especially on a hard mode when the speed is going up) also the problem with copyright will also create problems with this features.
## Interview Recording URL Link

[My 5-minute Interview Recording][[(Click here for my recording)]](https://www.loom.com/share/7a60b1c5faef421ea2c3473e700bd1ec)


## License

    Copyright [Jiaxin Lin]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.