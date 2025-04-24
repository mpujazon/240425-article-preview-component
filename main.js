let shareToast = document.getElementById("share-toast");
let shareIcon = document.getElementById("share-icon-container");
let socialIcons = document.getElementById("social-icons"); 

// Function to toggle the visibility of the share toast
shareIcon.addEventListener("click", function() {
    shareToast.classList.toggle("active");
});

// Function to hide the share toast when clicking a social icon
socialIcons.addEventListener("click", function() {
    shareToast.classList.remove("active");
});

