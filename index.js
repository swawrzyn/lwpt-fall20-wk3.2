const myButton = document.querySelector("#my-button");
const myInput = document.querySelector("#my-input");
const players = document.querySelector("#players");


const myFunction = () => {
  return 42;
  console.log("heyo");
}

const number = myFunction();



// event listener (the old way)
// myButton.addEventListener("click", (event) => {
//   const newPlayer = myInput.value;
//   if (newPlayer != "") {
//     players.insertAdjacentHTML("beforeend", `<li>${newPlayer}</li>`);
//     myInput.value = "";
//   } else {
//     alert("You're an idiot, put something in.");
//   }
// });

// inline event listener (the new way)
const addPlayerButtonClick = (event) => {
  console.log('event', event);
  const newPlayer = myInput.value;
  if (newPlayer != "") {
    players.insertAdjacentHTML("beforeend", `<li>${newPlayer}</li>`);
    myInput.value = "";
  } else {
    alert("You're an idiot, put something in.");
  }
}

const superify = (element) => {
  element.classList.toggle("super")
};