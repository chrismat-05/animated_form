document.getElementById('dataForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const guests = document.getElementById('guests').value;

  // Send form data to GitHub Action API endpoint
  await fetch('https://api.github.com/repos/chrismat_05/animated_form/dispatches', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`,  // Reference to the environment variable
    },
    body: JSON.stringify({
      event_type: 'submit_form', // Customize the event type
      client_payload: {
        name,
        phone,
        guests
      }
    }),
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
