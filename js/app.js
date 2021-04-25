'use strict';


let form = document.getElementById('userEnter');
let cardsBox = document.getElementById('cards');
let outerContainer;
let img;
let innerContainer;
let book;
let cat;
let disc;

let allBooks=[];
function Book(bName,path,category,discription) {
  this.bookName=bName;
  this.path=path;
  this.category=category;
  this.discription=discription;

  allBooks.push(this);

}


localStorageGet();

function renderBooks() {

  for (let i = 0 ; i < allBooks.length; i++) {

    outerContainer = document.createElement('div');
    outerContainer.setAttribute('class','card');
    cardsBox.appendChild(outerContainer);

    img = document.createElement('img');
    img.setAttribute('src',allBooks[i].path);
    outerContainer.appendChild(img);

    innerContainer = document.createElement('div');
    innerContainer.setAttribute('class','container');
    outerContainer.appendChild(innerContainer);

    book = document.createElement('h4');
    innerContainer.appendChild(book);
    book.textContent=`Book Name: ${allBooks[i].bookName}`;


    cat= document.createElement('p');
    innerContainer.appendChild(cat);
    cat.textContent=`category: ${allBooks[i].category}`;


    disc= document.createElement('p');
    innerContainer.appendChild(disc);
    disc.textContent=`Discription: ${allBooks[i].discription}`;
  }

}

renderBooks();





// taking info from user

form.addEventListener('submit',handleSubmitting);
let count=0;
function handleSubmitting(event) {

  // event.preventDefault();
  let bName = event.target.name.value;
  let path = event.target.image.value;
  let discription = event.target.disc.value;
  let category = event.target.cat.value;

  new Book(bName,path,category,discription);

  outerContainer = document.createElement('div');
  outerContainer.setAttribute('class','card');
  cardsBox.appendChild(outerContainer);

  img = document.createElement('img');
  img.setAttribute('src',allBooks[count].path);
  outerContainer.appendChild(img);

  innerContainer = document.createElement('div');
  innerContainer.setAttribute('class','container');
  outerContainer.appendChild(innerContainer);

  book = document.createElement('h4');
  innerContainer.appendChild(book);
  book.textContent=`Book Name: ${allBooks[count].bookName}`;


  cat= document.createElement('p');
  innerContainer.appendChild(cat);
  cat.textContent=`category: ${allBooks[count].category}`;


  disc= document.createElement('p');
  innerContainer.appendChild(disc);
  disc.textContent=`Discription: ${allBooks[count].discription}`;

  count++;
  localStorageSet();

}




// to save objects in localstorage
function localStorageSet() {
  localStorage.setItem('Book',JSON.stringify(allBooks));
}



// to get objects from local storage
function localStorageGet() {
  let data = localStorage.getItem('Book');
  let dataParsed = JSON.parse(data);
  console.log(dataParsed);
  if (dataParsed) {
    allBooks=dataParsed;
  }
}
