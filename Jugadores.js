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
        document.getElementById("Numero").innerHTML = "Posicion actual " + this.posicion;
            if (this.posicion = movimiento()) {
            return this.posicion
        }
    }

    set_posicion2(nuevaPosicion){
        this.posicion += nuevaPosicion
        document.getElementById("Numero2").innerHTML = "Posicion actual " + this.posicion;

    }

    movimiento() {
        if (this.posicion == 5) {
            return this.posicion + 58
        }

        else if (this.posicion == 14) {
            return this.posicion + 49
        }

        else if (this.posicion == 53) {
            return this.posicion + 19
        }
        else if (this.posicion == 64) {
            return this.posicion + 21
        }

        else if (this.posicion == 38) {
            return this.posicion - 18
        }

        else if (this.posicion == 51) {
            return this.posicion - 41
        }

        else if (this.posicion == 76) {
            return this.posicion - 22
        }

        else if (this.posicion == 91) {
            return this.posicion - 18
        }

        else if (this.posicion = 100) {
            console.log("Ganador");
        }

    }

}
