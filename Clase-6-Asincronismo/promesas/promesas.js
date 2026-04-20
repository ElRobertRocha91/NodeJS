/* 
Una promesa es un objeto que representa el resultado de eventual de una tarea asincronica.
El resultado eventual puede ser un valor o un error.
Es por eso que las promesas cuentan con dos estados finales: Resolved y Rejected

Por otra parte, para poder recuperar el resultado de una Promesa utilizaresmos los métodos:
.them()
.catch()
.finally()
*/

function taskAsync(callback){
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

console.log('===========================');
console.log('Inicio de la tarea.');
console.log('===========================');

taskAsync()
.then((result) => console.log(result))
.catch((error) => console.log(error))
.finally(() => console.log('Fin de la tarea.'));