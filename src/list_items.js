class ListItems {
  static getItems() {
    return JSON.parse(localStorage.getItem("listItems")) || []
  }

  static save(items) {
    localStorage.setItem("listItems", JSON.stringify(items));
  }
}

export default ListItems;