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

/*
1. Retrieve items from local storage.
2. Create a new paragraph element.
3. Append the retrieved items to the new paragraph element.
4. Append the new paragraph element to the desired location.
*/