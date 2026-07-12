import { db } from "../data/firebase.data.js";
import { collection, getDocs, getDoc, addDoc, deleteDoc, doc, setDoc, updateDoc } from "firebase/firestore";

const productsCollection = collection(db, 'products');

// Método para obtener todos los productos
export async function getAllProducts() {
    const querySnapshot = await getDocs(productsCollection);
    const products = [];
    querySnapshot.forEach((doc) => {
        products.push({ id: doc.id, ...doc.data() });
    });
    return products;
}; 

// Método para buscar un producto por su ID
export async function getProductById(id) {
    const productDoc = await getDoc(doc(productsCollection, id));
    if (productDoc.exists()) {
        return { id: productDoc.id, ...productDoc.data() };
    } else {
        return null;
    }
};

// Método para guardar un producto en Firestore
export async function saveProduct(product) {
    const docRef = await addDoc(productsCollection, product);
    return { id: docRef.id, ...product };
};

// Método para actualizar un producto en Firestore
export async function updateProduct(id, data) {
    const productRef = doc(db, 'products', id);
    await updateDoc(productRef, data);
    return { id, ...data }
}

// Método para eliminar un producto por su ID
export async function deleteProduct(id) {
    const productRef = doc(db, 'products', id);
    const productDoc =  await getDoc(productRef);

    if (!productDoc.exists()) {
        return null;
    } else {
        await deleteDoc(doc(productsCollection, id));
        return { id }
    }
};