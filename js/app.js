'use strict';


let form = document.getElementById('userEnter');
let cardsBox = document.getElementById('cards');
let outerContainer;
let img;
let innerContainer;
let book;
let cat;
let disc;
let div2;
let div3;
let div4;
let div5;
let div6;
let div7;
let div8;
let div9;
let bookName;

let allBooks=[];
function Book(bName,path,category,discription) {
  this.bookName=bName;
  this.path=path;
  this.category=category;
  this.discription=discription;
  this.availability=true;

  allBooks.push(this);

}


localStorageGet();

// function renderBooks() {

//   for (let i = 0 ; i < allBooks.length; i++) {

//     outerContainer = document.createElement('div');
//     outerContainer.setAttribute('class','card');
//     cardsBox.appendChild(outerContainer);

//     img = document.createElement('img');
//     img.setAttribute('src',allBooks[i].path);
//     outerContainer.appendChild(img);

//     innerContainer = document.createElement('div');
//     innerContainer.setAttribute('class','container');
//     outerContainer.appendChild(innerContainer);

//     book = document.createElement('h4');
//     innerContainer.appendChild(book);
//     book.textContent=`Book Name: ${allBooks[i].bookName}`;


//     cat= document.createElement('p');
//     innerContainer.appendChild(cat);
//     cat.textContent=`category: ${allBooks[i].category}`;


//     disc= document.createElement('p');
//     innerContainer.appendChild(disc);
//     disc.textContent=`Discription: ${allBooks[i].discription}`;
//   }

// }

function renderBooks() {
  for (let i = 0 ; i < allBooks.length; i++) {

    outerContainer = document.getElementById('div');
    div2 = document.createElement('div');
    div2.setAttribute('class','book');
    outerContainer.appendChild(div2);

    div3 = document.createElement('div');
    div3.setAttribute('class','inner-book');
    div2.appendChild(div3);

    div4 = document.createElement('div');
    div4.setAttribute('class','img');
    div3.appendChild(div4);

    img = document.createElement('img');
    img.setAttribute('src',allBooks[i].path);
    div4.appendChild(img);

    div5 = document.createElement('div');
    div5.setAttribute('class','page');
    div3.appendChild(div5);

    div6 = document.createElement('div');
    div6.setAttribute('class','page page-2');
    div3.appendChild(div6);

    div7 = document.createElement('div');
    div7.setAttribute('class','page page-3');
    div3.appendChild(div7);

    div8 = document.createElement('div');
    div8.setAttribute('class','page page-4');
    div3.appendChild(div8);

    div9 = document.createElement('div');
    div9.setAttribute('class','page page-5');
    div3.appendChild(div9);

    bookName=document.createElement('p');
    bookName.textContent=`${allBooks[i].bookName}`;
    div2.appendChild(bookName);

  }
}


renderBooks();





// taking info from user

form.addEventListener('submit',handleSubmitting);
let count= allBooks.length ;
function handleSubmitting(event) {

  event.preventDefault();
  let bName = event.target.name.value;
  let path = event.target.image.value;
  let discription = event.target.disc.value;
  let category = event.target.cat.value;

  new Book(bName,path,category,discription);

  outerContainer = document.getElementById('div');
  div2 = document.createElement('div');
  div2.setAttribute('class','book');
  outerContainer.appendChild(div2);

  div3 = document.createElement('div');
  div3.setAttribute('class','inner-book');
  div2.appendChild(div3);

  div4 = document.createElement('div');
  div4.setAttribute('class','img');
  div3.appendChild(div4);

  img = document.createElement('img');
  img.setAttribute('src',allBooks[count].path);
  div4.appendChild(img);

  div5 = document.createElement('div');
  div5.setAttribute('class','page');
  div3.appendChild(div5);

  div6 = document.createElement('div');
  div6.setAttribute('class','page page-2');
  div3.appendChild(div6);

  div7 = document.createElement('div');
  div7.setAttribute('class','page page-3');
  div3.appendChild(div7);

  div8 = document.createElement('div');
  div8.setAttribute('class','page page-4');
  div3.appendChild(div8);

  div9 = document.createElement('div');
  div9.setAttribute('class','page page-5');
  div3.appendChild(div9);

  bookName=document.createElement('p');
  bookName.textContent=`${allBooks[count].bookName}`;
  div2.appendChild(bookName);

  count++;
  localStorageSet();
  swal('Succesfully !', 'thank you for donating','success');
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
