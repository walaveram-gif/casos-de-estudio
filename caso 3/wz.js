const selectEjemplo = document.getElementById('id-select-ejemplo');
const btnCargarEjemplo = document.getElementById('id-btn-cargar-ejemplo');
const btnPresentarEjemplo = document.getElementById('id-btn-presentar-ejemplo');
const listadoEjemplo = document.getElementById('id-listado-ejemplo');

let vectorEjemplo = [];
let vectorZonas = [];

btnCargarEjemplo.addEventListener('click', function () {

    const dimension = parseInt(selectEjemplo.value);

    vectorEjemplo = [];
    vectorZonas = [];

    cargarVector(dimension);

    alert('Datos cargados');
});

btnPresentarEjemplo.addEventListener('click', function () {

    let total = 0;
    let promedio = 0;
    let mayoresPromedio = 0;
    let criticos = 0;
    let resultado = '';

    for (let i = 0; i < vectorEjemplo.length; i++) {
        total += vectorEjemplo[i];
    }

    promedio = total / vectorEjemplo.length;

    for (let i = 0; i < vectorEjemplo.length; i++) {

        if (vectorEjemplo[i] > promedio) {
            mayoresPromedio++;
        }

        if (vectorEjemplo[i] < 100) {
            criticos++;
        }
    }

    resultado += 'ENVIOS POR ZONA\n\n';

    for (let i = 0; i < vectorEjemplo.length; i++) {

        resultado +=
            vectorZonas[i] +
            ': ' +
            vectorEjemplo[i] +
            ' envios\n';
    }

    resultado += '\n';
    resultado += 'TOTAL: ' + total + '\n';
    resultado += 'PROMEDIO: ' + promedio.toFixed(2) + '\n';
    resultado += 'ZONAS SOBRE EL PROMEDIO: ' + mayoresPromedio + '\n';
    resultado += 'ZONAS CON SERVICIO CRITICO: ' + criticos + '\n\n';

    resultado += 'PORCENTAJES\n\n';

    for (let i = 0; i < vectorEjemplo.length; i++) {

        let porcentaje = (vectorEjemplo[i] / total) * 100;

        resultado +=
            vectorZonas[i] +
            ': ' +
            porcentaje.toFixed(2) +
            '%\n';
    }

    listadoEjemplo.value = resultado;
});

function cargarVector(dimension) {

    const datos = [140, 140, 110, 125, 160, 190, 110];

    const zonas = [
        'Norte',
        'Sur',
        'Este',
        'Oeste',
        'Centro',
        'Noroeste',
        'Sureste'
    ];

    for (let i = 0; i < dimension; i++) {

        vectorEjemplo[i] = datos[i];
        vectorZonas[i] = zonas[i];
    }
}