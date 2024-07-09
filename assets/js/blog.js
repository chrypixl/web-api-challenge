const blogPost = JSON.parse(localStorage.getItem('blogPost'));

const div = document.createElement('div');

if (blogPost) {
    const { username, title, content } = blogPost;
    div.innerHTML = `
        <h2>${title}</h2>
        <p><strong>Author:</strong> ${username}</p>
        <p>${content}</p>
    `;
    document.getElementById("dataContainer").appendChild(div);
}



/*
1. Retrieve items from local storage.
2. Create a new paragraph element.
3. Append the retrieved items to the new paragraph element.
4. Append the new paragraph element to the desired location.
*/