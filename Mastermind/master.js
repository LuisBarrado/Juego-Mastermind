let botonJugar = document.getElementById('botonJugar');
let botonIntento = document.getElementById('botonIntento');
let combinacionAdivinada = false;
let combinacionCorrecta = [];
let combinacionInicial = [];
const colores = ['ROJO', 'AMARILLO', 'VERDE', 'AZUL']; 

botonIntento.addEventListener('click', () => 
{
    AdivinaColores.value = AdivinaColores.value.toUpperCase();
    const input = document.getElementById('AdivinaColores').value.trim();
    const coloresIngresados = input.split(' ') ;    
    let coloresCorrectos = coloresIngresados.filter(color => colores.includes(color));
    if (coloresCorrectos.length === 4) {
        let coloresEnPosicionCorrecta = 0;
        for (let i = 0; i < 4; i++) 
            if (coloresCorrectos[i].toUpperCase() === combinacionCorrecta[i].toUpperCase()) 
                coloresEnPosicionCorrecta++;
        if (coloresEnPosicionCorrecta === 4) {
            alert('¡Felicidades! ¡Has adivinado la combinación correcta!');
            combinacionAdivinada = true;
            botonIntento.style.display = 'none';
            AdivinaColores.style.display = 'none';
            AdivinaColores.value = '';
        } else {
            alert(`Colores en posición correcta: ${coloresEnPosicionCorrecta}`);
            botonIntento.style.display = 'block';
        }
    } else 
        alert("Error. Necesitas escribir cuatro colores válidos: rojo, amarillo, verde y azul");
});

function generarCombinacion(colores) {
    let combinacion = [];
    for (let i = 0; i < 4; i++) {
        const indiceAleatorio = Math.floor(Math.random() * colores.length);
        combinacion.push(colores[indiceAleatorio]);
    }
    console.log('Combinación correcta generada:', combinacion);
    return combinacion;
}

botonJugar.addEventListener('click', () => 
{
    combinacionCorrecta = generarCombinacion(colores);
    botonIntento.style.display = 'block';
    AdivinaColores.style.display = 'block';
    AdivinaColores.value = '';
}
)