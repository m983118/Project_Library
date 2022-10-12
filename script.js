//function
function addBook() {  
    addForm.style.display = "block";
    cover.style.display = "block";
  }
  
  function refreshCard() {
    for (book of myLibrary) {
      const card = document.createElement("div");
      card.classList.add("card");
    
      const title = document.createElement("p");
      title.textContent = `Title : ${book.title}`
      card.appendChild(title);
  
      const author = document.createElement("p");
      author.textContent = `Author : ${book.author}`
      card.appendChild(author);
  
      const pages = document.createElement("p");
      pages.textContent = `Pages : ${book.pages}`
      card.appendChild(pages);
  
      const isRead = document.createElement("p");
      isRead.textContent = `Read : ${book.isRead}`
      card.appendChild(isRead);
  
      const removeButton = document.createElement("button");
      removeButton.textContent = "remove"
      card.appendChild(removeButton);
  
      container.appendChild(card);
    }
  }
  
  function summit() {  
    addForm.style.display = "none";
    cover.style.display = "none";
  
    let newBookTitle = document.querySelector("#title").value;
    let newBookAuthor = document.querySelector("#author").value;
    let newBookPages = document.querySelector("#pages").value;
    let newBookIsRead = document.querySelector("#isRead").value;
    let newBook = new Book(newBookTitle, newBookAuthor, newBookPages, newBookIsRead);
    myLibrary.push(newBook);
    
    container.textContent = "";  
    refreshCard();
  }
  
  function defBookFromLibrary(book, lib) {
    lib = lib.filter(target => target.title != book.title) ;
    return lib
  }
  
  function remove(e) {
    console.log(e.target.previousSibling);
  }
  
  
  //data structure
  function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead
  }  
  
  //main
  let myLibrary = [];
  
  const Book1 = new Book("Bambi", "Felix Salten", 30, true);
  const Book2 = new Book("Snow White", "Wilhelm Carl Grimm", 50, true);
  myLibrary.push(Book1);
  myLibrary.push(Book2);
  
  const container = document.querySelector(".container");
  refreshCard();
  const rmBookButtons = document.querySelectorAll(".card button");
  for (button of rmBookButtons) {
    button.addEventListener("click", remove);
  }
  
  const addBookButton = document.querySelector(".addBook");
  addBookButton.addEventListener("click", addBook);
  
  const addForm = document.querySelector(".addForm");
  const cover = document.querySelector(".cover");
  const summitButton = document.querySelector(".summit");
  summitButton.addEventListener("click", summit);