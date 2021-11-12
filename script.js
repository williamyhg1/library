let myLibrary = [];

function Book(title, author, page){
    this.title = title
    this.author = author
    this.pages = page
    this.isRead = false
    }


function addBookToLibrary(book){
    myLibrary.push(book)
}

function displayBooks(){
    for (book in myLibrary){

    }
}




const harryPotter = new Book('Harry Potter', 'JK Rolling', '250')

const book1 = new Book('ASDD', 'Mark', '300')


addBookToLibrary(harryPotter)
addBookToLibrary(book1)

