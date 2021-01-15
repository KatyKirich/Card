const btnSubmit = document.getElementById("btnSubmit");
const data = [];

function showCard(){
    data.forEach(item)=>
}

btnSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  const title = document.getElementById("title");
  const dscr = document.getElementById("description");

  data.push({ title: title.value, description: dscr.value });
  console.log(data);

  
});
