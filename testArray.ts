let numeros: number[] = [1, 2, 3, 2,2, 4, 5, 6, 7];
let isProgressive = (numeros: number[]) => {
    let i = 0;
    let enc = true;
    let cont = 0;
    let pos: number[] = [];
    while (i < numeros.length) {
        if(numeros[i] > numeros[i + 1] && i==0){

        }else if (numeros[i] > numeros[i + 1] && numeros[i] > numeros[i - 1]  && (i>0 && i<numeros.length-1)) {
            enc = false;
            cont++;
            pos.push(i);
        }else if(i==numeros.length-1){
            i=numeros.length;
        }
        i++;
    }
    return { enc, pos, cont };
}

console.log("Visualizando arreglo")
console.log(numeros)
let datos = isProgressive(numeros);
if (datos.enc) {
    console.log("Es un arreglo progresivo")
} else {

    numeros.splice(datos.pos[0] + 1, 1)
    let datos2 = isProgressive(numeros);
    console.log("Visualizando arreglo")
    console.log(numeros)
    if (datos2.enc) {
        console.log("Es un arreglo progresivo")
    } else {
        console.log("No es un arreglo progresivo");
    }

    //console.log("No es un arreglo progresivo");
}

