function pedirNombre(){
    var nombre = prompt("Ingresa el nombre del alumno");
    return nombre;
}

// Invocar función
// var nombre1 = pedirNombre();
// console.log(nombre1);
// nombre1 = pedirNombre();
// console.log(nombre1);

function pedirCalificacion(){
    var calificaciones = [];
    for(var i = 0; i < 3; i++) {
        var calificacion = parseFloat(prompt("Ingresa la calificacion del Alumno"));
        calificaciones.push(calificacion);
    }
    return calificaciones;
}

var calif = pedirCalificacion();
console.log(calif);

// Función que calcula el promedio y regresa el promedio
function calcularPromedio(calificaciones){
    var suma = 0;
    for(var i = 0; i < calificaciones.length; i++){
        suma += calificaciones[i];        
    }
    var promedio = suma / calificaciones.length;
    return promedio;
}

var lista = [4, 5, 6];
var prom = calcularPromedio(lista);
console.log(prom);
