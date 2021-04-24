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

function renderBooks() {

  while (cardsBox.firstChild) {
    cardsBox.removeChild(cardsBox.firstChild);
  }

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

    available= document.createElement('p');
    innerContainer.appendChild(available);
    if (allBooks[i].availability === true) {
      available.textContent='status: available';
    }else if (allBooks[i].availability === false) {
      available.textContent='status: unavailable';
    }
    disc= document.createElement('p');
    innerContainer.appendChild(disc);
    disc.textContent=`Discription: ${allBooks[i].discription}`;
  }

}

renderBooks();




document.getElementById('cat').onchange = function select() {
  let selected = document.getElementById('cat').value;
  while (cardsBox.firstChild) {
    cardsBox.removeChild(cardsBox.firstChild);
  }

  for (let i = 0; i < allBooks.length; i++) {
    if (allBooks[i].category === selected) {
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

      available= document.createElement('p');
      innerContainer.appendChild(available);
      if (allBooks[i].availability === true) {
        available.textContent='status: available';
      }else if (allBooks[i].availability === false) {
        available.textContent='status: unavailable';
      }


      disc= document.createElement('p');
      innerContainer.appendChild(disc);
      disc.textContent=`Discription: ${allBooks[i].discription}`;
    }
  }
  if(selected === 'All'){
    renderBooks();
  }
};



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





// function localStorageSet() {
//     localStorage.clear();
//     localStorage.setItem('Book',JSON.stringify(allBooks));
//   }




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
