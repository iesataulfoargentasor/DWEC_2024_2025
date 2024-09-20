// Seleccionar todas las pestañas
const pestañas = document.querySelectorAll('nav ul li a');
// Añadir un event listener a cada pestaña
pestañas.forEach(pestana => {
    pestana.addEventListener('click', (event) => {
        event.preventDefault(); // Evitar que el enlace realice su acción por defecto
        const numeroPestana = pestana.getAttribute('data-pestana');
        console.log(`numeroPestana: ${numeroPestana}`)
        mostrarContenidoPestana(numeroPestana);
    });
});

// Función para cargar el archivo JavaScript correspondiente a cada pestaña
function mostrarContenidoPestana(numeroPestana) {
    // Limpia el contenido anterior
    if (numeroPestana < 10){
        document.getElementById('contenido').innerHTML = `<p>Cargando contenido para el usuario DAW20${numeroPestana} </p>`;
    } else {
        document.getElementById('contenido').innerHTML = `<p>Cargando contenido para el usuario DAW2${numeroPestana} </p>`;
    }

    // Ejecuta el script correspondiente según la pestaña
    switch (numeroPestana) {
        case '0':
            cargarScript('daw200.js');
            break;
        case '1':
            cargarScript('daw201.js');
            break;
        case '2':
            cargarScript('daw202.js');
            break;
        case '3':
            cargarScript('daw203.js');
            break;
        case '4':
            cargarScript('daw204.js');
            break; 
        case '5':
            cargarScript('daw205.js');
            break;
        case '6':
            cargarScript('daw206.js');
            break;
        case '7':
            cargarScript('daw207.js');
            break;
        case '8':
            cargarScript('daw208.js');
            break;
        case '9':
            cargarScript('daw209.js');
            break;
        case '10':
            cargarScript('daw210.js');
            break;
        case '11':
            cargarScript('daw211.js');
            break;
        case '12':
            cargarScript('daw212.js');
            break;
        case '13':
            cargarScript('daw213.js');
            break;
        case '14':
            cargarScript('daw214.js');
            break;
        case '15':
            cargarScript('daw215.js');
            break;
        case '16':
            cargarScript('daw216.js');
            break; 
        case '17':
            cargarScript('daw217.js');
            break;
        case '18':
            cargarScript('daw218.js');
            break;
        case '19':
            cargarScript('daw219.js');
            break;
        case '20':
            cargarScript('daw220.js');
            break;
        case '21':
            cargarScript('daw221.js');
            break;
        case '22':
            cargarScript('daw222.js');
            break;
        case '23':
            cargarScript('daw223.js');
            break;
        case '24':
            cargarScript('daw224.js');
            break;
        case '25':
            cargarScript('daw225.js');
            break;
        case '26':
            cargarScript('daw226.js');
            break;
        case '27':
            cargarScript('daw227.js');
            break;
        default:
            console.log('Pestaña no encontrada');
    }
}

// Función para cargar un archivo de script dinámicamente
function cargarScript(ruta) {
    const script = document.createElement('script');
    script.src = ruta;
    script.onload = () => {
        console.log(`Script ${ruta} cargado exitosamente`);
    };
    script.onerror = () => {
        console.log(`Error al cargar el script ${ruta}`);
    };
    document.body.appendChild(script);
}

