'use strict';

let form = document.getElementById('userEnter');
let cardsBox = document.getElementById('cards');
let outerContainer;
let img;
let innerContainer;
let book;
let cat;
let disc;
let available;
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

//books
function books() {
  new Book ('tortora anatomy','https://airbooks.org/wp-content/uploads/2020/12/Principles-of-Human-Anatomy-13th-13E-Gerard-Tortora-330x452.jpg','medical','principles of human anatomy');
  new Book ('surgical recall','https://images-na.ssl-images-amazon.com/images/I/51U2q3Apb+L._SX312_BO1,204,203,200_.jpg','medical','general surgery');
  new Book ('pathoma','https://3.bp.blogspot.com/-UygB6ixcwD8/XAv7AQqP30I/AAAAAAAAFLQ/3BnH6dhiPGMLtVB5wgPIxvwYz4b4wFmfwCLcBGAs/s1600/Fundamentals-of-Pathology-Pathoma-2017.jpg','medical','summery for human pathologies');
  new Book ('structural analysis','https://images-na.ssl-images-amazon.com/images/I/51eJSRwXxdL._SX423_BO1,204,203,200_.jpg','engineering','structural analysis and design');

}
books();




localStorageGet();
let arr=[];
function renderBooks() {

  while (cardsBox.firstChild) {
    cardsBox.removeChild(cardsBox.firstChild);
  }

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

    arr.push(bookName);



  }
}

renderBooks();




document.getElementById('cat').onchange = function select() {
  let selected = document.getElementById('cat').value;
  while (outerContainer.firstChild) {
    outerContainer.removeChild(outerContainer.firstChild);
  }

  for (let i = 0; i < allBooks.length; i++) {
    if (allBooks[i].category === selected) {

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


      // available= document.createElement('p');
      // innerContainer.appendChild(available);
      // if (allBooks[i].availability === true) {
      //   available.textContent='status: available';
      // }else if (allBooks[i].availability === false) {
      //   available.textContent='status: unavailable';
      // }


      // disc= document.createElement('p');
      // innerContainer.appendChild(disc);
      // disc.textContent=`Discription: ${allBooks[i].discription}`;
    }
  }
  if(selected === 'All'){
    renderBooks();
  }
};







div2.addEventListener('click',navigate);

function navigate(event) {
  console.log(event);
  for (let i = 0; i < allBooks.length; i++) {
    if (bookName === allBooks[i].bookName) {
      localStorage.setItem('pressed',JSON.stringify(allBooks[i]));
    }
  }

  window.location.href = 'https://www.w3schools.com/howto/howto_css_zoom_hover.asp';
}



// taking info from user

form.addEventListener('submit',handleSubmitting);
function handleSubmitting(event) {

  console.log(event);
  event.preventDefault();
  let bName = event.target.book.value;
  let userName = event.target.yourName.value;
  let location = event.target.location.value;
  for (let i = 0; i < allBooks.length; i++) {
    if (allBooks[i].bookName.toLowerCase() === bName.toLowerCase()) {
      if (allBooks[i].availability === true) {
        allBooks[i].availability=false;
        alert(`${userName} you ordered ${bName} book, it will be delivered as soon as possible to: ${location}`);
        break;
      }else if (allBooks[i].availability === false) {
        alert(`${userName} sorry ${bName} book, is unavailable`);
        break;
      }


    }

  }

  renderBooks();
}





function localStorageSet() {
  localStorage.clear();
  localStorage.setItem('Book',JSON.stringify(allBooks));
}




// to get objects from local storage
function localStorageGet() {
  let data = localStorage.getItem('Book');
  let dataParsed = JSON.parse(data);
  if (dataParsed) {
    for (let i = 0; i < dataParsed.length; i++) {
      allBooks.push(dataParsed[i]);
    }
  }
  console.log(allBooks);
}











$.MessageBox('A plain MessageBox can replace Javascript\'s window.alert(), and it looks definitely better...');
