const steps = document.querySelectorAll('.form-step');
const nextBtns = document.querySelectorAll('.next-btn');
const prevBtns = document.querySelectorAll('.prev-btn');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
const thankYou = document.querySelector('.thank-you');
const form = document.getElementById('animatedForm');

let currentStep = 0;

nextBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    steps[currentStep].classList.remove('active');
    currentStep++;
    steps[currentStep].classList.add('active');
  });
});

prevBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    steps[currentStep].classList.remove('active');
    currentStep--;
    steps[currentStep].classList.add('active');
  });
});

yesBtn.addEventListener('click', () => {
  steps[currentStep].classList.remove('active');
  currentStep++;
  steps[currentStep].classList.add('active');
});

noBtn.addEventListener('click', (e) => {
  e.preventDefault();
  showThankYouMessage();
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  showThankYouMessage();
});

function showThankYouMessage() {
  form.classList.add('hidden');
  thankYou.classList.remove('hidden');
}