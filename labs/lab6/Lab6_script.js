// Please complete the following two tasks and submit a github link for the webpage

// Task 1:
// You are building a simple Interactive Color Picker app where users can:
// Click on a color button to change the color of a box
// Add a new color to the palette using an input field
// To get started, use JavaScript DOM methods to access the following HTML elements:
// Create 4 variables/constants to implement the following
// The div that displays the current color (id="colorBox")
// The container that holds all the color buttons (id="colorButtons")
// The form where users can submit a new color (id="addColorForm")
// The input field where the user types a new color (id="colorInput")

// Task 1 code goes here
const colorBox = document.getElementById("colorBox");
const colorButtons = document.getElementById("colorButtons");
const addColorForm = document.getElementById("addColorForm");
const colorInput = document.getElementById("colorInput");

// Task 2: Change color when a button is clicked

// You want users to be able to click on a color button to change the background 
// color of a display box (colorBox). 
// Each color button has the class "color-btn".
// Write a JavaScript event listener that does the following when a button 
// inside the colorButtons container is clicked:
// (1) Checks if the clicked element has the class "color-btn"
// (2) Gets the backgroundColor style of that button
// (3) Updates the colorBox's background to that color
// (4) Displays the name or hex code of the color as text inside the colorBox
// Hint: Use addEventListener on the color buttons container, and access 
// the clicked element with event.target.


// Task 2 code goes here
colorButtons.addEventListener("click", event => {
  if (event.target.className === "color-btn") {
    const color = event.target.style.backgroundColor;
    colorBox.style.backgroundColor = color;

    colorBox.innerHTML = color;
  }
})
// Please do not change the existing code
// Add new color button
addColorForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const newColor = colorInput.value.trim();
  if (!newColor) return;

  // Create a new button
  const newBtn = document.createElement('button');
  newBtn.className = 'color-btn';
  newBtn.style.backgroundColor = newColor;

  // Optional: set a fallback text color name
  newBtn.title = newColor;

  colorButtons.appendChild(newBtn);
  colorInput.value = '';
});
