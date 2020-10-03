import removeFromList from "./removeFromList.js";
import displayAlert from "./displayAlert.js";

export default function createList(books) {
  const listContainer = document.querySelector(".books");

  listContainer.innerHTML = ""; // clean out front end

  if (books.length === 0) { // if NO books display warning
    displayAlert("warning", "Please add some books", ".books");
  }

  books.forEach(book => { // render some boooks
    listContainer.innerHTML += `
      <li>
        <span>${book.title}</span>
        <i class="fa fa-trash" data-item="${book.isbn}"></i>
      </li>`;
  });

  // bind events to trash cans
  const trashCans = document.querySelectorAll("li i");
  trashCans.forEach(function (can) {
    can.addEventListener("click", removeFromList);
  });
}
