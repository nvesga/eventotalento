document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Evita el envío del formulario para procesar el mensaje

    var name = document.getElementById('name').value;
    var welcomeMessage = document.getElementById('welcomeMessage');

    welcomeMessage.innerHTML = '¡Bienvenido/a ' + name + '! Gracias por registrarte en el curso de Programación TalentoTech.<br><a href="gracias.html">Salir</a>';
});
