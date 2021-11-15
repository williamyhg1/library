let myLibrary = [];

function Book(title, author, page, read){
    this.title = title.value
    this.author = author.value
    this.page = page.value
    this.read = read.checked
    }


// function addBookToLibrary(book){
//     myLibrary.push(book)
// }

function displayBooks(book){
    
    
    const newrow = document.createElement('tr')
    // newrow.setAttribute(`data-row-${myLibrary.indexOf(book)}`,'')
    
    const newDataTitle = document.createElement('td')
    newDataTitle.textContent = book.title
    // newDataTitle.setAttribute(`data-title-${myLibrary.indexOf(book)}`,'')
    newrow.appendChild(newDataTitle)

    const newDataAuthor = document.createElement('td')
    newDataAuthor.textContent = book.author
    // newDataAuthor.setAttribute(`data-author-${myLibrary.indexOf(book)}`,'')
    newrow.appendChild(newDataAuthor)

    const newDataPage = document.createElement('td')
    newDataPage.textContent = book.page
    // newDataPage.setAttribute(`data-page-${myLibrary.indexOf(book)}`,'')
    newrow.appendChild(newDataPage)

    const newDataRead = document.createElement('td')
    const readBtn = document.createElement('button')
    if(book.read){readBtn.textContent = 'Yes'} else {
        readBtn.textContent = 'No'
    } 
    // readBtn.setAttribute(`data-read`,'')
    readBtn.addEventListener('click',()=>{
        if (readBtn.textContent === 'No'){
            readBtn.textContent = 'Yes'}
        else {
            readBtn.textContent = 'No'
    }})
    newDataRead.appendChild(readBtn)
    newrow.appendChild(newDataRead)

    const newDataDelete = document.createElement('td')
    const deleteBtn = document.createElement('button')
    deleteBtn.addEventListener('click', ()=>{
        table.removeChild(newrow)
    })
    deleteBtn.textContent = 'Delete'
    // deleteBtn.setAttribute(`data-delete-${myLibrary.indexOf(book)}`,'')
    newDataDelete.appendChild(deleteBtn)
    newrow.appendChild(newDataDelete)

    table.appendChild(newrow)
    
}




const submit = document.getElementById('submit')
const table = document.querySelector('[data-table]')
const title = document.getElementById('title')
const author = document.getElementById('author')
const page = document.getElementById('page')
const read = document.getElementById('read')
// const deleteBtn = document.querySelector('[data-delete-1]')
// const datatitle = document.querySelector('[date-title')
// const dataauthor = document.querySelector('[data-author]')
// const datapage = document.querySelector('[data-page]')





submit.addEventListener('click', ()=>{
const newBook = new Book(title, author, page, read);
myLibrary.push(newBook)
title.value = '';
author.value = '';
page.value = '';
read.checked = false;
displayBooks(newBook)
console.log(myLibrary)
})



// deleteBtn.addEventListener('click',()=>{
//     const lastChild = document.querySelector('[data-row-1]')
//     table.removeChild(lastChild)
// })


const form = document.querySelector('.form');
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

// const readBtns = document.querySelectorAll('[data-read]')
// readBtns.forEach(btn=>btn.addEventListener('click',()=>{
//     if (btn.textContent === 'No'){
//         btn.textContent = 'Yes'}
//     else {
//         btn.textContent = 'No'
//     } 
// }))