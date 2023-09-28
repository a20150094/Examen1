var nombre = prompt("Bienvenido a al cuestionario sobre los mares. Ingresa tu nombre: ");

var res1 = prompt("1. ¿Cuánta agua hay en la Tierra?\nA: Alrededor de un 41% de la superficie terrestre es agua.\nB: Alrededor de un 51% de la superficie terrestre es agua.\nC: Alrededor de un 71% de la superficie terrestre es agua.");

if(res1 == "C"){
    res1 = 1;
}else if(res1 == "A"){
    res1 = 0;
}
else if(res1 == "B"){    
    res1 = 0;
}else{
    alert(nombre + ", no es una opción válida");
}

var res2 = prompt("2. ¿Qué océano es el más grande?\nA: El Pacífico.\nB: El Atlántico.\nC:El Índico.");

if(res2 == "A"){
    res2 = 1;
}else if(res2 == "B"){
    res2 = 0;
}
else if(res2 == "C"){    
    res2 = 0;
}else{
    alert(nombre + ", no es una opción válida");
}

var res3 = prompt("3. ¿Cuánto mide la parte más profunda de los Océanos?\nA: 11 Km\nB: 23 Km\nC: 31 Km");

if(res3 == "C"){
    res3 = 1;
}else if(res3 == "B"){
    res3 = 0;
}
else if(res3 == "A"){    
    res3 = 0;
}else{
    alert(nombre + ", no es una opción válida");
}

var total = res1 + res2 + res3;

document.write(nombre + ", has logrado responder correctamente: <br>");
document.write(total + "<br>");
if (total <= 1){
    document.write("Puedes hacerlo mejor");
}else{
    document.write("Felicitaciones, sabes mucho sobre el mar");
}