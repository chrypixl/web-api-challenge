const themeSwitcher = document.querySelector('#theme-switcher');
const container = document.querySelector('.container');
let mode = 'light';
const username = document.querySelector('#username');
const title = document.querySelector('#title');
const submit = document.querySelector('#submit');
const input = document.querySelector('#input');


themeSwitcher.addEventListener('click', function () {
  if (mode === 'dark') {
    mode = 'light';
    container.setAttribute('class', 'light');
  } else {
    mode = 'dark';
    container.setAttribute('class', 'dark');
  }
});

submit.addEventListener('click', function (event) {
  event.preventDefault();
  if (username === '') {
    alert('Please provide a user name.');
  } else if (title === '') {
    alert('Please provide a title.');
  } else if (input === '') {
    alert('Please write an entry.');
  } else {

    const blogPost = {
      username: username.value.trim(),
      title: title.value.trim(),
      input: input.value.trim(),
    };

    localStorage.setItem('blogPost', JSON.stringify(blogPost));
    renderMessage();
  }
})
