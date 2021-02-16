//  VAR (constants)
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const symbol = "!@#$%^&*()_+=-~";
const number = "0123456789";
const empty = "";


// DOM
const lengthEl = document.getElementById("length");
const upperCaseEl = document.getElementById("uppercase");
const lowerCaseEl = document.getElementById("lowercase");
const numberEl = document.getElementById("numbers");
const symbolEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const resultEl = document.getElementById("results"); 

// been using codeacademy to exand my knowledge
// ? is a ternary operator
generateEl.addEventListener ("click", () => {
    let initialPassword = empty;
    (upperCaseEl.checked) ? initialPassword += upperCase: "";
    (lowerCaseEl.checked) ? initialPassword += lowerCase: "";
    (symbolEl.checked) ? initialPassword += symbol: "";
    (numberEl.checked) ? initialPassword += number: "";
    

    resultEl.value = generatePassword (lengthEl.value, initialPassword)
});
// loop
// Math.floor makes sure its whole numbers

function generatePassword(l,initialPassword){
    let passphrase = "";

    for (let i =0; i < l; i++){
        passphrase += initialPassword.charAt(Math.floor(Math.random() * initialPassword.length));
    }
    return passphrase ;
}

