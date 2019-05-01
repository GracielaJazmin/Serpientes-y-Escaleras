document.getElementById('agregar').addEventListener('click',jugar)

function jugar(){
	nombre_jugador1= document.getElementById('jugador1').value
	nombre_jugador2= document.getElementById('jugador2').value

	var jugador1 = new Jugador(nombre_jugador1)
	var jugador2 = new Jugador(nombre_jugador2)

	var turno1 = 1
	var turno2 = 2
	if (turno1 == 1) {
		turno++
	}

	if(turno2 == 2){
		turno--
	}



}





/*var dado = new Dado();

function agregarjugador(){
let player1 = new Jugador(document.getElementById('jugador1').value);
let player2 = new Jugador(document.getElementById('jugador2').value);
dado.lanzar(player1)
dado.lanzar(player2)
}


function jugador1()
{
	document.getElementById('Numero').textContent = player1.jugar(dado.lanzar());
}

function jugador2()
{
	document.getElementById('Numero').textContent = player2.jugar(dado.lanzar());
}

document.getElementById('jugador1').addEventListener('click',jugador1);
document.getElementById('jugador2').addEventListener('click',jugador2);
*/