function generateOTP(){
  let generateOTP = Math.floor(1000 + Math.random()*9000);
  window.localStorage.setItem("otp",generateOTP);
  
}

function validateOtp(){
  let validOtp = document.querySelector("#validOtp").value;
  let otp = window.localStorage.getItem("otp");

  if(validOtp == otp){
    alert("Valid Otp")
  }
  else{
    alert("Invalid OTP")
  }
}