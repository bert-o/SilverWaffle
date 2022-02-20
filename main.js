class Todo {
  constructor(textbox) {
    this.textBox = textBox
    this.submit = submit
    this.listItem
  }
}

textBox() {

}

submit() {

}

listItem() {

}

const textBox = document.querySelector('[data-textbox]')
const submit = document.querySelector('[data-submit]')
const listItem = document.querySelector('[data-list-item]')

const newToDo = new Todo(textBox, submit)
