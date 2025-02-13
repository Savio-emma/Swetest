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

const password = document.querySelector(".password");
const submit = document.querySelector(".submit");
const successful = document.querySelector(".successful");
const unSuccessful = document.querySelector(".unsuccessful");
const formArea = document.querySelector(".form-area");
const retry = document.querySelector(".retry");

submit.onclick = () => {
  formArea.style.display = 'none';


  if (password.value === 'seed'){
    successful.style.display = 'flex';
  } 
  else{
    unSuccessful.style.display = 'flex';
  }
}

retry.onclick = () => {
  unSuccessful.style.display = 'none';
  formArea.style.display = 'flex'
}

const unavailale = document.querySelector(".unavailable");
const unavailaleDiv = document.querySelector(".unavailable-div");

// unavailale.onclick = () => {
//   unavailaleDiv.style.display = 'flex';
//   unavailaleDiv.style.opacity = 1;
//   unavailaleDiv.style.scale = 1;
// }


// Add an event listener to the click-me div
unavailale.addEventListener('click', () => {
  // Show the pop-up div
  unavailaleDiv.style.display = 'flex';

  // Hide the pop-up div after 2 seconds
  setTimeout(() => {
    unavailaleDiv.style.display = 'none';
  }, 2000);
});



//to show an alert when the download button is clicked
const download = document.querySelector(".download");

download.onclick = () => {
  alert("If you have data, your file will start downloading...")
}