// LISTA DE PRECIOS CON IVA INCLUIDO

// Lista de precios
const prices = [1200, 5000, 3500, 1400, 6000, 5600, 8600, 9800, 4000, 7000];

 const listPricesIVA = prices.map((price) => price *= 1.21);

// Función para mostrar la lista de precios con IVA al usuario
function listPrices(array) {
    console.log("==================================");
    console.log("==================================");
    console.log("Lista de precios:");
    console.log("==================================");
    console.log("==================================");
    for (const element of array) {
        console.log(`El precio es $${element} - IVA incluido.`);
    }
    console.log("==================================");
}

listPrices(listPricesIVA);