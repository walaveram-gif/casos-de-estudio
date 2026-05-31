const selectEjemplo = document.getElementById('id-select-ejemplo');
const btnCargarEjemplo = document.getElementById('id-btn-cargar-ejemplo');
const btnPresentarEjemplo = document.getElementById('id-btn-presentar-ejemplo');
const listadoEjemplo = document.getElementById('id-listado-ejemplo');

let vectorVentas = [];
let vectorCategorias = [];

btnCargarEjemplo.addEventListener('click', function () {

    vectorVentas = [120, 95, 140, 170, 210, 130, 105];

    vectorCategorias = [
        'Arroz',
        'Azúcar',
        'Leche',
        'Aceite',
        'Pan',
        'Bebidas',
        'Galletas'
    ];

    alert('Datos cargados');
});

btnPresentarEjemplo.addEventListener('click', function () {

    let total = 0;
    let promedio = 0;
    let superiores = 0;
    let criticos = 0;
    let resultado = '';

    for (let i = 0; i < vectorVentas.length; i++) {
        total += vectorVentas[i];
    }

    promedio = total / vectorVentas.length;

    for (let i = 0; i < vectorVentas.length; i++) {

        if (vectorVentas[i] > promedio) {
            superiores++;
        }

        if (vectorVentas[i] < 100) {
            criticos++;
        }
    }

    resultado += 'VENTAS POR CATEGORIA\n\n';

    for (let i = 0; i < vectorVentas.length; i++) {
        resultado += vectorCategorias[i] + ': ' + vectorVentas[i] + '\n';
    }

    resultado += '\nTOTAL: ' + total + '\n';
    resultado += 'PROMEDIO: ' + promedio.toFixed(2) + '\n';
    resultado += 'SUPERIORES AL PROMEDIO: ' + superiores + '\n';
    resultado += 'VENTAS CRITICAS: ' + criticos + '\n\n';

    resultado += 'PORCENTAJES\n';

    for (let i = 0; i < vectorVentas.length; i++) {

        let porcentaje = (vectorVentas[i] / total) * 100;

        resultado += vectorCategorias[i] +
            ': ' +
            porcentaje.toFixed(2) +
            '%\n';
    }

    listadoEjemplo.value = resultado;
});