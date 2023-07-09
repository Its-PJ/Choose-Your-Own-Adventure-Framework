// Wait for the DOM to be fully loaded

document.addEventListener('DOMContentLoaded', function () {

    // Get the necessary elements
    var storyElement = document.getElementById('story');

    var continueButton = document.getElementById('continue');

    var creditsPageElement = document.getElementById('credits-page');

    var steps = document.getElementsByClassName('step');

    var option2aResultElement = document.getElementById('option2a-result');
    var option2bResultElement = document.getElementById('option2b-result');

    var option2aButton = document.getElementById('option2a');
    var option2bButton = document.getElementById('option2b');





    var option3aResultElement = document.getElementById('option3a-result');
    var option3bResultElement = document.getElementById('option3b-result');
    var option3cResultElement = document.getElementById('option3c-result');
    var option3dResultElement = document.getElementById('option3d-result');

    var option3aButton = document.getElementById('option3a');
    var option3bButton = document.getElementById('option3b');
    var option3cButton = document.getElementById('option3c');
    var option3dButton = document.getElementById('option3d');






    var option4aResultElement = document.getElementById('option4a-result');
    var option4bResultElement = document.getElementById('option4b-result');
    var option4cResultElement = document.getElementById('option4c-result');
    var option4dResultElement = document.getElementById('option4d-result');
    var option4eResultElement = document.getElementById('option4e-result');
    var option4fResultElement = document.getElementById('option4f-result');
    var option4gResultElement = document.getElementById('option4g-result');
    var option4hResultElement = document.getElementById('option4h-result');

    var option4aButton = document.getElementById('option4a');
    var option4bButton = document.getElementById('option4b');
    var option4cButton = document.getElementById('option4c');
    var option4dButton = document.getElementById('option4d');
    var option4eButton = document.getElementById('option4e');
    var option4fButton = document.getElementById('option4f');
    var option4gButton = document.getElementById('option4g');
    var option4hButton = document.getElementById('option4h');

// -----------------------------------------------------------------

    // Event listener for Continue button

  

// --------------------------------------------------------------

    // Event listener for Option 2a button
    option2aButton.addEventListener('click', function () {
      storyElement.style.display = 'none';
      option2aResultElement.style.display = 'block';
    });
  
    // Event listener for Option 2b button
    option2bButton.addEventListener('click', function () {
      storyElement.style.display = 'none';
      option2bResultElement.style.display = 'block';
    });
  
// --------------------------------------------------------------

    // Event listener for Option 3a button
    option3aButton.addEventListener('click', function () {
      option2aResultElement.style.display = 'none';
      option3aResultElement.style.display = 'block';
    });
  
    // Event listener for Option 3b button
    option3bButton.addEventListener('click', function () {
      option2aResultElement.style.display = 'none';
      option3bResultElement.style.display = 'block';
    });

    // Event listener for Option 3c button
    option3cButton.addEventListener('click', function () {
      option2bResultElement.style.display = 'none';
      option3cResultElement.style.display = 'block';
    });
  
    // Event listener for Option 3d button
    option3dButton.addEventListener('click', function () {
      option2bResultElement.style.display = 'none';
      option3dResultElement.style.display = 'block';
    });
  

// --------------------------------------------------------------

    // Event listener for Option 4a button
    option4aButton.addEventListener('click', function () {
      option3aResultElement.style.display = 'none';
      option4aResultElement.style.display = 'block';
    });
  
    // Event listener for Option 4b button
    option4bButton.addEventListener('click', function () {
      option3aResultElement.style.display = 'none';
      option4bResultElement.style.display = 'block';
    });

    // Event listener for Option 4c button
    option4cButton.addEventListener('click', function () {
      option3bResultElement.style.display = 'none';
      option4cResultElement.style.display = 'block';
    });
  
    // Event listener for Option 4d button
    option4dButton.addEventListener('click', function () {
      option3bResultElement.style.display = 'none';
      option4dResultElement.style.display = 'block';
    });

    // Event listener for Option 4e button
    option4eButton.addEventListener('click', function () {
      option3cResultElement.style.display = 'none';
      option4eResultElement.style.display = 'block';
    });
  
    // Event listener for Option 4f button
    option4fButton.addEventListener('click', function () {
      option3cResultElement.style.display = 'none';
      option4fResultElement.style.display = 'block';
    });

    // Event listener for Option 4g button
    option4gButton.addEventListener('click', function () {
      option3dResultElement.style.display = 'none';
      option4gResultElement.style.display = 'block';
    });
  
    // Event listener for Option 4h button
    option4hButton.addEventListener('click', function () {
      option3dResultElement.style.display = 'none';
      option4hResultElement.style.display = 'block';
    });
    
  });