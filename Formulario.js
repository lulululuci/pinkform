const scriptURL = 'https://script.google.com/macros/library/d/1Fjm6Dhf_vjz-ch-VrrHZHvvT7x-l7yW-KHTEHMBbzfiDyk5wDRElLRsK/2'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  // Enviar a Google Sheets
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("¡Gracias! ¡¡Este formulario fue enviado!!" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))

    // Enviar con EmailJS
  emailjs.sendForm('TU_SERVICE_ID', 'TU_TEMPLATE_ID', form)
    .then(() => {
      alert("¡Formulario enviado correctamente!");
      window.location.reload();
    }, (error) => {
      alert("Error al enviar el correo: " + error);
    });
});
