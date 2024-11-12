const myLibrary = [];

function Book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;

}

function addBookInput(){
    document.getElementById('Book').addEventListener('submit', function(event) {
        event.preventDefault();
        const title = document.querySelector('input[name="title"]').value;
        const author = document.querySelector('input[name="author"]').value;
        const pages = document.querySelector('input[name="pages"]').value;



    const newBook = new Book(title, author, pages)
    myLibrary.push(newBook);
    displayLibrary();
    console.log('book added');
    console.log(myLibrary);
    });
}

addBookInput();

function toggleform() {
    const form = document.getElementById("Book");
    const button = document.querySelector("button");

    if (form.style.display === "none") {
        form.style.display = "block";
        button.textContent = "Hide Form";
        } else {
            form.style.display = "none";
            button.textContent = "Add Book"
        }

}

function displayLibrary() {
    const libraryDiv = document.querySelector(".Library");
    libraryDiv.innerHTML = "";

    myLibrary.forEach((book) => {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book");

        bookDiv.textContent = `Title: ${book.title}, Author: ${book.author}, Pages: ${book.pages}`;

        libraryDiv.appendChild(bookDiv);


    });
}