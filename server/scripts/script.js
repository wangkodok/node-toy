const h1 = document.querySelector("h1");
console.log(h1);

let num = 1;

setInterval(() => {
  h1.innerText = "";
  h1.innerText = h1.innerText + num;
  num = num + 1;
}, 1000);
