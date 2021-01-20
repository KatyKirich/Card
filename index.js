const form = document.querySelector(".form");
const btnSubmit = document.getElementById("btnSubmit");
const data = [];
const desk = document.querySelector(".desk");

let index;

const modal = document.getElementsByClassName("modal")[0];
const inpT = document.querySelector("#inpTitle");
const inpD = document.querySelector("#inpDscr");
const closeBtn = document.getElementById("closeBtn");

let newT;
let newD;




function showCard() {
  desk.innerHTML = ""; //очищаем доску, чтобы оно не отрисовывало по нарастающей каждый раз новый массив

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

  inpT.value = cardTitle;
  inpD.value = cardDscr;

  data.forEach(function (elem, ind) {
    if (elem.title === cardTitle && elem.description === cardDscr) {
      index = ind;
    }
    console.log(index);
  });
  // второй способ
  // const ind = data.findIndex(
  //   (elem) => elem.title === title && elem.description === cardDscr
  // );
  // console.log(ind);
}

function redactCard(num) {
  newT = inpT.value;
  newD = inpD.value;

  data.splice(num, 1, { title: newT, description: newD });
  showCard();
}


function delArray(num) {
  console.log(index)
  data.splice(num, 1);
  showCard();
}

function closeModal() {
  modal.style.display = "none";
}



btnSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  const title = document.getElementById("title");
  const dscr = document.getElementById("description");

  data.push({ title: title.value, description: dscr.value });

  showCard();

  form.reset();
});

desk.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.closest("#delBtn")) {
    getSearch(event);
    console.log(index)
    delArray(index);
  }
  if (event.target.closest("#editBtn")) {
    modal.style.display = "block";

    getSearch(event);

  }
});


closeBtn.addEventListener("click", () => {
  closeModal();
});


saveBtn.addEventListener("click", () => {
  closeModal();
  redactCard(index);
});
