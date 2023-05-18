// document.querySelector("#pencil").addEventListener("click", () => {
//   document.querySelector("#groceryItems").textContent = "";
// });

// document.querySelector("#userInput").addEventListener("keydown", (event) => {
//   if (event.key == "Enter") addItem();
// });

// addItem = () => {
//   const item = document.createElement("h2");
//   item.textContent = "- " + document.querySelector("#userInput").value;

//   item.addEventListener("click", () => {
//     if (item.style.textDecoration != "line-through")
//       item.style.textDecoration = "line-through";
//     else item.style.textDecoration = "none";
//   });

//   document.querySelector("#groceryItems").appendChild(item);
//   document.querySelector("#userInput").value = "";
// };

// ====================================================================

const notebook = document.getElementsByClassName("notebook")[0];
const pencil = document.getElementById("pencil");
const userInput = document.getElementById("userInput");
const groceryItems = document.getElementById("groceryItems");

pencil.addEventListener("click", function () {
  groceryItems.innerHTML = "";
});

userInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addItem();
  }
});

function addItem() {
  if (!userInput.value) {
    return;
  }

  const divParent = document.createElement("div");
  const divChild = document.createElement("div");
  const h2 = document.createElement("h2");
  const trashIcon = document.createElement("i");

  divChild.style.display = "flex";
  divChild.style.alignItems = "center";
  divChild.style.justifyContent = "space-between";

  h2.innerHTML = "- " + userInput.value;

  h2.addEventListener("click", function () {
    if (h2.style.textDecoration != "line-through") {
      h2.style.textDecoration = "line-through";
    } else {
      h2.style.textDecoration = "none";
    }
  });

  // groceryItems.insertAdjacentElement("beforeend", h2);
  divChild.appendChild(h2);

  trashIcon.className = "fa-solid fa-trash";
  trashIcon.style.fontSize = "24px";
  trashIcon.style.color = "darkgray";

  trashIcon.addEventListener("click", function () {
    divParent.remove();
  });

  divChild.appendChild(trashIcon);

  divParent.appendChild(divChild);

  groceryItems.appendChild(divParent);

  userInput.value = "";
}
