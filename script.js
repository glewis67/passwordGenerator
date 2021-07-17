// Assignment code here
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function getPasswordOptions() {
  //I need to ask the user how many characters they want in their password.//
  var length = parseInt(
    prompt("How many characters would like your password to contain?")
  );

  var hasUpperCase = confirm(
    "would like Upper Case characters in your password?"
  );
  var hasLowerCase = confirm(
    "would like Lower Case characters in your password?"
  );
  var hasNumaric = confirm("would like Numaric characters in your password?");
  var hasSpecial = confirm("would like Special characters in your password?");

  var options = {
    length,
    hasUpperCase,
    hasLowerCase,
    hasNumaric,
    hasSpecial,
  }

  return options;
}

function randomizer(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  var randomElement = array[randomIndex];

  return randomElement;
}

function generatePassword() {
  var passwordOptions = getPasswordOptions();
 
  var password = [];
  var possiableChars = [];
  var garanteedChars = [];

  if(!passwordOptions){
    return null;
  }

  if(passwordOptions.hasLowerCase){
    possiableChars = possiableChars.concat(lowerCasedCharacters);
    garanteedChars.push(randomizer(lowerCasedCharacters));
  }

  if(passwordOptions.hasUpperCase){
    possiableChars = possiableChars.concat(upperCasedCharacters);
    garanteedChars.push(randomizer(upperCasedCharacters));
  }

  if(passwordOptions.hasNumaric){
    possiableChars = possiableChars.concat(numericCharacters);
    garanteedChars.push(randomizer(numericCharacters));
  }

  if(passwordOptions.hasSpecial){
    possiableChars = possiableChars.concat(specialCharacters);
    garanteedChars.push(randomizer(specialCharacters));
  }

  for (let i = 0; i < passwordOptions.length; i++) {
      var possiableChar = randomizer(possiableChars);
      password.push(possiableChar);
  }

  for (let i = 0; i < garanteedChars.length; i++) {
      password[i] = garanteedChars[i];
  }



  return password.join("");
}



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






