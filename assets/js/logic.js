const themeSwitcher = document.querySelector('#theme-switcher');
const container = document.querySelector('.container');
let mode = 'light';


themeSwitcher.addEventListener('click', function () {
  if (mode === 'dark') {
    mode = 'light';
    container.setAttribute('class', 'light');
  } else {
    mode = 'dark';
    container.setAttribute('class', 'dark');
  }
});