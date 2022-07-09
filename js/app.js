//__________________________todocloud

var add = document.querySelector(".add");
var btnAddText = document.querySelector(".btnAddText");

var btn = document.querySelector("#btn");

btnAddText.addEventListener("click", function addCloud() {


    var addText = document.getElementById("addText").value;

    var itemBox = document.createElement("div");
    itemBox.classList.add('itemBox');

    var itemText = document.createElement("input");
    itemText.disabled = true;
    itemText.type = "text";
    itemText.value = addText;
    itemText.classList.add('itemText');


    var btnRemoveItem = document.createElement("div");
    btnRemoveItem.classList.add('btnRemoveItem');
    btnRemoveItem.innerHTML="btnRemoveItem";


    itemBox = document.body.appendChild(itemBox);
    itemText = itemBox.appendChild(itemText);
    btnRemoveItem = itemBox.appendChild(btnRemoveItem);
  

    let removeItem = document.querySelectorAll(".itemBox");
    let removeBtn = document.querySelectorAll(".btnRemoveItem");


    for (let i = 0; i < removeItem.length; i++) {
        console.log(removeItem);
        removeBtn[i].addEventListener("click", function () {
            removeItem[i].remove()
        })
    }
})


