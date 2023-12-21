const toggleBtn = document.querySelector('.toggle');
const navLinks = document.querySelector('.nav-links');

toggleBtn.addEventListener('click', () => {
  toggleBtn.classList.toggle('active');
  navLinks.classList.toggle('active');
});




// Function to adjust content padding based on navbar height
function adjustContentPadding() {
  const navbar = document.querySelector('.navbar');
  const content = document.querySelector('.container');
  
  if (navbar && content) {
    const navbarHeight = navbar.offsetHeight;
    content.style.paddingTop = navbarHeight + 'px';
  }
}

// Call the function on window load and resize
window.addEventListener('load', adjustContentPadding);
window.addEventListener('resize', adjustContentPadding);
