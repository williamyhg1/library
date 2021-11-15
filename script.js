function Book(title, author, page, read) {
  this.title = title.value;
  this.author = author.value;
  this.page = page.value;
  this.read = read.checked;
}

function displayBooks(book) {
  const newrow = document.createElement("tr");

  const newDataTitle = document.createElement("td");
  newDataTitle.textContent = book.title;
  newrow.appendChild(newDataTitle);

  const newDataAuthor = document.createElement("td");
  newDataAuthor.textContent = book.author;
  newrow.appendChild(newDataAuthor);

  const newDataPage = document.createElement("td");
  newDataPage.textContent = book.page;
  newrow.appendChild(newDataPage);

  const newDataRead = document.createElement("td");
  const readBtn = document.createElement("button");
  if (book.read) {
    readBtn.textContent = "Yes";
  } else {
    readBtn.textContent = "No";
  }
  readBtn.addEventListener("click", () => {
    if (readBtn.textContent === "No") {
      readBtn.textContent = "Yes";
    } else {
      readBtn.textContent = "No";
    }
  });
  newDataRead.appendChild(readBtn);
  newrow.appendChild(newDataRead);

  const newDataDelete = document.createElement("td");
  const deleteBtn = document.createElement("button");
  deleteBtn.addEventListener("click", () => {
    table.removeChild(newrow);
  });
  deleteBtn.textContent = "Delete";
  newDataDelete.appendChild(deleteBtn);
  newrow.appendChild(newDataDelete);

  table.appendChild(newrow);
}

const submit = document.getElementById("submit");
const table = document.querySelector("[data-table]");
const title = document.getElementById("title");
const author = document.getElementById("author");
const page = document.getElementById("page");
const read = document.getElementById("read");

submit.addEventListener("click", () => {
  const newBook = new Book(title, author, page, read);
  if (!title.value || !author.value || !page.value) return;
  displayBooks(newBook);
  title.value = "";
  author.value = "";
  page.value = "";
  read.checked = false;
});

const form = document.querySelector(".form");
function handleForm(event) {
  event.preventDefault();
}
form.addEventListener("submit", handleForm);
