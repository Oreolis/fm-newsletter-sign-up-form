const form = document.getElementById('form');
const emailInput = document.getElementById('email');
const emailError = document.getElementById('email-error');
const userEmailElement = document.getElementById('user_email');
const currentEmail = localStorage.getItem('userEmail');

// ✅ This runs only on the success page
if (currentEmail && userEmailElement) {
  userEmailElement.textContent = currentEmail;
  localStorage.removeItem('userEmail');
}

// ✅ This runs only on the form page
if (form && emailInput && emailError) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!emailInput.validity.valid || emailInput.value.trim() === '') {
      emailError.textContent = 'Valid email required';
      emailInput.classList.add('input-error');
    } else {
      emailError.textContent = '';
      emailInput.classList.remove('input-error');

      localStorage.setItem('userEmail', emailInput.value);
      window.location.href = form.action;
    }
  });

  emailInput.addEventListener('input', () => {
    if (emailInput.validity.valid) {
      emailError.textContent = '';
      emailInput.classList.remove('input-error');
    }
  });
}
