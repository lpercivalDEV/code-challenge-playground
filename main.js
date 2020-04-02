
let submit = document.getElementById("reverse");

let text = document.getElementById("reverseInput");

let result = document.getElementsByClassName("result")[0];

let hold;

submit.addEventListener("click", ()=>{
  hold = text.value;
  console.log(hold);
  reverseWord();
})

function reverseWord(text){
  let flip =  hold.split("").reverse("").join("");
  // flip.split("").reverse().join();
  result.innerHTML = flip;



}
