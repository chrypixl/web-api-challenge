document.addEventListener('DOMContentLoaded', function() {
    const dataContainer = document.getElementById('dataContainer');
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
  
    blogPosts.forEach(function(blogPost) {
      const postDiv = document.createElement('div');
      postDiv.classList.add('blogPost');
  
      const username = document.createElement('h3');
      username.textContent = blogPost.username;
  
      const title = document.createElement('h2');
      title.textContent = blogPost.title;
  
      const content = document.createElement('p');
      content.textContent = blogPost.content;
  
      postDiv.appendChild(username);
      postDiv.appendChild(title);
      postDiv.appendChild(content);
  
      dataContainer.appendChild(postDiv);
    });
  });

