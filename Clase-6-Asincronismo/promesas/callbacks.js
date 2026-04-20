// Un callback es una función que se pasa como argumento a otra función y se ejecuta cuando se completa la tarea.

function taskAsync(callback){
    setTimeout(function(){
        console.log('Tarea asincrónica completada.');
        callback();
    }, 3000)
}

console.log('Inicio de la tarea.');
taskAsync(function() {
    console.log('Fin de la tarea.');
});