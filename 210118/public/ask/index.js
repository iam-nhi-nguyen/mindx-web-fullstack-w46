const createForm = document.getElementById('form-question');
const textAreaQuestion = document.getElementById('create-question');
const confirmMessage = document.getElementById('confirm-receive');
var charLeft = document.getElementById('char-left');
const max_length = textAreaQuestion.getAttribute('maxlength');

loadEventListeners();

function loadEventListeners() {
  createForm.addEventListener('submit', createQuestion);
  textAreaQuestion.addEventListener('input', toLower)
  textAreaQuestion.addEventListener('input', displayCharLeft);
  textAreaQuestion.addEventListener('paste', slicePastedText);
}

function createQuestion(e){
  e.preventDefault();
  const content = textAreaQuestion.value;
  textAreaQuestion.value = null;
  if(!content.trim().length) {
    M.toast({html: 'You should submit a non-empty question.'});
    return
  }
  const question = { content }

  fetch('http://localhost:8080/create-question', {
    method: 'POST',
    body: new URLSearchParams(question)
  })
  .then(res => res.json())
  .then(res => {
    if(res.success){
      alert('Your question has been received!');
      window.open('/', '__self');
    }
    else{
      M.toast({html: 'Your question has been asked before.'});
    }
  })
}

function toLower() {
  textAreaQuestion.value = textAreaQuestion.value.toLowerCase();
}

function displayCharLeft() {
  let char_left = max_length - textAreaQuestion.value.length;
  charLeft.innerHTML = `${char_left}/${max_length}`;
}

function slicePastedText(e) {
  e.clipboardData.getData('text/plain').slice(0, max);
}
