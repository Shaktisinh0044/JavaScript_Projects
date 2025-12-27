let totalData = 0;





function additems(){
  let itemName = document.querySelector("#itemName");
  let totalQuantity = document.querySelector("#totalQuantity");
  let itemPrice = document.querySelector("#itemPrice");
  let itemCategory = document.querySelector("#itemCategory");
  let itemData = document.querySelector("#itemData");


  if(itemName.value===""||totalQuantity.value===""||itemPrice.value===""||itemCategory.value===""){
    alert("Plese enter fiels")
  }
  else{
    let row = itemData.insertRow();
    let data1 = row.insertCell(0);
    let data2 = row.insertCell(1);
    let data3 = row.insertCell(2);
    let data4 = row.insertCell(3);
    let data5 = row.insertCell(4);
    let data6 = row.insertCell(5);

    totalData++;
    let deleteBtn = `<button class='btn btn-danger' id='delete_${totalData}' onclick="deleteitem(this)">Delete</button>`

    data1.innerHTML = totalData;
    data2.innerHTML = itemName.value;
    data3.innerHTML = totalQuantity.value;
    data4.innerHTML = itemPrice.value;
    data5.innerHTML = itemCategory.value;
    data6.innerHTML = deleteBtn;

    itemName.value = "",
    totalQuantity.value = "",
    itemPrice.value= "",
    itemCategory.value = "";
  }
}

function deleteitem(e){
  let rowElem = (e.parentElement).parentElement;
  
  if(window.confirm("Are You Sure Want To Delete?")){
    rowElem.style.display = "none";
  }
  else{
    alert("Your Wish!!!")
  }
}