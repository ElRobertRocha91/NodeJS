console.log("================================");
console.log("Iniciando Programa");
console.log("================================");
console.log();

const args = process.argv.slice(2);
// console.log(args);

switch (args[0]) {
    case "GET":
        console.log("Toma un dato ✅");
        break;
    case "POST":
        console.log(`Recibimos ${args[1]} satisfactoriamente ✅`);
        break;
    case "PUT":
        console.log(`Modificamos el item con el id: ${args[1]} satisfactoriamente ✅`);
        break;
    case"DELETE":
        console.log(`El item con el id: ${args[1]} se eliminó con éxito ✅`);
        break;
    default:
        console.log("Opción invalida ❌");
        console.log("Opciones disponibles: ");
        console.log();
        console.log("- GET");
        console.log("- POST");
        console.log("- PUT");
        console.log("- DELETE");
        break;
}

console.log();
console.log("================================");
console.log("Programa finalizado");
console.log("================================");