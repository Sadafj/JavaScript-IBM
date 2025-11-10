function checkAccess(role) {
  role = (role || '').toLowerCase();

  if (role === 'employee') {
    return '✅ Access granted: You have full access to Dietary Services.';
  }
  if (role === 'enrolled member') {
    return '✅ Access granted: You have full access to Dietary Services and one-on-one interaction with a dietician.';
  }
  if (role === 'subscriber') {
    return '✅ Access granted: You have partial access to Dietary Services only.';
  }
  if (role === 'non-subscriber') {
    return '❌ Access denied: Please enroll or subscribe to avail Dietary Services.';
  }
  return '⚠️ Invalid role. Please select a valid role.';
}

document.addEventListener('DOMContentLoaded', () => {
  const checkButton = document.getElementById('check');
  const roleSelect = document.getElementById('role');
  const resultDiv = document.getElementById('result');

  checkButton.addEventListener('click', () => {
    const role = roleSelect.value;
    const message = checkAccess(role);
    resultDiv.textContent = message;
  });

  roleSelect.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') checkButton.click();
  });
});