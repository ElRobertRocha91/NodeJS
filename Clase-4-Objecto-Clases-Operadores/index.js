// Crea un array con 10 objetos, donde cada objeto represente un automóvil con la 
// siguiente información: 
// - Marca 
// - Modelo 
// - Año 
// - Color

const list =[
    {
        marca: "Fiat",
        modelo: "Cronos",
        año: 2025,
        color: "Blanco"
    }, {
        marca: "Ford",
        modelo: "Ranger",
        año: 2025,
        color: "Gris plata"
    }, {
        marca: "Chevrolet",
        modelo: "Tracker",
        año: 2025,
        color: "Negro"
    }, {
        marca: "Volkswagen",
        modelo: "Amarok",
        año: 2025,
        color: "Blanco"
    }, {
        marca: "Toyota",
        modelo: "Corolla",
        año: 2025,
        color: "Gris oscuro"
    }, {
        marca: "Renault",
        modelo: "Sandero Stepway",
        año: 2025,
        color: "Rojo"
    }, {
        marca: "Peugeot",
        modelo: "208",
        año: 2017,
        color: "Azul"
    }, {
        marca: "Citroen",
        modelo: "C3",
        año: 2018,
        color: "Blanco"
    }, {
        marca: "Honde",
        modelo: "HR-V",
        año: 2016,
        color: "Nogro"
    }, {
        marca: "BMW",
        modelo: "Serie 3",
        año: 2015,
        color: "Gris plata"
    }
];

// Usa un método de array para recorrer la lista e imprime por consola todos los datos 
// de los automóviles cuyo año sea mayor a 2018.

function mayorA2018(array) {
    console.log("==================================");
    console.log("==================================");
    console.log("Autos con año mayor a 2018:")
    console.log("==================================");
    for (const element of array) {
        if (element.año > 2018) { // Mayor a 2018 
            // Mostrar mensaje en formato Template Literals o Literal String
            console.log(`|| Marca: ${element.marca} - Modelo: ${element.modelo} - Año: ${element.año} - Color: ${element.color}`);
        } 
    }
    console.log("==================================");
}

// mayorA2018(list);

function buscarPorColor(params, object) {
    console.log("==================================");
    console.log("==================================");
    console.log(`Autos de color ${params}`);
    console.log("==================================");
    for (const element of object) {
        if (element.color === params) {
            console.log(`|| Marca: ${element.marca} - Modelo: ${element.modelo} - Año: ${element.año} - Color: ${element.color}`);
        }
    }
    console.log("==================================");
}

buscarPorColor("Rojo", list);
