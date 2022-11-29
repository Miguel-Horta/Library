let myLibrary = [];

function makeBook(title, author, pages, readBook){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readBook = readBook;
    this.info = function (){
        return (title + " by " + author + ", " + 
        pages + " pages, " + readBook);
    }
}

function newBook() {

  const book = document.querySelector("#book");
  if (isHidden(book)) {
    book.style.visibility = "visible"
    return;
  }
}

function createBookElement(name) {
  const booksContainer = document.getElementById('books');
  const bookElement = document.getElementById('book');
  const clone = bookElement.cloneNode(true);
  clone.id = name;
  clone.querySelector("#name").disabled = true;
  clone.querySelector("#author").disabled = true;
  clone.querySelector("#pages").disabled = true;
  clone.querySelector("#read").disabled = true;
  clone.querySelector("#saveBtn").disabled = true;
  clone.querySelector("#saveBtn").textContent = "Saved";
  clone.querySelector("#deleteBtn").onclick = () => {
    if(confirm(`Seguro que quieres borrar ${name}?`)) {
        const bookToDelete = document.getElementById(name);
        booksContainer.removeChild(bookToDelete);
        // quitarlo de mylibrary
     }
  }
  clone.querySelector("#deleteBtn").style.visibility = "visible";
  booksContainer.appendChild(clone);
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
  const read = document.getElementById("read").checked;
  
  const newBook = new makeBook(title,author,pages,read);
  myLibrary.push(newBook);
  // hacer un nuevo libro con id, y agregarle cosas
  createBookElement(title);

  const book = document.getElementById("book");

  book.querySelector("#name").value = "";
  book.querySelector("#author").value = "";
  book.querySelector("#pages").value = "";
  book.querySelector("#read").checked = false;
  book.querySelector("#name").disabled = false;
  book.querySelector("#author").disabled = false;
  book.querySelector("#pages").disabled = false;
  book.querySelector("#read").disabled = false;
  book.querySelector("#saveBtn").disabled = false;
  book.querySelector("#saveBtn").textContent = "Save";
  book.querySelector("#deleteBtn").style.visibility = "hidden";
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