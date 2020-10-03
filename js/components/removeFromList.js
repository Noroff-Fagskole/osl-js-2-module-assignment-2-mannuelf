import { LIST_KEY } from "../utils/constants.js";
import { getFromLocalStorage, saveToLocalStorage } from "../utils/storage.js";
import createList from "./createList.js";

let locallyStoredBooks = getFromLocalStorage(LIST_KEY);

export default function removeFromList(e) {
  const idToDelete = e.target.dataset.item;

  const filteredBooksArray = locallyStoredBooks.filter(book => {
    return parseInt(book.isbn) !== parseInt(idToDelete);
  });

  locallyStoredBooks = filteredBooksArray

  createList(locallyStoredBooks); // send new book list to create list
  saveToLocalStorage(LIST_KEY, locallyStoredBooks); // save to local store with new books list
}
