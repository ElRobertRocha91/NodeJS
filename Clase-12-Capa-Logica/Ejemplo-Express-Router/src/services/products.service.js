const products = [
    {
        id: 1,
        name: "Producto 1",
        precio: 1000
    }, 
    {
        id: 2,
        name: "Producto 2",
        precio: 2000
    }
];

export const getAllProductsService = async () => {
    return products;
};

export const getProductByIdService = async (id) => {
    return products.find(product => product.id == id);
};

export const createProductService = async (productData) => {
    const newProduct = {
        id: products.length + 1, 
        name: productData.name, 
        price: productData.price
    };
    products.push(newProduct);
    
    return newProduct;
}

export const updateProductService = async (productData) => {
    // Primer lógica para actualizar
    // for (let i = 0; i < products.length; i++) {
    //     if(products[i].id == productData.id) {
    //         products[i].name = productData.name;
    //         products[i].price = productData.price;
    //         return products[i];
    //     }
    // }
    
    // Segunda lógica para actualizar
    const product = products.find(product => product.id == productData.id);
    if (!productData.id || !productData.name || !productData.price) {
        throw new Error('Datos incompletos para actualizar el producto ❌');
    } else {
        product.name = productData.name;
        product.price = productData.price;
        return product;
    }
}

export const deleteProductService = async (id) => {
    // Primer lógica para eliminar el producto del array original
    let idNum = Number(id);
    let index = -1;
    for (let i = 0; i < products.length; i++) {
        if(products[i].id == id) {
            index = i;// Localizo el índice del elemento a eliminar
            break;
        }
    }
    // Validación
    if (index > -1) {
        let deleteProduct = products.splice(index, 1)[0];
        return deleteProduct;
    }
}