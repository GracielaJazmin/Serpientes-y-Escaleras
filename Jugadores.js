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
        this.movimiento(this.posicion);
        return this.posicion
    }

    set_posicion2(nuevaPosicion){
        this.posicion += nuevaPosicion
        document.getElementById("Numero2").innerHTML = "Posicion actual " + this.posicion;
        this.movimiento();
        return this.posicion
    }

    

    movimiento(suma) {
        if (this.posicion = 5) {
             suma = this.posicion + 58
        }

        else if (this.posicion = 14) {
            suma = this.posicion + 49
        }

        else if (this.posicion = 53) {
            suma =  this.posicion + 19
        }
        else if (this.posicion = 64) {
            suma =  this.posicion + 21
        }

        else if (this.posicion = 38) {
            suma =  this.posicion - 18
        }

        else if (this.posicion = 51) {
            suma =  this.posicion - 41
        }

        else if (this.posicion = 76) {
            suma =  this.posicion - 22
        }

        else if (this.posicion = 91) {
            suma =  this.posicion - 18
        }

        else if (this.posicion = 100) {
            console.log("Ganador");
        }

    }

}
