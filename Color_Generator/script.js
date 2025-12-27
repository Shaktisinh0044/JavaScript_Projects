const getColor = () =>{
  const randomcolor = Math.floor(Math.random()* 16777215);
  const randomCode = "#" + randomcolor.toString(16);
  document.body.style.backgroundColor = randomCode;
  document.getElementById("color-code").innerText = randomCode
}
document.getElementById("btn").addEventListener("click",getColor);






