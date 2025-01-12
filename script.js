document.getElementById('dataForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const guests = document.getElementById('guests').value;

  // Send form data to GitHub Action API endpoint
  await fetch('https://your-webhook-url-here', { // Replace this URL with your GitHub Action API URL
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, phone, guests }),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
    alert('Form submitted successfully!');
  })
  .catch((error) => {
    console.error('Error:', error);
    alert('Failed to submit form.');
  });
});
