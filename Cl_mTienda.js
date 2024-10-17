export class Cl_mTienda {
    //Constructor de la clase
    constructor({ acCantidadA, acCantidadB, acCantidadC, acMontoTotal }) {
      this.acCantidadA = acCantidadA;
      this.acCantidadB = acCantidadB;
      this.acCantidadC = acCantidadC;
      this.acMontoTotal = acMontoTotal;
    }
    
    //Método para procesar un cliente
    procesarCliente(c) {
      const montoPagar = c.montoPagar();
      this.acMontoTotal += montoPagar;
      switch (c.codProducto) {
        case "A":
          this.acCantidadA += c.cantidad;
          break;
        case "B":
          this.acCantidadB += c.cantidad;
          break;
        case "C":
          this.acCantidadC += c.cantidad;
          break;
      }
    }
    
    //Método que retorna el monto total acumulado
    totalVendido() {
      return this.acMontoTotal;
    }
    
    //Método para comparar y determinar el producto más vendido
    prodMayor() {
      if (this.acCantidadA >= this.acCantidadB && this.acCantidadA >= this.acCantidadC) {
        return "Producto A";
      } else if (this.acCantidadB >= this.acCantidadA && this.acCantidadB >= this.acCantidadC) {
        return "Producto B";
      } else {
        return "Producto C";
      }
    }
}