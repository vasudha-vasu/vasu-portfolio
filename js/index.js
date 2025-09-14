document.addEventListener("DOMContentLoaded", function() {
    const scrollToTopButton = document.getElementById("scrollToTopButton");

    // Function to scroll to the top of the page
    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth" // You can use "auto" for immediate scrolling
      });
    }

    // Attach a click event listener to the button
    scrollToTopButton.addEventListener("click", scrollToTop);
  });
// ----------------------------------------------------------------------------- 




//   Active 
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("ul li a");
    const darkModeToggle = document.getElementById("darkModeToggle");

    // Function to add the "active" class to the clicked link
    function handleNavLinkClick(event) {
      navLinks.forEach(link => link.classList.remove("active"));
      this.classList.add("active");
    }

    // Attach click event listeners to the navigation links
    navLinks.forEach(link => {
      link.addEventListener("click", handleNavLinkClick);
    });

    // Function to toggle dark mode
    function toggleDarkMode() {
      document.body.classList.toggle("dark-mode");
    }

    // Attach click event listener to the dark mode toggle
    darkModeToggle.addEventListener("change", toggleDarkMode);
  });

// ----------------------------------------------------------------------------- 



// ----------------------------------------------------------------------------- 


// Dark mode 
  // Check for dark mode preference in local storage
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (localStorage.getItem('dark-mode') === 'enabled' || (prefersDarkMode && !localStorage.getItem('dark-mode'))) {
      document.body.classList.add('dark-mode');
  }
  
  // Dark mode toggle functionality
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  darkModeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      
      if (document.body.classList.contains('dark-mode')) {
          localStorage.setItem('dark-mode', 'enabled');
      } else {
          localStorage.setItem('dark-mode', 'disabled');
      }
  });
