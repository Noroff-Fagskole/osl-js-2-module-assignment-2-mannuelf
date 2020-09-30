import { books } from "./data.js";

const LIST_KEY = "books";
let globalBooks = getFromLocalStorage(LIST_KEY);
createList(globalBooks);

const listInput = document.querySelector("#addBooks");
const button = document.querySelector(".button-primary");

button.addEventListener("click", addToList);

function addToList() {
  const bookName = listInput.value.trim();

  if (bookName.length >= 1) {
    const newBook = { isbn: Date.now(), title: bookName };
    listInput.focus();
    globalBooks.push(newBook);
    createList(globalBooks);
    saveToLocalStorage(LIST_KEY, globalBooks);
    listInput.value = "";
  }
}

function createList(books) {
  const listContainer = document.querySelector(".books");
  listContainer.innerHTML = "";

  books.forEach(book => {
    listContainer.innerHTML += `
      <li><span>${book.title}</span>
        <i class="fa fa-trash" data-item="${book.isbn}"></i>
      </li>`;
  });

  const trashCans = document.querySelectorAll("li i");
  trashCans.forEach(function (can) {
    can.addEventListener("click", removeFromList);
  });
}

function removeFromList(e) {
  const idToDelete = e.target.dataset.item;
  console.log(idToDelete);
  const newBooks = globalBooks.filter(book => {
    console.log( idToDelete !== book.isbn);
    return idToDelete !== book.isbn
  });
  console.log(newBooks);
  globalBooks = newBooks;
  createList(globalBooks);
}

function saveToLocalStorage(LIST_KEY, books) {
  localStorage.setItem(LIST_KEY, JSON.stringify(books));
}

function getFromLocalStorage(LIST_KEY) {
  const books = localStorage.getItem(LIST_KEY);
  if (!books) {
    return [];
  }
  return JSON.parse(books);
}
