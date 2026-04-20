/*
El async/await es una forma más moderna de lograr el asincronismo en JavaScript que se basa en las promesas.

- El async es una palabra clave que se utiliza para poder definir una función asincrónica.
- El await es una palabra clave que se utiliza dentro de una función asincrónica para esperar 
  la resolución de una promesa antes de continuar con la ejecución del código.
*/

function taskAsync(){
    return new Promise(function(resolved, rejected){
        setTimeout(function(){
            if (Math.random() < 0.5) {
                resolved('Tarea asincrónica completada. ✅')
            } else {
                rejected(new Error('Tarea asincronica fallida. ❌'))
            }
        }, 3000)
    });
}

async function executeAsyncTask() {
    console.log('===========================');
    console.log('Inicio de la tarea.');
    console.log('===========================');
    try {
        const result = await taskAsync();
        console.log(result);
    } catch (error) {
        console.log(error);
    } finally {
        console.log('Fin de la tarea.')
    }
}

executeAsyncTask();