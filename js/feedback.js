'use strict';


let feedbacks = [];


function Feedback(index, rate, feedback) {
  this.index = index;
  this.rate = rate;
  this.feedback = feedback;

  feedbacks.push(this);

}

let userFeedback = document.getElementById('userFeedback');
userFeedback.addEventListener('submit', handleFeedback);

let ul = document.getElementById('feedbackList');

let savedBooks = localStorage.getItem('all books');
savedBooks = JSON.parse(savedBooks);


function handleFeedback(event) {
  event.preventDefault();
  console.log(event);

  let index = event.target.index.value;//e.g.
  let rate = event.target.rate.value;
  let feedback = event.target.feedback.value;

  let review = new Feedback(index, rate, feedback);


  let selectedBook = savedBooks[review.index];

  // renderFeedback();
  let li = document.createElement('li');
  ul.appendChild(li);

  let img=document.createElement('img');
  li.appendChild(img);
  img.setAttribute('src',selectedBook.path);

  let h3 = document.createElement('h3');
  li.appendChild(h3);
  h3.textContent = selectedBook.bookName;

  //stars
  for(let j=1; j<=review.rate;j++){
    let italic=document.createElement('i');
    li.appendChild(italic);
    italic.setAttribute('class','fas fa-star gold');
  }
  for(let j=1; j<=5-review.rate;j++){
    let italic=document.createElement('i');
    li.appendChild(italic);
    italic.setAttribute('class','fas fa-star gray');
  }


  let p = document.createElement('p');
  li.appendChild(p);
  p.textContent =review.feedback;

  saveToLS();
  // eslint-disable-next-line no-undef
  swal('Successfully !', 'Your feed submitted','success');
}


function saveToLS() {
  localStorage.setItem('reviews', JSON.stringify(feedbacks));
}


function getFromLS() {
  let savedReviews = localStorage.getItem('reviews');
  savedReviews = JSON.parse(savedReviews);
  if (savedReviews) {
    feedbacks = savedReviews;
  }

  renderFeedback();

}


function renderFeedback() {

  console.log(savedBooks);
  // console.log(savedBooks[3].bookName);

  for (let i = 0; i < feedbacks.length; i++) {
    let selectedBook = savedBooks[feedbacks[i].index];

    let li = document.createElement('li');
    ul.appendChild(li);

    let img=document.createElement('img');
    li.appendChild(img);
    img.setAttribute('src',selectedBook.path);

    let h3 = document.createElement('h3');
    li.appendChild(h3);
    h3.textContent = selectedBook.bookName;

    //stars
    for(let j=1; j<=feedbacks[i].rate;j++){
      let italic=document.createElement('i');
      li.appendChild(italic);
      italic.setAttribute('class','fas fa-star gold');
    }
    for(let j=1; j<=5-feedbacks[i].rate;j++){
      let italic=document.createElement('i');
      li.appendChild(italic);
      italic.setAttribute('class','fas fa-star gray');
    }


    let p = document.createElement('p');
    li.appendChild(p);
    p.textContent = feedbacks[i].feedback;

  }
}

getFromLS();

function renderBookNames() {

  let select = document.getElementById('index');

  for (let i = 0; i < savedBooks.length; i++) {
    let option = document.createElement('option');
    select.appendChild(option);
    option.setAttribute('value', i);
    option.textContent = savedBooks[i].bookName;

  }

}

renderBookNames();


