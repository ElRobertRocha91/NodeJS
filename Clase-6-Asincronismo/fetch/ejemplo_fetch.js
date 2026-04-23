/*
FETCH

¿Que es Fetch?

Fetch es una API nativa de JavaScritp presente tanto del lado del browser (navegador) 
como del servidor con Node, se utiliza para hacer solicitudes HTTP a servidores web.

Utiliza "promesas" de JavaScript para manejar las solicitudes y respuestas. 
Permitiendonos manejar código asincronico.

Ejemplo:

Un uso común de Fetch es en la carga de datos de un servidor para mostrar en una página web.
La siguiente es una solicituf Fetch básica que obtinene datos de un servidor y los convierte 
en formato JSON:
*/

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => response.json())
.then((data) => console.log(data));


// Ejemplo con configuración avanzada

const config = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer token',
    }, 
    body: JSON.stringify({ key: 'value' })
};

fetch('https://api.example.com/data', config)
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log('Error:', error));
