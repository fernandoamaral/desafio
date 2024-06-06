document.getElementById('form').addEventListener('submit', function (event) {
  event.preventDefault();
  let obj = {
    names: [],
    message: document.getElementById('message').value
  }
  obj.names.push(document.getElementById('nome1').value);
  obj.names.push(document.getElementById('nome2').value);
  obj.names.push(document.getElementById('nome3').value);
  obj.names.push(document.getElementById('nome4').value);
  obj.names.push(document.getElementById('nome5').value);

  console.log(obj);

  fetch('https://fsdt-contact-acf4ab9867a7.herokuapp.com/contact', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
  })
      .then(response => {
          if (!response.ok) {
              throw new Error('Error sending data');
          }
          return response.json();
      })
      .then(data => {
          console.log('Data send:', data);
      })
      .catch(error => {
          console.error('Error:', error);
      });
});