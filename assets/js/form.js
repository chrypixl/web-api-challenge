const username = document.querySelector('#username');
const title = document.querySelector('#title');
const input = document.querySelector('#input');
const submit = document.querySelector('#submit');


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
   

    window.location.href='file:///C:/Users/chris/Documents/university/web-api-challenge/blog.html';
  }
})
