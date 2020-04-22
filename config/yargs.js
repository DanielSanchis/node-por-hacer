const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'descripción de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'marca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Eliminamos la tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}