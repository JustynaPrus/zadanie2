const form = document.querySelector("form");
const booksList = document.querySelector("ul");
const storedBooks = [];

window.onload = function () {
  storedBooks.innerHTML = localStorage.getItem("storedBooks");
  booksList.innerHTML = storedBooks.innerHTML;
};

let number = 0;

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const title = document.getElementById("title");
  const author = document.getElementById("author");
  const read = [...document.getElementsByName("read")];
  const category = [...document.getElementsByName("category")];

  const titleValue = title.value;
  const authorValue = author.value;

  if (titleValue === "") {
    alert("Tytuł nie może być pusty!");
  }

  if (authorValue.length < 3) {
    alert("Autor musi zawierać min 3 znaki!");
  }

  let readValue = "";
  let categoryValue = "";

  for (i = 0; i < read.length; i++) {
    if (read[i].checked) {
      readValue = read[i].value;
    }
  }

  for (i = 0; i < category.length; i++) {
    if (category[i].checked) {
      categoryValue = category[i].value;
    }
  }

  number++;

  const itemBook = document.createElement("li");
  itemBook.innerHTML = `
  <p class="number">${number}.</p>
  <p class="cell">${titleValue}</p>
  <p class="cell">${authorValue}</p>
  <p class="smaller_cell">${readValue}</p>
  <p class="cell">${categoryValue}</p>`;

  booksList.appendChild(itemBook);
  localStorage.setItem("storedBooks", booksList.innerHTML);
});
