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

//Creates HTML form element
function generateForm () {
  var formSection = document.createElement("form");

//Creates a HTML p element and user instructions informing user they will need to input appropriate
//answers if they want a random password to be generated.
var userInstructions = document.createElement("p")
  userInstructions.textContent = `In order for this application to generate a secure, random password, 
  you must appropriately answer the following password requirement prompts.
 `;
// Appends userInstruction var to formSection var
 formSection.appendChild(userInstruction)

 // Adds a list element, which will contain password requirement prompts, as well as user input sections
var requirementList = document.createElement("ul")



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
