# Ejercicio Práctico

## Ejercicio 1 - Configuración del Proyecto Base

### Misión:

1. Crear un nuevo proyecto con el comando `npm init -y` pára generar un archivos `package.json` básico.

2. Inicialzar un repositorio de Git en el proyecto con `Git init`.

3. Crear un archivo `.gitignore` que excluya a la carpeta `node_modules`.

4. Configura el archivos `package.json` para que soporte el estándar de imports ESModules. Modifica el archivo añadiendo `"tipe": "module"`.

5. Define un script en `package.json` para ejecutar el proyecto con Node.js usando `"start": "node index.js"`.

## Ejercicio 2 - Tu Primer Servidor Web

### Misión 2:

1. Usa la estructura creada en el ejercicio anterior para iniciar un servidor web.

2. Instale Express con `npm install express`.

3. Configura un servidor básico que corra en el puerto `3000` usando Express.

4. Configura un Middleware básico que muestre por consola el método y url solicitada, cuando sea visitada desde un navegador.

5. Agrega una ruta `/ping` que responda con el texto plano "/pong" cuando sea visitada desde un navegador.

## Extra - Implementar Testing con Jest y Supertest

### Misión 3:

1. Implementa Unit Testing, que verifique que cada vez que un navegador visite la ruta `http://localhost:3000`, se este recibiendo un código de estado `200` y el texto `/pong`.