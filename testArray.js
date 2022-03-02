var numeros = [1, 2, 5, 4];
var isProgressive = function (numeros) {
    var i = 0;
    var enc = true;
    while (i < numeros.length) {
        if (numeros[i] > numeros[i + 1]) {
            enc = false;
            i = numeros.length;
        }
        i++;
    }
    return enc;
};
console.log("Visualizando arreglo");
console.log(numeros);
var enc = isProgressive(numeros);
if (enc) {
    console.log("Es un arreglo progresivo");
}
else {
    console.log("No es un arreglo progresivo");
    console.log("Se procede a eliminar un elemento");
    var posicion = Math.round(Math.random() * numeros.length);
    console.log("Posicion elegida: ", posicion - 1);
    numeros.splice(posicion - 1, 1);
    if (isProgressive(numeros)) {
        console.log("Es un arreglo progresivo");
    }
    else {
        console.log("No es un arreglo progresivo");
    }
    console.log(numeros);
    /**/
}
