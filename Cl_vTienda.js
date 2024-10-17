export default class Cl_vTienda {
    //Constructor de la clase
    constructor(controlador) {
      this.vista = document.getElementById("mainForm");
      this.tabla = document.getElementById("mainForm_tabla");
      this.lblMontoTotal = document.getElementById("mainForm_lblMontoTotal");
      this.lblProdMayor = document.getElementById("mainForm_lblProdMayor");
      this.btAgregar = document.getElementById("mainForm_btAgregar");
      
      //Evento para cuando el usuario clickee el botón, se muestre el form para agregar un cliente
      this.btAgregar.onclick = () => controlador.mostrarVistaCliente();
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
  
    //Reporte del cliente
    reporteCliente({ cedula, codProducto, cantidad, montoPagar, acMontoTotal, prodMayor }) {
      this.tabla.innerHTML += `
        <tr>
          <td>${cedula}</td>
          <td>${codProducto}</td>
          <td>${cantidad}</td>
          <td>${montoPagar}</td>
        </tr>`;
      this.lblMontoTotal.innerHTML = acMontoTotal;
      this.lblProdMayor.innerHTML = prodMayor;
    }
  }