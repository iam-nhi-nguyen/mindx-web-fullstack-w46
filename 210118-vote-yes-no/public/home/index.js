const question = document.getElementById('question');
const btnYes = document.getElementById('btn-yes');
const btnNo = document.getElementById('btn-no');

getQuestion();

function getQuestion() {
  const newQuestion = fetch('http://localhost:8080/get-question');
  newQuestion
  .then(res => res.json())
  .then(res => {
    question.innerHTML = res.data.content;
    loadEventListeners(res.data._id);
  });
}

function loadEventListeners(_id) {
  btnYes.addEventListener('click', () => updateVote('yes', btnYes.innerHTML, _id));
  btnNo.addEventListener('click', () => updateVote('no', btnNo.innerHTML, _id));
}

async function updateVote(type, text, _id) {
  if(type != text) return;
  M.toast({html: 'Your vote has been received! Click NEXT or wait a couple second for a new question.'})
  const voteData = {
    type: type,
    _id: _id,
  };
  console.log(_id);
  fetch('http://localhost:8080/update-vote', {
    method: 'POST',
    body: new URLSearchParams(voteData),
  })
  .then(res => res.json())
  .then(res => {
    btnYes.innerHTML = res.data.yes;
    btnNo.innerHTML = res.data.no;
    setTimeout(window.location.reload.bind(window.location), 3000);
  });
}