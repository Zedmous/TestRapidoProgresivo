let numeros: number[] = [1, 2, 5,4];
let isProgressive = (numeros: number[]) => {
    let i = 0;
    let enc = true;
    while (i < numeros.length) {
        if (numeros[i] > numeros[i + 1]) {
            enc = false;
            i = numeros.length;
        }
        i++;
    }
    return enc;
}


console.log("Visualizando arreglo")
console.log(numeros)

let enc = isProgressive(numeros);


if (enc) {
    console.log("Es un arreglo progresivo")
} else {
    console.log("No es un arreglo progresivo");
    console.log("Se procede a eliminar un elemento");
    let posicion: number = Math.round(Math.random() * numeros.length);
    console.log("Posicion elegida: ", posicion-1);
    numeros.splice(posicion-1, 1);
    if (isProgressive(numeros)) {
        console.log("Es un arreglo progresivo")
    } else {
        console.log("No es un arreglo progresivo");
    }
    console.log(numeros)
    /**/

}

