class Todo {
  constructor(textbox,submitButton,listItems) {
    this.textbox = textbox;
    this.submitButton = submitButton;
    this.listItems = listItems;
  }
}

submit() {

}

updateDisplay(){
this.textbox
}

const textbox = document.querySelectorAll('[data-textbox]')
const submitButton = document.querySelectorAll('[data-submit]')
const listItems = document.querySelectorAll('[data-list-item]')

submitButton.addEventListener('click', button => {
  Todo.submit();
  Todo.updateDisplay();
}
)
