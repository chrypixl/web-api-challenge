const submit = document.getElementById('submit');


submit.addEventListener('click', function (event) {
  event.preventDefault();
  
  const username = document.getElementById('username').value.trim();
  const title = document.getElementById('title').value.trim();
  const content = document.getElementById('content').value.trim();
  
  if (username.trim() === '') {
    alert('Please provide a user name.');
  } else if (title.trim() === '') {
    alert('Please provide a title.');
  } else if (content.trim() === '') {
    alert('Please write an entry.');
  } else {
    let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    
    const blogPost = {
      username: username,
      title: title,
      content: content
    };
      
    blogPosts.push(blogPost);
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));  
    window.location.href='file:///C:/Users/chris/Documents/university/web-api-challenge/blog.html';
  }
})