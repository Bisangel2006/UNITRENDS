document.addEventListener('DOMContentLoaded', function() {
    // 1. Seleccionar el formulario por la clase 'msj'.
    const formulario = document.querySelector('form.msj');
    
    // 2. Definir el número de WhatsApp al que se enviará el mensaje.
    const numeroWhatsapp = '50576997193'; // Este es el número de destino.

    // Si el formulario se encuentra, adjuntar el escuchador de eventos.
    if (formulario) {
        // 3. Agregar un escuchador al evento 'submit' (cuando se pulsa "Enviar").
        formulario.addEventListener('submit', function(evento) { // 'evento' en lugar de 'e'
            // Previene el envío del formulario a la acción definida en el HTML (action="#").
            evento.preventDefault(); 

            // 4. Obtener los valores de los campos por su ID.
            const valorNombre = document.getElementById('nombre').value;
            const valorEmail = document.getElementById('email').value;
            const valorMensaje = document.getElementById('mensaje').value;

            // 5. Verificación adicional de los campos 'required'.
            if (!valorNombre || !valorEmail || !valorMensaje) {
                alert('Por favor, completa todos los campos obligatorios antes de enviar.');
                return;
            }

            // 6. Construir el texto completo del mensaje base de WhatsApp.
            const textoMensajeBase = `
*¡Conversación iniciada desde la pagina web de Unitrends!.*

*Nombre:* ${valorNombre}
*Correo electrónico:* ${valorEmail}

*Mensaje:*
${valorMensaje}
`;

            // 7. Codificar el mensaje para la URL.
            const mensajeParaURL = encodeURIComponent(textoMensajeBase);

            // 8. Construir la URL completa de WhatsApp.
            const urlWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${mensajeParaURL}`;

            // 9. Abrir la nueva URL en una nueva pestaña.
            window.open(urlWhatsapp, '_blank'); 
        });
    }
});