import app from './index.js';
import resquest from 'supertest';

// Comprobamos que exita la ruta a GET /ping
describe('GET /ping', () => {
    // La función test nos permite comprobar funciones especificas 
    test('should respond with a 200 status code', async () => {
        // Ej: Realizar una petición asincrona que reciba un codigo de estado 200 o un texto plano
        const response = await resquest(app).get('/ping');
        // Con expect(), podemos comprobar que es lo que queremos comprobar o que tipo de datos recibir
        expect(response.statusCode).toBe(200); 
    });
    test('should respond with a "/pong" text string', async () => {
        const response = await resquest(app).get('/ping');
        expect(response.text).toBe("/pong");
    });
});