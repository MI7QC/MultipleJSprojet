"use strict";

function removeTransition(e) {
    if (e.propertyName !== 'transform') return // si il y a pas de touche associer = return donc pas de valeur null.
    e.target.classList.remove('playing'); //remove le css
}
  
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return; // si il y a pas de touche associer = return donc pas de valeur null.
    
    //appliquer une class CSS
    key.classList.add('playing');
    audio.currentTime = 0;  // permet de répéter la touches et de reset le son
    audio.play();  //jouer l'audio
    
  }


const keys = Array.from(document.querySelectorAll('.key')); // crée un tableau de tous les element qui contient la class css .key
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);


