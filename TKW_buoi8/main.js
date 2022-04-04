const alpha = "abcdefghijklmnopqrstuvwxyz";
const alphaII ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";

const passwordTxt = document.getElementById("password");
const length = document.getElementById("length");
const incalphaII = document.getElementById("alphaII");
const incNumbers = document.getElementById("numbers");
const incSymbols = document.getElementById("symbols");
const generateBtn = document.getElementById("generate");
const deleteBtn = document.getElementById("detele");

generateBtn.addEventListener("click", () => {
  let characters = alpha;
  incalphaII.checked ? (characters += alphaII) : "";
  incNumbers.checked ? (characters += numbers) : "";
  incSymbols.checked ? (characters += symbols) : "";
  passwordTxt.value = generatePassword(length.value, characters);
});

const generatePassword = (length, characters) => {
  let password = "";
  for (let i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
};
deleteBtn.addEventListener("click", () =>{
    passwordTxt.value = "";
})

  
