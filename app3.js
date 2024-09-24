// Cuadro de * de 4x4
let num = prompt("¿De cuantos * será la línea: ");
for (i = 0; i < num; i++){
    filas = "";
        for (j = 0; j < num; j++){
            filas = filas + "*"+[i];
        }
        console.log(filas);
    }
