const form = document.getElementById('animatedForm');
const steps = document.querySelectorAll('.form-step');
const nextBtns = document.querySelectorAll('.next-btn');
const prevBtns = document.querySelectorAll('.prev-btn');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
const thankYou = document.querySelector('.thank-you');

let currentStep = 0;

// Move to the next step
nextBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    steps[currentStep].classList.remove('active');
    currentStep++;
    steps[currentStep].classList.add('active');
  });
});

// Move to the previous step
prevBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    steps[currentStep].classList.remove('active');
    currentStep--;
    steps[currentStep].classList.add('active');
  });
});

// Handle "Yes" button
yesBtn.addEventListener('click', () => {
  steps[currentStep].classList.remove('active');
  currentStep++;
  steps[currentStep].classList.add('active');
});

// Handle "No" button (submit form without additional guests)
noBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  await submitForm({ guests: 0 });
  showThankYouMessage();
});

// Handle form submission
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  // Collect form data
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const guests = document.getElementById('number').value || 0;

  // Submit data
  await submitForm({ name, phone, guests });
  showThankYouMessage();
});

// Submit form data to Google Sheets
async function submitForm(data) {
  try {
    const response = await fetch('YOUR_GOOGLE_WEB_APP_URL_HERE', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to submit the form. Please try again.');
    }
  } catch (error) {
    alert(error.message);
  }
}

// Show thank-you message
function showThankYouMessage() {
  form.classList.add('hidden');
  thankYou.classList.remove('hidden');
}
