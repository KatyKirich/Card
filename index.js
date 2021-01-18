const btnSubmit = document.getElementById("btnSubmit");
const data = [];
const desk = document.querySelector(".desk");

function showCard() {
  desk.innerHTML =""
    data.forEach((item) => {
    desk.innerHTML += ` <div class="card"><p class = "title">Title:${item.title}</p>
      <p  class = "description">Description: ${item.description}</p>
    <button id="delBtn">Delete</button>
  <button id="editBtn">Edit</button></div> <br>
  <br>`;
  });
}

function getSearch(event) {
 const div = event.target.closest(".card");

  const cardTitle = div.querySelector(".title");
  const cardDscr = div.querySelector(".description");
 
  let textTitle = cardTitle.textContent;
  let textDscr = cardDscr.textContent;
 console.log()
  
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
    
      getSearch(event)
    }
    if (event.target.closest("#editBtn")) {
      getSearch(event)
    }
  }
);