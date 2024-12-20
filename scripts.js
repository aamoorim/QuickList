const unorderedList = document.querySelector("ul");
const input = document.querySelector("#main-input");
const alertBox = document.querySelector(".notification");
const form = document.querySelector("form");
const alertBtn = document.querySelector(".close-btn");

input.addEventListener("input", () => {
    input.value = input.value.replace(/\d+/g, "");
});

function createList(value) {
    const list = document.createElement("li");
    const div = document.createElement("div");
    const label = document.createElement("label");
    const checkboxInput = document.createElement("input");
    const listText = document.createElement("p");
    const btn = document.createElement("button");
    const img = document.createElement("img");

    div.classList.add("checkbox");

    checkboxInput.type = "checkbox";
    checkboxInput.id = "checkbox";
    checkboxInput.name = "checkbox-input";
    checkboxInput.value = "list-box";

    label.classList.add("check-label");
    label.htmlFor = "checkbox";

    listText.textContent = value;

    btn.type = "button";
    btn.classList.add("remove-btn");
    img.src = "source/icon delete.png";

    btn.appendChild(img);
    label.append(checkboxInput, listText);
    div.append(label, btn);
    list.appendChild(div);
    unorderedList.prepend(list);

    input.value = "";

    btn.addEventListener("click", () => {
        list.remove();
        showAlert();
    });
}

function showAlert() {
    alertBox.classList.remove("hide");
    alertBox.classList.add("show-alert");
    setTimeout(() => {
        alertBox.classList.remove("show-alert");
        alertBox.classList.add("hide");
    }, 5000);
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const value = input.value.trim();
    if (value) {
        createList(value);
    } else {
        showAlert();
    }
});

alertBtn.addEventListener("click", () => {
    alertBox.classList.remove("show-alert");
    alertBox.classList.add("hide");
});