//FUNCTION THAT CLOSES THE ACCORDION WHEN IT IS CLICKED
var radioButtons = document.querySelectorAll('input[type="radio"]');

// Add click event listener to each radio button
radioButtons.forEach(button => {
  button.addEventListener('click', function() {
    if (this.checked && this.getAttribute('data-checked') === 'true'){
      this.checked = false;
    } else {
      this.getAttribute('data-checked') === 'true';
    }
    // Update data-checked attribute
    this.setAttribute('data-checked', this.checked ? 'true' : 'false');
  });
});