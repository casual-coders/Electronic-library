'use strict';

let teamMembers = document.getElementsByClassName('teamMember');

let audio = document.getElementById('myAudio');

for (let i = 0; i<teamMembers.length ;i++ ) {
  teamMembers[i].addEventListener('mouseenter' ,playAudio);
}

// eslint-disable-next-line no-unused-vars
function playAudio(event) {
  audio.play();
}
