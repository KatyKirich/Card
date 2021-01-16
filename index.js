const btnSubmit = document.getElementById("btnSubmit");
const data = [];
const desk = document.querySelector('.desk')

function showCard(){
    data.forEach ((item)=>{
      desk.innerHTML += ` <div><p>Title:${item.title}</p>
      <p>Description: ${item.description}</p>
    <button>Delete</button>
  <button>Edit</button></div> <br>
  <br>`})

    
}

btnSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  const title = document.getElementById("title");
  const dscr = document.getElementById("description");

  data.push({ title: title.value, description: dscr.value });
  console.log(data);

  showCard()
});
