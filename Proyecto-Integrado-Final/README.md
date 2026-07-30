# Proyecto Integrador Final

## Consignas

Desarrollar una API Rest para un cliente que tiene diversos productos en catálago, en su tienda oficial. Donde pueda administrarlos, habilitando la posibilidad de Leer, Crear, Actualizar y Eliminar la información sobre los productos.

La aplicación debe contar con una capa de autenticación para resguardar la seguridad de los datos que estarán alojados en una base de datos en la nube mediante el servicio de Firestore de Firebase.

Definir una arquitectura escalable, separando las distintas responsabilidades de la aplicación en capas que permitan establecer rutas, controladores, servicios y modelos de forma clara y prolija, además de las carpetas necesarias para guardar middlewares y configuración de servicios externos.

Además la aplicación debe contemplar el manejo de errores de forma clara, teniendo en cuenta fallos del tipo 404 para rutas no definidas, los estados 401 y 403 ante errores de autenticación y códigos de estado 400 y 500 cuando las peticiones contienen errores o nuestros servicios externos de datos no responden.

## Requerimientos del Proyecto

### Requerimiento  #1: Configuración Inicial

- Crear un directorio donde alojarás el proyecto e incluye un archivo `index.js` como punto de entrada.
- Inicia Node.js y configura npm unsando el comando `npm init -y`.
- Agrega la propiedad `"type":"module"` en el archivo `package.json` para habilitar ESModules.
- Configura un script llamado `start` para ejecutar el programa con el comando `npm run start`.

### Requerimiento #2: Instalación de dependencias

- Instala `express, cors, body-parser, dotenv, firebase` y `jsonwebtoken` como dependencias del proyecto.
- Instala `nodemon` como dependencia de desarrollo del proyecto.
- Configura un script llamado `dev` para ejecutar el programa con el comando `npm run dev`, para agilizar el proyecto en desarrollo.

### Requerimiento #3: Configuración del servidor

- Crea un servidor web con `express` y realiza su configuración en el archivo ` index.js`.
- Configura CORS para habilitar las peticiones de origen cruzado, así las aplicaciones Frontend de la empresa pueden consultar el servicio sin problemas.
- Configura el middleware global de body-parser para interpretar los body en formato JSON de las peticiones.
- Establece un middleware que maneje las rutas desconocidas, devolviendo el estado 404 y un mensaje.
- Crea un archivo `.env` donde se alojarán las variables de entorno del proyecto.

### Requerimiento #4: Rutas

- Crea la capa rutas del proyecto.
- Establece las rutas necesarias para atender las peticiones que interactúan los productos, así como también la ruta de login para autenticar usuarios:

1. `products.routes.js`:

   `GET /api/products` devuelve todos los productos.
   `GET /api/products/:id` devuelve el producto con el ID indicado.
   `POST /api/products/create` recibe en el cuerpo (body) de la petición la información sobre el nuevo producto para ser guardado en el servicio de datos en la nube.
   `DELETE /api/products/:id` elimina el producto con el ID indicado.

2. `auth.routes.js`:
   `POST /auth/login` recibe las credenciales de usuario en el cuerpo (body) de la petición y devuelve el Bearer token si son válidas o un error de autenticación en caso contrario.

### Requerimiento #5: Controladores y Servicos

- Crea la capa de controladores para cada una de las rutas establecidas en el requerimiento anterior.
- Crea la capa de servicios para atender a cada uno de los controladores.

### Requerimiento #6: Acceso a los datos

- Crea la capa de modelos de la aplicación.
- Crea un nuevo proyecto en Fitestire en Firebase, agrega una colección para registrar nuevos productos y crear el primer documento de producto para dale estructura y tipo de datos.
- Configura y conecta Firebase con el proyecto.
- Utiliza la instancia de Firebase creada y crea los métodos necesarios para que el modelo pueda interactuar con la base de datos remota.
- Conecta los servicios con los modelos.

### Requerimiento #7: Protege tus rutas

- Configura JWT en el proyecto.
- Crea un middleware de autenticación y proteje las rutas correspondientes.
- Agrega la lógica necesaria en el controlador de login para validar la identidad del usuario y devolver un Bearer Token.

### Requerimiento #8: Despliegue a producción

- Configura el archivo `vercel.json`.
- Crea un nuevo proyecto en Vercel.
- Despliega tu proyecto a producción.

### Extras: Testing y Swagger

- Documenta la API Rest con Swagger.
- Implementa unit testing y testing integration, implementando la metodologia de desarrollo de software TDD (Test-Driven Development).