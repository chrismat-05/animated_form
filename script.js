document.getElementById('dataForm').addEventListener('submit', async (e) => { 
  e.preventDefault(); // Prevent the default form submission
  
  // Capture the form data
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const guests = document.getElementById('guests').value;

  // Construct the payload for GitHub API
  const payload = {
    event_type: 'submit_form', // Customize this for your workflow trigger
    client_payload: {
      name,
      phone,
      guests
    }
  };

  try {
    // Send the data to GitHub Actions using GitHub's API for public repos
    const response = await fetch('https://api.github.com/repos/chrismat-05/animated_form/dispatches', { // Replace with your GitHub repository URL
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    // Check if the request was successful
    if (response.ok) {
      const data = await response.json();
      console.log('Success:', data);
      alert('Form submitted successfully!');
    } else {
      throw new Error('Failed to submit form.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Failed to submit form.');
  }
});
