var numeros = [1, 2, 3, 2, 2, 4, 5, 6, 7];
var isProgressive = function (numeros) {
    var i = 0;
    var enc = true;
    var cont = 0;
    var pos = [];
    while (i < numeros.length) {
        if (numeros[i] > numeros[i + 1] && i == 0) {
        }
        else if (numeros[i] > numeros[i + 1] && numeros[i] > numeros[i - 1] && (i > 0 && i < numeros.length - 1)) {
            enc = false;
            cont++;
            pos.push(i);
        }
        else if (i == numeros.length - 1) {
            i = numeros.length;
        }
        i++;
    }
    return { enc: enc, pos: pos, cont: cont };
};
console.log("Visualizando arreglo");
console.log(numeros);
var datos = isProgressive(numeros);
if (datos.enc) {
    console.log("Es un arreglo progresivo");
}
else {
    numeros.splice(datos.pos[0] + 1, 1);
    var datos2 = isProgressive(numeros);
    console.log("Visualizando arreglo");
    console.log(numeros);
    if (datos2.enc) {
        console.log("Es un arreglo progresivo");
    }
    else {
        console.log("No es un arreglo progresivo");
    }
    //console.log("No es un arreglo progresivo");
}
