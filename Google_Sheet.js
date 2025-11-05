const scriptURL = 'https://script.google.com/macros/s/AKfycbznlXrrkhgodQVUaYgtrAH9gixAlmJSP1WralcxX5TqsIfx9bQG1vZZWaoZzkZHY_Y/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("¡Gracias! ¡¡Este formulario fue enviado!!" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
