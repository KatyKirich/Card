const btnSubmit = document.getElementById("btnSubmit");
const data = [];
const desk = document.querySelector(".desk");

function showCard() {
  data.forEach((item) => {
    desk.innerHTML += ` <div><p>Title:${item.title}</p>
      <p>Description: ${item.description}</p>
    <button id="button">Delete</button>
  <button id="button">Edit</button></div> <br>
  <br>`;
  });
}

const button = document.getElementById("button");

function getSearch() {}

button.addEventListener("click", (event) => {
  if (event.target.closest("#button")) {
    if (event.target.textContent === "Delete") {
    }
    if (event.target.textContent === "Edit") {
    }
  }
});

btnSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  const title = document.getElementById("title");
  const dscr = document.getElementById("description");

  data.push({ title: title.value, description: dscr.value });
  console.log(data);

  showCard();
});
