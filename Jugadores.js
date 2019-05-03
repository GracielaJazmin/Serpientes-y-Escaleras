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
  
    }

    set_posicion2(nuevaPosicion){
        this.posicion += nuevaPosicion
        document.getElementById("Numero2").innerHTML = "Posicion actual " + this.posicion;
    }

    movimiento() {
        if (this.posicion == 5) {
             this.posicion += 58
        }

         if (this.posicion == 14) {
            this.osicion += 49
        }

         if (this.posicion == 53) {
            this.posicion += 19
        }
         if (this.posicion == 64) {
            this.posicion += 21
        }

         if (this.posicion == 38) {
            this.posicion -= 18
        }

         if (this.posicion == 51) {
            this.posicion -= 41
        }

         if (this.posicion == 76) {
            this.posicion -= 22
        }

         if (this.posicion == 91) {
            this.posicion -= 18
        }

         if (this.posicion == 100) {
            console.log("Ganador");
        }

    }

}
