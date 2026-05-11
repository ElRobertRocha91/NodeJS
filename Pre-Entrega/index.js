console.log("================================");
console.log("Iniciando Programa");
console.log("================================");

const url = "https://fakestoreapi.com/products";

const args = process.argv.slice(2);
// console.log(args);

switch (args[0]) {
  case "GET":
    if (args[1] === "products") {
      fetch(url)
        .then(response => response.json())
        .then(data => console.log(data));
    } else if (args[1].includes("/")) { // products/{id}
      let params = args[1].split("/");
      let id_str = params[1];
      let id_num = parseInt(id_str);
      // console.log(id_num);
      fetch(`${url}/${id_num}`)
        .then(response => response.json())
        .then(data => console.log(data));
    } else {
      console.log("Error en la solicitud ❌");
    }
    break;
  case "POST":
    if (args[1] === "products" && args.length === 5) {
      const product = {
        title: args[2],
        price: parseFloat(args[3]),
        category: args[4]
      }
      // console.log(product);
      fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
      })
        .then(response => response.json())
        .then(data => console.log("Producto creado exitosamente ✅", data))
        .catch(error => console.log('Error:', error));
    } else {
      console.log("Error en la creación del nuevo producto ❌");
    }
    break;
  case "DELETE":
    if (args[1].includes("products") && args[1].includes("/")) {
      let params = args[1].split("/");
      let id_str = params[1];
      let id_num = parseInt(id_str);
      fetch(`${url}/${id_num}`, { method: 'DELETE' })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log('Error:', error));
    } else {
      console.log("Error en la eliminación del producto ❌");
    }
    break;
  default:
    console.log("Opción invalida ❌");
    console.log("Opciones disponibles: ");
    console.log();
    console.log("- GET");
    console.log("- POST");
    console.log("- DELETE");
    break;
}
