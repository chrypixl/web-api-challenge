

submit.addEventListener('click', function (event) {
  event.preventDefault();
  
  const username = document.getElementById('username').value.trim();
  const title = document.getElementById('title').value.trim();
  const input = document.getElementById('input').value.trim();
  const submit = document.querySelector('submit');
  
  if (username.trim() === '') {
    alert('Please provide a user name.');
  } else if (title.trim() === '') {
    alert('Please provide a title.');
  } else if (input.trim() === '') {
    alert('Please write an entry.');
  } else {

    const blogPost = {
      username: username,
      title: title,
      input: input
    };

    localStorage.setItem('blogPost', JSON.stringify(blogPost));
   
   window.location.href='file:///C:/Users/chris/Documents/university/web-api-challenge/blog.html';
  }
})