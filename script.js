//your code here
// Find the table with the grocery list by its ID
const groceryListTable = document.getElementById("grocery-list");

// Find all the elements with data-ns-test="prices"
const priceElements = groceryListTable.querySelectorAll('[data-ns-test="price"]');

// Initialize the total price
let totalPrice = 0;

// Loop through the price elements and calculate the total price
priceElements.forEach(priceElement => {
    totalPrice += parseFloat(priceElement.textContent);
});

// Find the "grandTotal" cell in the second table
const grandTotalElement = document.querySelector('[data-ns-test="grandTotal"]');

// Update the total price with 2 decimal places
grandTotalElement.textContent = totalPrice.toFixed(2);