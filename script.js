const harryPotter1 = new makeBook("Harry Potter and the Philosopher's Stone", "J.K. Rowling", "400","Yes");
console.log(harryPotter1.info());
let myLibrary = [];

function makeBook(title, author, pages, readedBook){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readedBook = readedBook;
    this.info = function (){
        return (title + " by " + author + ", " + 
        pages + " pages, " + readedBook);
    }
} 

function newBook() {

  const book = document.querySelector("#book");
  if (isHidden(book)) {
    book.style.visibility = "visible"
    return;
  }
  
  if(myLibrary.lenght !== 0)
  {
    const books = document.querySelector('#books');
    const clone = books.cloneNode(true);
    clone.id = 'book';
    books.after(clone);
  } 
}

function saveValues(){
  const title = document.getElementById("name").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const readed = document.querySelector("#readed").checked;
  const book = new makeBook(title,author,pages,readed);
  myLibrary.push(book);
  console.log(myLibrary);

  document.getElementById("name").disabled = true;
  document.getElementById("author").disabled = true;
  document.getElementById("pages").disabled = true;
  document.querySelector("#readed").disabled = true;
}

const isHidden = elem => {

  const styles = window.getComputedStyle(elem)
  return styles.display === 'none' || styles.visibility === 'hidden'
}