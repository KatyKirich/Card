const btnSubmit = document.getElementById("btnSubmit");
const data = [];
const desk = document.querySelector(".desk");

function showCard() {
  desk.innerHTML = "";
  data.forEach((item) => {
    desk.innerHTML += ` <div class="card"><p>Title:</p><p class = "title">${item.title}</p> <br /><p>Description:</p>
      <p  class = "description">${item.description}</p>
    <button id="delBtn">Delete</button>
  <button id="editBtn">Edit</button></div> <br>
  <br>`;
  });
}

function getSearch(event) {
  const div = event.target.closest(".card");

  const cardTitle = div.querySelector(".title").textContent;
  const cardDscr = div.querySelector(".description").textContent;

  const index = data.forEach(function (elem, index) {
    if (elem.title === cardTitle && elem.description === cardDscr) {
      return index;
          }
  });
}

function delArray(num){
 data.splice(num , 1)
 showCard()
}

btnSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  const title = document.getElementById("title");
  const dscr = document.getElementById("description");

  data.push({ title: title.value, description: dscr.value });

  showCard();
});

desk.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.closest("#delBtn")) {
    getSearch(event);
    delArray(index)
  }
  if (event.target.closest("#editBtn")) {
    getSearch(event);
  }
});
