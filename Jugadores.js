class Jugador {
    constructor(nombre) {
        this.nombre = nombre;
        this.posicion = 0;
    }

    get_obtener(){
        return this.nombre
    }

    set_posicion(nuevaPosicion){
        this.posicion += nuevaPosicion
        document.getElementById("Numero").innerHTML = "Posicion actual" + this.posicion;
    }

    jugar(dado) {
        this.set_posicion(dado);
        //this.movimiento(this.posicion)
        
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

}
