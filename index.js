const input = document.querySelector("input");
const btn = document.querySelector("button");
const body = document.querySelector("body");
const card = document.createElement("div");
const p = document.createElement("p");
card.classList = "card";
card.append(p);
body.append(card);

// btn.addEventListener("click", () => {
//   let url = "https://jsonplaceholder.typicode.com/users";
//   url = `${url}${"?company.name="}${input.value}`;
//   return fetch(url)
//     .then((response) => response.json())
//     .then((jsonData) => {
//       let obj = jsonData.find((item) => item.name);
//       return obj;
//     })
//     .then((obj) => {
//       obj ? (p.innerText = obj.company.name) : (p.innerText = "error");
//       clearInput();
//     });
//   function clearInput() {
//     input.value = "";
//   }
// });

//--------------------------------------------------------

btn.addEventListener("click", () => {
  let url = "https://jsonplaceholder.typicode.com/users";
  url = `${url}${"?company.name="}${input.value}`;
  //   console.log(url);
  fetchData(url);
  async function fetchData(urlData) {
    const response = await fetch(urlData);
    const jsonData = await response.json();
    jsonData.length === 0 ? (p.innerText = "Invalid data!") : jsonData;
    let obj = jsonData.find((item) => item.name);
    // obj ? (p.innerText = obj.company.name) : (p.innerText = "Invalid data!");
    obj ? (p.innerText = obj.company.name) : null;
    clearInput();
  }
  function clearInput() {
    input.value = "";
  }
});

//---------------------------------------------------------

// name: "Romaguera-Crona"
// name: "Deckow-Crist"
// name: "Romaguera-Jacobson"
// name: "Robel-Corkery"
// name: "Keebler LLC"
// name: "Considine-Lockman"
// name: "Johns Group"
// name: "Abernathy Group"
// name: "Yost and Sons"
// name: "Hoeger LLC"
