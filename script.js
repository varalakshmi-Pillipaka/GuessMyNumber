'use strict';
let secret_number=Math.trunc(Math.random()*20+1);
let score=20;
let highscore=0;
//for getting the number
const displayMessage=function(message){
    document.querySelector('.message').textContent=message;
};
//on clicking the button
document.querySelector('.check').addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value);
    console.log(guess,typeof guess);
    //if no number entered
    if(!guess){
        displayMessage('😤No Number');
    }
    //if the guess is equals to actual number
    else if(guess===secret_number){
        displayMessage('🎉Yayyy Correct Guess');
        document.querySelector('.number').textContent=secret_number;
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width='30rem';
        if(score>highscore){
            highscore=score;
            document.querySelector('.highscore').textContent=highscore;
        }
    }
    else if(guess!==secret_number){
        //if the score is not equals to zero
        if(score>1){
            //if the guess is either high or low
            displayMessage(guess>secret_number? 'Your guess is Too high📈' : 'Your guess is too low📉');
            score--;
            document.querySelector('.score').textContent=score;

        }
        else{
            //if the score is equals to zero
            displayMessage('🤣You lost the game');
            document.querySelector('.score').textContent=0;
        }
    }
})
//again function for restarting the game
document.querySelector('.again').addEventListener('click',function(){
    score=20;
    secret_number=Math.trunc(Math.random()*20)+1;
    displayMessage('Start Guessing...');
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';

    });