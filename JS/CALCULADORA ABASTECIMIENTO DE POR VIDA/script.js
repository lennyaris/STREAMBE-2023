let edadactual = prompt("Decime tu edad actual")

let edadmaxima = prompt("Decime la edad maxima que crees vivir")

let snackfav = prompt("Decime el nombre de tu snack favorito")

let cantidadsnacks = prompt("Cuantos paquetes de ese snack comes por dia??")

let aniosrestantes = edadmaxima - edadactual

let diasporaniosrestantes = aniosrestantes*365

let snacksrestantesporanio = diasporaniosrestantes*cantidadsnacks

alert("Necesitaras" + " " + snacksrestantesporanio + " " + "de tus snacks favoritos para que te alcancen durante" + " " + diasporaniosrestantes + " " + "dias")

let precio = snacksrestantesporanio*3

alert("Gastaras" + " " + precio + " " +"Dolares para comprar todos esos snacks" + " ")