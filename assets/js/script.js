// JavaScript for the sliding sidebar
document.addEventListener('DOMContentLoaded', () => {
    const sideNav = document.getElementById('side-nav');
    const sideNavTrigger = document.getElementById('side-nav-trigger');
  
    // Toggle the "open" class on click
    sideNavTrigger.addEventListener('click', () => {
      sideNav.classList.toggle('open');
      sideNavTrigger.classList.toggle('hidden'); // Hide trigger when sidebar is open
    });
  
    // Close the sidebar when clicking outside
    document.addEventListener('click', (event) => {
      if (!sideNav.contains(event.target) && !sideNavTrigger.contains(event.target)) {
        sideNav.classList.remove('open');
        sideNavTrigger.classList.remove('hidden'); // Show trigger when sidebar is closed
      }
    });
  });
  