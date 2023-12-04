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

//----------------------------------
//----------------------------------

//--- FUNCTION: generateForm () ---

//Creates function to generate an HTML form with contents within 
function generateForm () {
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

  // Create a prompt for user notifying them of the character length they can select
  var passwordLengthLabel = document.createElement("label")
  passwordLengthLabel.textContent = `MUST contain at least 8 characters and no more than 128 characters.`

  // Creates an input area (and parameters for input) for password length
  var passwordLengthInput = document.createElement("input");
  passwordLengthInput.type = "number";
  passwordLengthInput.min = "8"
  passwordLengthInput.max = "128"

  // Appends the passwordLengthLabel and passwordLengthInput to the passwordLengthItem
  passwordLengthItem.appendChild(passwordLengthLabel)
  passwordLengthItem.appendChild(passwordLengthInput)


  // Creates a list item, to be put in the requirementList, prompting user to make selections on the character
  // types to include in their generated password
  var passwordCharacterTypeItem = document.createElement("li");



}
//----------------------------------
//----------------------------------

//--- FUNCTION: generateCheckbox () ---



//----------------------------------  
//----------------------------------

//--- FUNCTION: generatePassword () ---




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
generateBtn.addEventListener("click", writePassword);
