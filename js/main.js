'use strict';
let containerDiv=document.getElementById('scrolldiv');
let testp= document.getElementById('testp');


window.addEventListener('scroll',showDivFunction);

function showDivFunction(){
  let scrolled=window.scrollY;
  console.log(scrolled);
  if(Math.ceil(scrolled)>2215){
    containerDiv.style.visibility='visible';
    testp.style.visibility='visible';
    // containerDiv.style.color='red';
  }
}


