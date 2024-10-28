//This is the script I will use for the sidebar. Due to code corruption, I couldn't combine all the scripts into a single file, so I've separated them and linked them to each HTML file. This script enables the hamburger button to function when clicked and is designed specifically for mobile devices.

function showSidebar() {
  const sidebar = document.querySelector(".nav-sidebar"); 
  sidebar.style.display = "flex"; //When I click the hamburger button, the sidebar's display property in CSS changes from 'none' to 'flex', causing the sidebar to appear.
}

function hideSidebar() {
  const sidebar = document.querySelector(".nav-sidebar");
  sidebar.style.display = "none"; //When I click the close button, the sidebar's display property in CSS changes from 'flex' to 'none', causing the sidebar to close.
}
