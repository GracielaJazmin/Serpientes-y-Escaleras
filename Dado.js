class Dado{
constructor(){
    this.numero = null;
}

    lanzar(){
       return Math.floor( Math.random()*6)+1
    }
}