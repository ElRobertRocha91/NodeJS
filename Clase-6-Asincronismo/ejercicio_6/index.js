/* Ejercicio 1 - Consumir una API con Promesas */

// API de Ricky&Morty
const url = "https://rickandmortyapi.com/api";

function getDataApi() {
    return new Promise(function (resolved, rejected) {
        fetch(`${url}/character`, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => resolved(data.results.slice(0, 5)))
            .catch(error => rejected(error));
    });
}

console.log('Iniciando programa... ⚙️');
console.log('================================================================');
console.log('Iniciando solicitud a la API...');
console.log('================================================================');

// Invoca la promesa - obtener los datos de los personajes
// getDataApi()
// .then(data => console.log(data))
// .catch(error => console.error(error))
// .finally(() => console.log('Finalizando solicitud'));


/* Ejercicio - 2 Explorando la API con Async/Await */

// Función asincrona con async y await

async function getData() {
    try {
        const data = await getDataApi();
        console.log();
        console.log('================================================================');
        console.log('Solicitud exitosa. ✅');
        console.log('================================================================');
        console.log('Procesando los datos... 📊');
        console.log('================================================================');
        console.log();
        console.log('Lista de personajes');
        console.log();
        console.table(data, ['id', 'name', 'gender', 'species', 'status']);
    } catch (error) {
        console.log('Error al realizar la solicitud a la API. ❌');
        console.log(error);
    }
}

getData()