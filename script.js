const button = document.getElementById("click-add");
const input = document.getElementById("user-input");
const listContainer = document.querySelector("ul");
const deleteButton = document.querySelector(".delete-button");
const checkBox = document.querySelector("input[type=checkbox]");

// Confirm text field isn't empty
const inputLength = () => {
    return input.value.length;
}

const createListElement = () => {
    let li = document.createElement("li");
    li.classList.add("list-item");


    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("name", "complete");
    checkbox.classList.add("margin-right");
    checkbox.addEventListener("click", checkOff);
    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(input.value));

    let deleteButton = document.createElement("button");
    deleteButton.classList.add("margin-left", "delete-button");

    let deleteIcon = document.createElement("img");
    deleteIcon.setAttribute("src", "delete.png");
    deleteIcon.classList.add("delete-icon");
    deleteButton.appendChild(deleteIcon);
    deleteButton.addEventListener("click", deleteListItem);
    li.appendChild(deleteButton);
    
    
    listContainer.appendChild(li);
    input.value = "";


}

const addListAfterClick = () => {
    if (inputLength() > 0) {
        createListElement();
    }
}

const addListAfterKeypress = (event) => {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

const deleteListItem = (event) => {
    let toRemove = event.target;
    toRemove.parentNode.parentNode.remove();
}

const checkOff = (event) => {
    let toCheck = event.target;
    toCheck.parentNode.classList.toggle("complete");
}




button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
deleteButton.addEventListener("click", deleteListItem);
checkBox.addEventListener("change", checkOff);