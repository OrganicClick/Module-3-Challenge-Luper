// Assignment code here

//Creates HTML form element
var formSection = document.createElement("form");

//Creates a HTML p element and user instructions informing user they will need to input appropriate
//answers if they want a random password to be generated.
var userInstructions = document.createElement("p")
  userInstructions.textContent = `In order for this application to generate a secure, random password, 
  you must appropriately answer the following password requirement prompts.
 `;
 
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
