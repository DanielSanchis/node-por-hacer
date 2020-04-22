const argv = require('./config/yargs').argv;
const color = require('colors');
const porHacer = require('./por-hacer/por-hacer');
let comando = argv._[0];

switch (comando) {
    case "crear":
        console.log(argv.descripcion);
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case "listar":
        let listado = porHacer.getListado();
        //console.log(listado);
        for (let tarea of listado) {
            console.log('========Por Hacer========='.green);
            console.log(tarea.descripcion);
            console.log('Estado', tarea.completado);
            console.log('========================='.green);
        }
        //console.log("Mostrar todas als tareas por hacer".green);
        break;
    case "actualizar":
        //console.log("actualiza una tarea");
        //console.log("Actualizar : " + argv.descripcion + " a estado: " + argv.completado);
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        if (!actualizado) {
            console.log("No se ha encontrado la tarea " + argv.descripcion);
        }
        break;
    case "borrar":
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log("comando no reconocido");
}