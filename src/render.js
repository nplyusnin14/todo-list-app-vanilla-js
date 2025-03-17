class Render {
  static renderList(list) {
    return `
      <h2>${ list.title }</h2>

      <ul>
        ${ list.tasks.map(task => this.renderItem(task)).join("") }
      </ul>

      <form>
        <input type="text">
        <button>Add</button>
      </form>
    `
  }

  static renderItem(item) {
    return`
      <li>
        <input type="checkbox">
        <span>${item.text}</span>
        <button>Edit</button>
        <button>Delete</button>
      </li>
    `
  }
}

export default Render;