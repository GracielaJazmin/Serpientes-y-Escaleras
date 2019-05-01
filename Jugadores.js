class Jugador {
    constructor(Nojugador) {
        this.Nojugador = Nojugador;
        this.posicion = 0;
    }

    jugar(dado) {
        this.posicion += dado
        this.movimiento(this.posicion)
        return this.dado
    }

    movimiento(dado) {
        if (this.posicion == 5) {
            this.avanzar(dado)
        }

        if (this.posicion == 14) {
            this.avanzar(dado)
        }

        if (this.posicion == 53) {
            this.avanzar(dado)
        }
        if (this.posicion == 64) {
            this.avanzar(dado)
        }

        if (this.posicion == 5) {
            this.avanzar(dado)
        }

        if (this.posicion == 38) {
            this.retrocede(dado);
        }

        if (this.posicion == 38) {
            this.retrocede(dado);
        }

        if (this.posicion == 76) {
            this.retrocede(dado);
        }

        if (this.posicion == 91) {
            this.retrocede(dado);
        }


        if (this.posicion >= 100) {
            this.posicion = 100;
            console.log("Ganador");
        }

    }

    avanzar()
    {
        this.posicion +=10
        this.movimiento(this.posicion)
    }

    retrocede(){
        this.posicion -=5
        this.movimiento(this.posicion)
    }

}