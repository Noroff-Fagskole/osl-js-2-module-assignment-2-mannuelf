export function saveToLocalStorage(LIST_KEY, books) {
  localStorage.setItem(LIST_KEY, JSON.stringify(books));
}

export function getFromLocalStorage(LIST_KEY) {
  const books = localStorage.getItem(LIST_KEY);
  if (!books) {
    return [];
  }
  return JSON.parse(books);
}
