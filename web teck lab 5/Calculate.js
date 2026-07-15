function calculateAmount() {
  var price = Number(document.getElementById("productPrice").value);
  var quantity = document.getElementById("quantity").value;
  var errorMsg = document.getElementById("errorMsg");
  var payableAmount = document.getElementById("payableAmount");

  quantity = Number(quantity);

  if (quantity <= 0 || isNaN(quantity) || document.getElementById("quantity").value === "") {
    errorMsg.innerHTML = "Quantity must be greater than 0";
    payableAmount.value = 0;
  } else {
    errorMsg.innerHTML = "";
    payableAmount.value = price * quantity:
  }
}