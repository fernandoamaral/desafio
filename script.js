document.getElementById('form').addEventListener('submit', function (event) {
  event.preventDefault();
  let obj = {
    names: [],
    message: document.getElementById('message')
  }
  obj.names.push(document.getElementById('name1'));
  obj.names.push(document.getElementById('name2'));
  obj.names.push(document.getElementById('name3'));
  obj.names.push(document.getElementById('name4'));
  obj.names.push(document.getElementById('name5'));

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