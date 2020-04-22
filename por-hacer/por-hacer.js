const fs = require('fs');

let listadoPorHacer = [];

const grabarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) {
            throw new Error('No se pudo guardar', err);
        }
    })
}


const crear = (descripcon) => {
    cargarDB();
    let porHacer = {
        descripcion: descripcon,
        completado: false
    }
    listadoPorHacer.push(porHacer);
    grabarDB();
    return porHacer
    cargarDB();
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }

}

const getListado = () => {
    cargarDB();

    return listadoPorHacer;

}

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    //propuesta mia
    /* for (let tarea of listadoPorHacer) {
        if (String(tarea.descripcion.toLowerCase).match(descripcion.toLowerCase)) {
            tarea.completado = completado;
        }
    } */

    //propuesta profesor
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        grabarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB();
    let nuevolistado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);

    if (listadoPorHacer.length === nuevolistado.length) {
        return false;
    } else {
        listadoPorHacer = nuevolistado;
        grabarDB();
        return true;
    }

}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}