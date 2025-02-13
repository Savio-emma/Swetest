//loading
window.addEventListener('load', function() {
    // Option 1: Hide the loader using CSS (set display to 'none')
   document.getElementById('loader-overlay').style.display = 'none';

    // Option 2: Remove the loader from the DOM entirely (optional)
    document.getElementById('loader-overlay').remove();
});
