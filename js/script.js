import { LIST_KEY } from "./utils/constants.js";
import createList from "./components/createList.js";
import { saveToLocalStorage, getFromLocalStorage } from "./utils/storage.js";

let globalBooks = getFromLocalStorage(LIST_KEY);
const listInput = document.querySelector("#addBooks");
const button = document.querySelector(".button-primary");
button.addEventListener("click", addToList);

createList(globalBooks);

function addToList() {
  const bookName = listInput.value.trim();

  if (bookName.length > 0) {
    const newBook = { isbn: Date.now(), title: bookName };
    listInput.value = "";
    listInput.focus();

    globalBooks.push(newBook);

    createList(globalBooks);
    saveToLocalStorage(LIST_KEY, globalBooks);
  }
}
