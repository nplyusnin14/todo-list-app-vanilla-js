import ListItems from "./list_items.js";
import Render from "./render.js";

function main() {
  const lists = ListItems.getItems();

  loadLists(lists);

  const bindings = {
    "newListForm": document.querySelector(".new-list-form"),
    "newListFormInput": document.querySelector(".new-list-form__input"),
  }

  bindings["newListForm"].addEventListener("submit", (event) => {
    event.preventDefault();

    let input = bindings["newListFormInput"],
        value = input.value;

    if (value === "") return;

    input.value = "";

    lists.push({
      id: lists.length + 1,
      title: value,
      tasks: []
    })

    ListItems.save(lists);
    loadLists(lists);
  });
}

function loadLists(lists) {
  const listsContainer = document.querySelector(".lists");

  listsContainer.innerHTML = lists.map(list => Render.renderList(list)).join("");
}

main();