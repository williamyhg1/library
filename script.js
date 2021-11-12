let myLibrary = [];

function Book(title, author, page){
    this.title = title.value
    this.author = author.value
    this.pages = page.value
    }


// function addBookToLibrary(book){
//     myLibrary.push(book)
// }

// function displayBooks(){
//     for (book in myLibrary){
//         console.log(book)
//     }
// }




const submit = document.getElementById('submit')
const table = document.querySelector('.table')
const title = document.getElementById('title')
const author = document.getElementById('author')
const page = document.getElementById('page')
const tableBody = document.querySelector('.tbody')
// const datatitle = document.querySelector('[date-title')
// const dataauthor = document.querySelector('[data-author]')
// const datapage = document.querySelector('[data-page]')

const readBtn = document.querySelector('[data-read]')
readBtn.addEventListener('click',()=>{
    if (readBtn.textContent === 'No'){
        readBtn.textContent = 'Yes'}
    else {
        readBtn.textContent = 'No'
    } 
})


// submit.addEventListener('click', ()=>{
// const newBook = new Book(title, author, page);
// console.log(newBook)
// })
