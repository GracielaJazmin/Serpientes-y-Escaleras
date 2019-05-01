var dado = new Dado();

var player1 = new Jugador();
var player2 = new Jugador();


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
