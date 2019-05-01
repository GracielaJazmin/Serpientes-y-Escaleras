document.getElementById('agregar').addEventListener('click',jugar)

var turno = 1
var jugador1, jugador2

function jugar(){
	nombre_jugador1= document.getElementById('jugador1').value
	nombre_jugador2= document.getElementById('jugador2').value

	jugador1 = new Jugador(nombre_jugador1)
	jugador2 = new Jugador(nombre_jugador2)

	
}


document.getElementById('lanzar').addEventListener('click',function(){
	if (turno == 1){
		turno = 2;
	}
	else if(turno == 2){
		turno = 1;
	}
})




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