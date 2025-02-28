# web-api-challenge
02-challenge for web APIs


## Your Task

In this challenge, you'll create a two-page website where users will input and view blog posts. It includes building a content form, dynamically rendering blog posts, and implementing a light/dark mode toggle. As you code, you'll gain practical JavaScript experience, explore the Document Object Model's power, and set the stage for more advanced tasks.

## User Story

```md
AS A marketing student,
I WANT a personal blog
SO THAT I can showcase my thoughts and experiences.
```

## Acceptance Criteria

```md
GIVEN a personal blog
WHEN I load the app,
THEN I am presented with the landing page containing a form with labels and inputs for username, blog title, and blog content. ✔️
WHEN I submit the form,
THEN blog post data is stored to localStorage. ✔️
WHEN the form submits,
THEN I am redirected to the posts page. ✔️
WHEN I enter try to submit a form without a username, title, or content,
THEN I am presented with a message that prompts me to complete the form. ✔️
WHEN I view the posts page,
THEN I am presented with a header, with a light mode/dark mode toggle, and a "Back" button. ✔️
WHEN I click the light mode/dark mode toggle,
THEN the page content's styles update to reflect the selection. ✔️
WHEN I click the "Back" button,
THEN I am redirected back to the landing page where I can input more blog entries. ✔️
WHEN I view the main content,
THEN I am presented with a list of blog posts that are pulled from localStorage. ✔️
WHEN I view localStorage,
THEN I am presented with a JSON array of blog post objects, each including the post author's username, title of the post, and post's content. ✔️
WHEN I take a closer look at a single blog entry in the list,
THEN I can see the title, the content, and the author of the post. ✔️
WHEN I view the footer,
THEN I am presented with a link to the developer's portfolio. ✔️
```

Github Link: https://github.com/chrypixl/web-api-challenge
Webpage link: https://chrypixl.github.io/web-api-challenge/

## Getting Started

Your file structure should look like the following:

```md
my-blog
├── assets
│   ├── css
│   │   ├── blog.css
│   │   ├── form.css
│   │   └── styles.css
│   └── js
│       ├── blog.js
│       ├── form.js
│       └── logic.js
├── index.html
├── blog.html
└── README.md
```

## Notes

![image](assets/images/Screenshot%202024-07-14%20115819.png)


## Credits

Used anchor code from the following site to add the Discord "finger guns" emoji to the footer. https://emoji.gg/emoji/1650_fingerguns#