document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector('form')
    form.addEventListener('submit', e => {
      e.preventDefault();
      let input = document.querySelector('#new-task-description').value;
      newTask(input);
      form.reset();
    });
});

function newTask(task) {
  let p = document.createElement('p');
  let btn = document.createElement('button');
  btn.addEventListener('click', handleDelete);
  btn.textContent = 'x';
  p.textContent = `${task} `;
  p.appendChild(btn);
  document.querySelector('#tasks').appendChild(p)
  ;
}

function handleDelete (e) {
  e.target.parentNode.remove();
}
