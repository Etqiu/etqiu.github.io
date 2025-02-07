const link = document.querySelector('a.site-button');
if (link) {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default behavior of the link (jumping to the top)
    console.log('Dark Mode link clicked!');
    // Add your dark mode toggle logic here
    document.body.classList.toggle('dark-mode');
  });
}


const data = {
  message: "Click event listener added to the link."
}