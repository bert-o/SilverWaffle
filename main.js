class Todo {
  constructor(textbox,submitButton,listItems) {
    this.textbox = textbox;
    this.submitButton = submitButton;
    this.listItems = listItems;
  }
}

submit() {

}

getText(str) {

}

updateDisplay(){
  if (str == '') {
    return "Enter a task!"
  } else {
  return `${this.getText}`;  
  }
}

const textbox = document.querySelectorAll('[data-textbox]')
const submitButton = document.querySelectorAll('[data-submit]')
const listItems = document.querySelectorAll('[data-list-item]')

submitButton.addEventListener('click', button => {
  Todo.submit();
  Todo.updateDisplay();
}
)
