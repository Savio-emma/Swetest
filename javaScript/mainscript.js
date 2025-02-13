function applyTheme(themeClass) {
    document.body.className = themeClass;
    localStorage.setItem('selectedTheme', themeClass);
  }

  document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme) {
      applyTheme(savedTheme);
    }
  });


  // Set the greeting message based on the current time
  function displayGreeting() {
    const now = new Date();
    const hour = now.getHours();
    let greetingText = "";
    if (hour < 12) {
      greetingText = "Good morning!";
    } else if (hour < 18) {
      greetingText = "Good afternoon!";
    } else {
      greetingText = "Good evening!";
    }
    document.getElementById("greeting").innerText = greetingText;
  }
  displayGreeting();

  function updateDateTime() {
    // Create a new Date object
    const now = new Date();

    // Get the local date and time as strings
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();

    // Display the date and time inside the <p> element with id="dateTime"
    document.getElementById('dateTime').innerHTML =  time;
  }

  // Update the date and time immediately when the page loads
  updateDateTime();

  // Update the date and time every second (1000 milliseconds)
  setInterval(updateDateTime, 1000);


  // Close the popup modal when the "Proceed" button is clicked
  document.getElementById("proceedBtn").addEventListener("click", function () {
    document.getElementById("popup").style.display = "none";
  });



//goggle translate
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,de,zh-CN,es,pt,fr,it,ig',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');
}


