// Initialize an empty shopping cart array
let shoppingCart = [];

// Function to add a product to the shopping cart
function addToCart(productName) {
    shoppingCart.push(productName);
    alert(`${productName} added to the cart!`);
    displayCartItems();
}

// Function to open the cart popup
function openPopup() {
    document.getElementById("cart-popup").style.display = "block";
}

// Function to close the cart popup
function closePopup() {
    document.getElementById("cart-popup").style.display = "none";
}

// Function to display cart items in the popup
function displayCartItems() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = '';

    shoppingCart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        cartItems.appendChild(li);
    });
}
