export default class Cl_vCliente {
    //Constructor de la clase
    constructor(controlador) {
      this.vista = document.getElementById("clienteForm");
      this.inCedula = document.getElementById("clienteForm_inCedula");
      this.inCodProducto = document.getElementById("clienteForm_inCodProducto");
      this.inCantidad = document.getElementById("clienteForm_inCantidad");
      this.btAceptar = document.getElementById("clienteForm_btAceptar");
      
      //Evento para cuando el usuario clickee el botón, añada un cliente
      this.btAceptar.onclick = () => {
        controlador.agregarCliente({
          cedula: this.inCedula.value,
          codProducto: this.inCodProducto.value,
          cantidad: this.inCantidad.value
        });
      };
      this.ocultar();
    }
    
    //Método para mostrar la vista
    mostrar() {
      this.vista.hidden = false;
    }
    //Método para ocultar la vista
    ocultar() {
      this.vista.hidden = true;
    }
}