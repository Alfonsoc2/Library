const myLibrary = [];

function Book(title, author, pages, read = false){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

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

    myLibrary.forEach((book,index) => {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book");

        bookDiv.textContent = `Title: ${book.title}, Author: ${book.author}, Pages: ${book.pages}`;

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove Book";

        removeButton.addEventListener("click", () =>{
            myLibrary.splice(index,1);
            displayLibrary();
        });

        bookDiv.appendChild(removeButton);

        const toggleRead = document.createElement("input");
        toggleRead.type = "checkbox";
        toggleRead.checked = Book.read
        toggleRead.addEventListener("change", () => {
            book.read =toggleRead.checked;
        })  ;



        const readLabel =document.createElement("label");
        readLabel.textContent = "Read";
        
        bookDiv.appendChild(readLabel);
        bookDiv.appendChild(toggleRead)


        libraryDiv.appendChild(bookDiv);


    });
}