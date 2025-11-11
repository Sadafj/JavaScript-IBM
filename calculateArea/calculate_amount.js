// Function that calculates the total grocery amount
function groceryTracker(g1, g2, g3) {
  // Convert the values to numbers and handle empty inputs as 0
  g1 = parseFloat(g1) || 0;
  g2 = parseFloat(g2) || 0;
  g3 = parseFloat(g3) || 0;

  // Return the total sum
  return g1 + g2 + g3;
}

// Function that gets called when the button is clicked
function calculateTotal() {
  // Get input values
  const grocery1 = document.getElementById('grocery1').value;
  const grocery2 = document.getElementById('grocery2').value;
  const grocery3 = document.getElementById('grocery3').value;

  // Call the main groceryTracker() function
  const total = groceryTracker(grocery1, grocery2, grocery3);

  // Display result
  document.getElementById('result').innerText = `The total amount is: ${total}`;
}
