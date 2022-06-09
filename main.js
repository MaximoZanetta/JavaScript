//JUEGO TRUCO
//40 CARTAS: 4 TIPOS(ORO, BASTO, ESPADA,COPA)
//1-7 por 4    Y     10, 11, 12 por 4

//mazo
const mazo = []
const mazoMezclado =[]
const tipos = ["basto", "espada", "oro" ,"copa"]

//creacion de usuario
class Jugador {
    constructor(alias, cartasEnMano, puntaje){
        this.alias=alias;
        this.cartasEnMazo = cartasEnMano;
        this.puntaje = puntaje;
    }
}

class Partida {
    constructor(cartas, puntos){
        this.cartas = cartas;
        this.puntos = puntos;
    }
}

//creacion de cartas mediante  2 bucles for(uno para establecer numeros y el otro para tipo) y luego colocarlas en el mazo mediante un push

//primer operacion para las cartas del 1 al 7
for(let i = 1; i <= 7;i++){
    for(let j = 0; j < tipos.length;j++){

        const carta = {
            numero: i,
            tipo: tipos[j]
            //aca agregaria img: y le agregaria la imagen correspondiente de cada carta, llamando a i por el numero de la carta y a j por el tipo(crearia todas las fotos de las cartas y les pondria el mismo nombre cambiando los numeros y los tipos. Entonces colocaria por ejemplo: `${i}_de_${j}.png`)
        }
        mazo.push(carta)
    }
}

//segunda operacion para las cartas del 10 al 12
for(let i = 10; i <= 12;i++){
    for(let j = 0; j < tipos.length; j++){

        const carta = {
            numero: i,
            tipo: tipos[j]
        }
        mazo.push(carta)
    }
}


//Aca voy a hacer una funcion que me permita mezclar el mazo
const mezclarMazo = ()=>{
    mazoMezclado = mazo
}


//Luego de eso, una funcion que reparta 3 cartas
const repartir = ()=>{
    mazoMezclado
}


//funciones de cantar truco,retruco,vale 4

//funcion de cantar envido

//funcion de irse al mazo



console.log(mazo);

