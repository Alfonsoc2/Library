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
    console.log('book added');
    console.log(myLibrary);
    });
}
addBookInput();
