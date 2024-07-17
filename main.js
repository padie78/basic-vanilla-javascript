import './style.css';

const formMessage = document.getElementById('formMessage');
formMessage.addEventListener('submit', (event) => {
  event.preventDefault();

  let formData = new FormData(event.target);
  let txtMessage = formData.get('txtMessage');
  createLIElement(txtMessage);
});

function createLIElement(message) {
  const li = document.createElement('li');
  const ul = document.getElementById('ulMessage');
  const messageElement = document.createTextNode(message);
  li.appendChild(messageElement);
  ul.appendChild(li);
}
