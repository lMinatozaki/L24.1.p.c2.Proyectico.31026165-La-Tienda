export class Cl_mCliente {
    //Constructor de la clase
    constructor({ cedula, codProducto, cantidad, precios }) {
      this.cedula = cedula;
      this.codProducto = codProducto;
      this.cantidad = cantidad;
      this.precios = precios;
    }

    //Setters & getters
    set cedula(c){
        this._cedula = +c;
    }

    get cedula(){
        return this._cedula;
    }

    set codProducto(cP) {
        this._codProducto = cP;
    }

    get codProducto() {
        return this._codProducto;
    }

    set cantidad(cT){
        this._cantidad = +cT;
    }

    get cantidad(){
        return this._cantidad;
    }

    set precios(p){
        this._precios = p;
    }

    get precios(){
        return this._precios;
    }
    
    //Método para calcular el monto a pagar
    montoPagar() {
        switch (this.codProducto) {
          case "A":
            return this.precios.precioA * this.cantidad;
          case "B":
            return this.precios.precioB * this.cantidad;
          case "C":
            return this.precios.precioC * this.cantidad;
          default:
            return 0;
        }
    }
}