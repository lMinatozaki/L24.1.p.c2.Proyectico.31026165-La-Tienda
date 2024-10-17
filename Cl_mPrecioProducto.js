export class Cl_mPrecioProducto {
    //Constructor de la clase
    constructor({ precioA, precioB, precioC }) {
      this.precioA = precioA;
      this.precioB = precioB;
      this.precioC = precioC;
    }

    //Setters & getters
    set precioA(pA) {
      this._precioA = +pA;
    }
    get precioA() {
      return this._precioA;
    }
  
    set precioB(pB) {
      this._precioB = +pB;
    }
    get precioB() {
      return this._precioB;
    }
  
    set precioC(pc) {
      this._precioC = +pc;
    }
    get precioC() {
      return this._precioC;
    }
}