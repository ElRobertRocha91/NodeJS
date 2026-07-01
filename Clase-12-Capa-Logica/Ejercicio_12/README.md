# Ejercicio Práctico N° 12

### Organización de Rutas y Capas en tu API

### Misión:

1. Crear rutas organizadas con Express Router
- Migrar las rutas de tu archivo principal a archivos separados en una carpeta llamada `routes` por ejemplo: `products.routes.js`.
- Usa EXPRESS ROUTER para configurar el o los archivos de rutas y asegurar de explotarlos correctamente para que puedan ser utilizados en el archivo principal.

2. Implementar controladores para manejar la lógica
- Crea un archivo llamado `products.controller.js` dentro de la carpeta `controllers`.
- Crear los controladores necesarios para responder a las rutas definidas en el ejercicio anterior.
- Mueve la lógica de las rutas al controlador correspondiente y asegúrate de  que las funciones sean clara y reutilizables.

3. Añadir una capa de servicios con datos simulados
- Crear un archivo llamado `products.service.js` dentro de la carpeta `services`.
- Simula datos en formato JSON, como una lista de productos o usuarios, y utiliza estas funciones en los controladores para devolver respuestas dinámicas.