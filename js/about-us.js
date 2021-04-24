'use strict';

let teamMembers = document.getElementsByClassName('teamMember');

var audio = document.getElementById("myAudio"); 

for (let i = 0; i<teamMembers.length ;i++ ) {
    teamMembers[i].addEventListener('mouseenter' ,playAudio);
}

function playAudio(event) {
    audio.play();
}