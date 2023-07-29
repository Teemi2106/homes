let cartItems = [];
let userBalance = 2000.0;
document.getElementById("userBalance").textContent = userBalance;

document.onload(getUsername());

function getUsername() {
  let userName = prompt("Username");
  document.getElementById("username").textContent = userName;
  document.getElementById("userBalance").textContent = userBalance.toFixed(2);
}

document.getElementById("userBalance").textContent = userBalance.toFixed(2);

function addToCart(itemName, itemPrice) {
  const item = {
    name: itemName,
    price: itemPrice,
  };
  cartItems.push(item);
  updateCart();
}

function removeFromCart(itemName, itemPrice) {
  cartItems.splice(item, 1);
  updateCart();
}

function updateCart() {
  const cartDiv = document.getElementById("cart");
  cartDiv.innerHTML = "";

  if (cartItems.length === 0) {
    cartDiv.innerHTML = "<p>Empty Cart</p>";
  } else {
    let total = 0;
    for (let i = 0; i < cartItems.length; i++) {
      const item = cartItems[i];
      const itemDiv = document.createElement("div");
      cartDiv.innerHTML +=
        item.name +
        ": $" +
        item.price +
        "<button onclick = 'removeFromCart()'>Remove</button>";
      cartDiv.appendChild(itemDiv);

      total += item.price;
    }
    const totalDiv = document.createElement("div");
    cartDiv.innerHTML += "Total: $" + total.toFixed(2);
    cartDiv.appendChild(totalDiv);
  }
}

function purchaseItems() {
  const messageDiv = document.getElementById("message");
  if (cartItems.length === 0) {
    messageDiv.textContent = "Your cart is empty";
    return;
  }

  let total = 0;
  for (const item of cartItems) {
    total += item.price;
  }

  if (total > userBalance) {
    messageDiv.textContent = "Insufficient balance";
    alert("insufficient balance");
  } else {
    userBalance -= total;

    updateCart();
    document.getElementById("userBalance").textContent = userBalance.toFixed(2);
    alert("Purchase of " + total + " successful");
    messageDiv.textContent = "Purshase Successful";
  }
}

function addAmount() {
  const depositAmount = parseFloat(document.getElementById("amount").value);
  if (isNaN(depositAmount) || depositAmount <= 0) {
    document.getElementById("message").textContent =
      "Please enter a valid deposit amount";
    return;
  }
  userBalance += depositAmount;
  document.getElementById("userBalance").textContent = userBalance.toFixed(2);
  document.getElementById("message").textContent =
    "Successfully Deposited " +
    depositAmount.toFixed(2) +
    " into your account.";
  close();
  alert("Deposit Successful");
}
