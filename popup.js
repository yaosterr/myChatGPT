// popup.js
const input = document.getElementById('input');
const submit = document.getElementById('submit');
const output = document.getElementById('output');

submit.addEventListener('click', () => {
  const message = input.value;
  // Send the message to chatGPT and get the response
  fetch('https://api.openai.com/v1/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer YOUR_API_KEY'
    },
    body: JSON.stringify({
      'prompt': message,
      'model': 'chatGPT'
    })
  }).then(response => response.json())
    .then(response => {
      // Display the response in the output div
      output.innerHTML = response.text;
    });
});
