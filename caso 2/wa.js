const selectEjemplo = document.getElementById('id-select-ejemplo');
const btnCargarEjemplo = document.getElementById('id-btn-cargar-ejemplo');
const btnPresentarEjemplo = document.getElementById('id-btn-presentar-ejemplo');
const listadoEjemplo = document.getElementById('id-listado-ejemplo');

let vectorCitas = [];
let vectorEspecialidades = [];

btnCargarEjemplo.addEventListener('click', function () {

    vectorCitas = [85, 102, 98, 180, 98, 175, 150];

    vectorEspecialidades = [
        'Ortodoncia',
        'Periodoncia',
        'Endodoncia',
        'Estética',
        'Implantes',
        'Urgencias',
        'Limpieza'
    ];

    alert('Datos cargados');
});

btnPresentarEjemplo.addEventListener('click', function () {

    let total = 0;
    let promedio = 0;
    let superiores = 0;
    let criticos = 0;
    let resultado = '';

    for (let i = 0; i < vectorCitas.length; i++) {
        total += vectorCitas[i];
    }

    promedio = total / vectorCitas.length;

    for (let i = 0; i < vectorCitas.length; i++) {

        if (vectorCitas[i] > promedio) {
            superiores++;
        }

        if (vectorCitas[i] < 100) {
            criticos++;
        }
    }

    resultado += 'CITAS POR ESPECIALIDAD\n\n';

    for (let i = 0; i < vectorCitas.length; i++) {
        resultado += vectorEspecialidades[i] + ': ' + vectorCitas[i] + '\n';
    }

    resultado += '\nTOTAL: ' + total + '\n';
    resultado += 'PROMEDIO: ' + promedio.toFixed(2) + '\n';
    resultado += 'SUPERIORES AL PROMEDIO: ' + superiores + '\n';
    resultado += 'DEMANDA CRITICA: ' + criticos + '\n\n';

    resultado += 'PORCENTAJES\n';

    for (let i = 0; i < vectorCitas.length; i++) {

        let porcentaje = (vectorCitas[i] / total) * 100;

        resultado += vectorEspecialidades[i] +
            ': ' +
            porcentaje.toFixed(2) +
            '%\n';
    }

    listadoEjemplo.value = resultado;
});