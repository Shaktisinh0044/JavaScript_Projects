let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passBox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let getBtn = document.getElementById("getBtn");
let icon = document.getElementById("icon");



sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input', ()=>{
  sliderValue.textContent = inputSlider.value;
})

getBtn.addEventListener("click", ()=>{
  passBox.value = generatePassword();
})

let upperChar= "QWERTYUIOPLKJHGFDSAZXCVBNM"
let lowerChar = "qwertyuiopasdfghjklzxcvbnm"
let allNumbers = "1234567890"
let allSymbol = "!@#$%&*"

function generatePassword(){
  let genPassword = "";
  let allChar = "";
  
  allChar += lowercase.checked ? lowerChar : "";
  allChar += uppercase.checked ? upperChar : "";
  allChar += numbers.checked ? allNumbers : "";
  allChar += symbols.checked ? allSymbol : "";

  if(allChar == "" || allChar.length == 0){
    return genPassword;
  }
  let i = 1;
  while(i<inputSlider.value){
       genPassword +=allChar.charAt(Math.floor(Math.random() * allChar.length)) ;
       i++;
  }
  return genPassword;
}

icon.addEventListener("click", ()=>{
  if(passBox.value != "" || passBox.value.length >=1){
       navigator.clipboard.writeText(passBox.value)
       icon.title = "Password Copied"
  }
})