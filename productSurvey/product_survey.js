const submitButton = document.getElementById('submitBtn');

// When the user clicks the button
submitButton.addEventListener('click', submitFeedback);

// When the user presses Enter
document.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    submitFeedback();
  }
});

function submitFeedback() {
  // Get values from inputs
  const username = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const email = document.getElementById('email').value;
  const job = document.getElementById('job').value;
  const designation = document.getElementById('designation').value;
  const productType = document.getElementById('productType').value;
  const feedback = document.getElementById('feedbackText').value;

  // Display the values in output section
  document.getElementById('userName').innerHTML = username;
  document.getElementById('userAge').innerHTML = age;
  document.getElementById('userEmail').innerHTML = email;
  document.getElementById('userJob').innerHTML = job;
  document.getElementById('userDesignation').innerHTML = designation;
  document.getElementById('userProductChoice').innerHTML = productType;
  document.getElementById('userFeedback').innerHTML = feedback;

  // Show the hidden info box
  document.getElementById('userInfo').style.display = 'block';

  // Thank the user
  alert('Thank you for your valuable feedback!');
}
