document.getElementById('agregar').addEventListener('click',jugar)

var turno = 1
var jugador1, jugador2

function jugar(){
	nombre_jugador1= document.getElementById('jugador1').value
	nombre_jugador2= document.getElementById('jugador2').value

	jugador1 = new Jugador(nombre_jugador1)
	jugador2 = new Jugador(nombre_jugador2)

	
}

document.getElementById('agregar').addEventListener('click',function(){
document.getElementById('dadojuga1').innerHTML = "Dado de: "+ jugador1
document.getElementById('dadojuga2').innerHTML = "Dado de: "+ jugador2
})





document.getElementById('lanzar').addEventListener('click',function(){
	if (turno == 1){
		turno = 2;
	}
	else if(turno == 2){
		turno = 1;
	}
})

document.getElementById('lanzar').addEventListener('click',lanzardado1)
function lanzardado1(){
var dado = new Dado();
var random = dado.lanzar()
jugador1.set_posicion(random);
jugador1.movimiento()
console.log(random)
document.getElementById('dado').innerHTML = random
}

document.getElementById('lanzar2').addEventListener('click',lanzardado2)
function lanzardado2(){
var dado2 = new Dado();
var random = dado2.lanzar()
jugador2.set_posicion2(random);
jugador2.movimiento()
console.log(random)
document.getElementById('dado').innerHTML = random
}







