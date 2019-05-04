// Add dark mode to a website
let buttonToChangeMode = document.querySelector('.change-mode'); // Button to make the change
function changeMode() { // Function to initiate the change 
  localStorage.setItem('mode', (localStorage.getItem('mode') || 'dark') === 'dark' ? 'light' : 'dark');
  localStorage.getItem('mode') === 'dark' ? document.querySelector('body').classList.add('dark') : document.querySelector('body').classList.remove('dark');
}
buttonToChangeMode.addEventListener('click', changeMode); // OnClick event handler to trigger the change

document.addEventListener('DOMContentLoaded', () => { 
  (localStorage.getItem('mode') || 'dark') === 'dark' ? document.querySelector('body').classList.add('dark') : document.querySelector('body').classList.remove('dark')
})
// This way, the CSS class 'dark' is used to set dark mode properties, dark mode is loaded by default and a user's choice of mode is will be remembered when next they load the page

