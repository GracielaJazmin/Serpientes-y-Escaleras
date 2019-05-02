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
        if (this.posicion == 5) {
        return this.posicion + 58
        }
    }

    set_posicion2(nuevaPosicion){
        this.posicion += nuevaPosicion
        document.getElementById("Numero2").innerHTML = "Posicion actual " + this.posicion;
        if (this.posicion == 14) {
           return this.posicion + 49
         }
 
    }

    movimiento(posicion) {
        if (posicion == 5) {
             return posicion + 58
        }

        else if (posicion == 14) {
            return posicion + 49
        }

        else if (posicion == 53) {
            return  posicion + 19
        }
        else if (posicion == 64) {
            return  posicion + 21
        }

        else if (posicion == 38) {
            return  posicion - 18
        }

        else if (posicion == 51) {
            return  posicion - 41
        }

        else if (posicion == 76) {
            return  posicion - 22
        }

        else if (posicion == 91) {
            return  posicion - 18
        }

        else if (posicion == 100) {
            console.log("Ganador");
        }

    }

}
