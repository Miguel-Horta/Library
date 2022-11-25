const harryPotter1 = new makeBook("Harry Potter and the Philosopher's Stone", "J.K. Rowling", "400","Yes");
console.log(harryPotter1.info());
let myLibrary = [];
document.getElementById("deleteBtn").onclick = function(){deleteBook(this)};

function myFunction() {
  document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
}

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
  
  if(myLibrary.length !== 0 && document.getElementById("name").value !== "")
  {
    const books = document.querySelector('#books');
    const clone = books.cloneNode(true);
    clone.id = 'book';
    books.after(clone);
    document.getElementById("name").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
    document.querySelector("#readed").checked = false;
    document.getElementById("name").disabled = false;
    document.getElementById("author").disabled = false;
    document.getElementById("pages").disabled = false;
    document.querySelector("#readed").disabled = false;
    document.getElementById("saveBtn").disabled = false;
    document.getElementById("saveBtn").textContent = "Save";
    document.getElementById("deleteBtn").style.visibility = "hidden";
  } 
}

function saveValues(){
  const title = document.getElementById("name").value;
  if (isEmpty(title) === true)
  {
    alert("Book name cannot be empty")
    return;
  }
  const author = document.getElementById("author").value;
  if (isEmpty(author) === true)
  {
    alert("Author name cannot be empty")
    return;
  }
  const pages = document.getElementById("pages").value;
  if (isEmpty(pages) === true)
  {
    alert("A book without pages?")
    return;
  }
  const readed = document.querySelector("#readed").checked;
  
  const book = new makeBook(title,author,pages,readed);
  myLibrary.push(book); 
  document.getElementById("name").disabled = true;
  document.getElementById("author").disabled = true;
  document.getElementById("pages").disabled = true;
  document.querySelector("#readed").disabled = true;
  document.getElementById("saveBtn").disabled = true;
  document.getElementById("saveBtn").textContent = "Saved";
  document.getElementById("deleteBtn").style.visibility = "visible";
}

function isEmpty(str) {
  return !str.trim().length;
}

const isHidden = elem => {
  const styles = window.getComputedStyle(elem)
  return styles.display === 'none' || styles.visibility === 'hidden'
}

const deleteBook = name => {
  alert("You deleted book: " + name);
}