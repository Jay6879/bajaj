function sendData() {
    const jsonDataInput = document.getElementById('jsonData').value;
    const responseArea = document.getElementById('responseArea');
  
    try {
      const data = JSON.parse(jsonDataInput);
      fetch('http://localhost:3000/bfhl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(data => {
        responseArea.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
      })
      .catch(error => {
        console.error('Error:', error);
        responseArea.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
      });
    } catch (error) {
      console.error('Parsing error:', error);
      responseArea.innerHTML = `<p style="color: red;">Invalid JSON input</p>`;
    }
  }

  window.sendData = sendData;
  