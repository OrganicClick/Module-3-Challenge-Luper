// The following assignment can be outlined into discrete sections, primarily based on functions called.
// For my version of the assignment, after the user clicks the "Generate Password" button, a form containing
// user instructions and prompts for user to follow and input appropriate information (e.g. desired password length, character types)
// will be generated. After user appropriately completes the form, they will confirm their selections by clicking
// a "Confirm" button. The application will then intake the user's input, and output a random password in the "Your Secure Password"
// text field.
//
// For the purpose of personal organization, an outline for the JavaScript used in this application could be defined as follows:
//
// --- APPLICATION OUTLINE ---
//
// Global Variable: var generateBtn = document.querySelector("#generate");
//
// Function: generatePassword ();
//
// Function: generateForm ();
//
// Function: generateCheckbox ();
//
// Function.Eventlistener ();
// 
// Function: writePassword ();

//----------------------------------
//----------------------------------
//----------------------------------
//----------------------------------
//-------- APPLICATION CODE ---------


// --- GLOBAL VARIABLE ---
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Creates variables and their id's that will ultimately call generateCheckbox function to create interactable checkboxes for user
var lowercaseCheckbox = generateCheckbox("lowercaseCheckbox", "Lowercase Letters");
lowercaseCheckbox.id = "lowercaseCheckbox";

var uppercaseCheckbox = generateCheckbox("uppercaseCheckbox", "Uppercase Letters");
uppercaseCheckbox.id = "uppercaseCheckbox";

var numericCheckbox = generateCheckbox("numericCheckbox", "Numbers");
numericCheckbox.id = "numericCheckbox";

var specialCheckbox = generateCheckbox("specialCheckbox", "Special Characters");
specialCheckbox.id = "specialCheckbox";

//----------------------------------
//----------------------------------

//--- FUNCTION: generateForm () ---

//Creates function to generate an HTML form with contents within 
function generateForm () {

  // References the container element for .card-body so that rest of code can be appended to proper location in form
  var container = document.querySelector(".card-body");

  //Creates HTML form element
  var formSection = document.createElement("form");

  //Creates a HTML p element and user instructions informing user they will need to input appropriate
  //answers if they want a random password to be generated.
  var userInstructions = document.createElement("p");
  userInstructions.textContent = `In order for this application to generate a secure, random password, 
  you must appropriately answer the following password requirement prompts.
 `;
// Appends userInstructions var to formSection var
  formSection.appendChild(userInstructions);

 // Adds a list element, which will contain password requirement prompts, as well as user input sections
  var requirementList = document.createElement("ul");

  // Appends requirementList var to userInstructions var
  userInstructions.appendChild(requirementList);

  // Creates a list item, to be put in the requirementList, prompting user for input for password length
  var passwordLengthItem = document.createElement("li");

  // Creates a prompt for user notifying them of the character length they can select
  var passwordLengthLabel = document.createElement("label")
  passwordLengthLabel.textContent = `MUST contain at least 8 characters and no more than 128 characters.`

  // Creates an input area (and parameters for input) for password length
  var passwordLengthInput = document.createElement("input");
  passwordLengthInput.id = "passwordLengthInput";
  passwordLengthInput.type = "number";
  passwordLengthInput.min = "8";
  passwordLengthInput.max = "128";

  // Appends the passwordLengthLabel and passwordLengthInput to the passwordLengthItem
  passwordLengthItem.appendChild(passwordLengthLabel);
  passwordLengthItem.appendChild(passwordLengthInput);

  // Appends the passwordLengthItem to the requirementList
  requirementList.appendChild(passwordLengthItem);

  // Creates a list item, to be put in the requirementList, prompting user to make selections on the character
  // types to include in their generated password
  var passwordCharacterTypeItem = document.createElement("li");

  // Creates a prompt for user notifying them that they must select two of the following character types
  var passwordCharacterTypeLabel = document.createElement("label");
  passwordCharacterTypeLabel.textContent = `MUST contain at least 2 of the following character types.`

  // Appends the checkbox variables and passwordCharacterTypeLabel to the passwordCharacterTypeItem
  passwordCharacterTypeItem.appendChild(passwordCharacterTypeLabel);
  passwordCharacterTypeItem.appendChild(lowercaseCheckbox);
  passwordCharacterTypeItem.appendChild(uppercaseCheckbox);
  passwordCharacterTypeItem.appendChild(numericCheckbox);
  passwordCharacterTypeItem.appendChild(specialCheckbox);

  // Appends the passwordCharacterTypeItem to the requirementList
  requirementList.appendChild(passwordCharacterTypeItem);

  // Creates a confirm button with text CONFIRM inside the button
  var confirmButton = document.createElement("button");
  confirmButton.innerText = 'CONFIRM';

  // Adds eventListener to button for user to click, which will call the confirmSelections function
  confirmButton.addEventListener("click", confirmSelections);

  // Appends confirmButton to formSection directly
  formSection.appendChild(confirmButton);

  // Appends formSection to defined container variable to referenced location in HTML document
  container.appendChild(formSection);
}
//----------------------------------
//----------------------------------

//--- FUNCTION: generateCheckbox () ---

// Creates function that will generate checkboxes for user to select the character type options for their randomly generated
// password.
function generateCheckbox () {
  // Creates a <div> container HTML element to contain the created checkbox
 var checkboxContainer = document.createElement("div");

 // Creates a checkbox element able to receive user input
 var checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  // Appends the checkbox variable to the checkboxContainer element
 checkboxContainer.appendChild(checkbox);

 // Returns value of checkboxContainer
 return checkboxContainer;
}

//----------------------------------  
//----------------------------------


//--- FUNCTION: confirmSelections () ---

// Creates function that will confirm the input the user has provided to the form as being within pre-established
// parameters for the given fields.

function confirmSelections () {

  //

  // Tells function to use querySelector() to find passwordLengthInput id in the HTML
  var passwordLengthInput = document.querySelector("#passwordLengthInput");

  // Creates passwordValidation variable, which uses parseInt method to return user input only as an integer
  var passwordLengthValidation = parseInt(passwordLengthInput.value);

  // Creates variables to validate user input for selecting given checkboxes
  var lowercaseValidation = document.querySelector("#lowercaseCheckbox").checked;
  var uppercaseValidation = document.querySelector("#uppercaseCheckbox").checked;
  var numericValidation = document.querySelector("#numericCheckbox").checked;
  var specialValidation = document.querySelector("specialCheckbox").checked;

  // Adds logic to passwordValidation so that user may only enter the appropriate password length
  if (passwordLengthValidation < 8 || passwordLengthValidation > 128) {
    alert("You must enter a password length between 8 and 128 characters.")
  return;
  }

  // Creates an if statement (placeholder) for logic to push user to select at least 2 character type checkboxes
  if (!(lowercaseValidation || uppercaseValidation || numericValidation || specialValidation)) {
    alert("You must select at least 2 character types.");
    return;
  }

  //Tells the application to run the writePassword function after confirming user selections
  writePassword();
}




//----------------------------------  
//----------------------------------

//--- FUNCTION: generatePassword () ---

function generatePassword() {

  // Added functional placeholder to generate an actual random password... NEEDS TO BE CHANGED SO THAT IT
  // TAKES USER INPUT AND OUTPUTS RANDOMLY GENERATED PASSWORD WITH ACTUAL SELECTIONS CONSIDERED
  let password = '';
  let passwordLength = 12;
  let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
      'abcdefghijklmnopqrstuvwxyz0123456789@#$';

  for (let i = 1; i <= 8; i++) {
      let char = Math.floor(Math.random()
          * str.length + 1);

      pass += str.charAt(char)
  }

  return password;
}

//----------------------------------
//----------------------------------

//--- FUNCTION: writePassword () ---

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//----------------------------------
//----------------------------------

// --- FUNCTION.EVENTLISTENER: generateBtn.addEventListener() ---

// Add event listener to generate button
// Altered this function.eventlistener to better reflect that I want a form to generate when this button is clicked
generateBtn.addEventListener("click", generateForm);
