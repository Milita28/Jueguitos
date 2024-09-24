// horizontal desde teclado
let num = prompt("¿De cuantos * será la línea horizontal: ");
let Hori= "";
for (i = 0; i < num; i++ ){
    Hori = Hori + "*";
}
console.log(Hori);


// vertical desde teclado
let numerito = prompt("¿De cuantos * será la línea vertical: ");
for (i=0; i<numerito; i++){
    console.log("*"+[i]);
}