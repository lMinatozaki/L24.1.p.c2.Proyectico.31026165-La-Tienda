//Importaciones
import { Cl_mTienda } from "./Cl_mTienda.js";
import { Cl_mCliente } from "./Cl_mCliente.js";
import { Cl_mPrecioProducto } from "./Cl_mPrecioProducto.js";
import Cl_vTienda from "./Cl_vTienda.js";
import Cl_vCliente from "./Cl_vCliente.js";
import Cl_vPrecioProducto from "./Cl_vPrecioProducto.js";

export default class Cl_controlador {
  constructor() {
    this.mPrecioProducto = new Cl_mPrecioProducto({ precioA: 10, precioB: 5, precioC: 20 });
    this.mTienda = new Cl_mTienda({ acCantidadA: 0, acCantidadB: 0, acCantidadC: 0, acMontoTotal: 0 });
    this.vTienda = new Cl_vTienda(this);
    this.vCliente = new Cl_vCliente(this);
    this.vPrecioProducto = new Cl_vPrecioProducto(this);

    this.mostrarVistaTienda();
  }

  //Método para agregar un cliente
  agregarCliente({ cedula, codProducto, cantidad }) {
    let cliente = new Cl_mCliente({ cedula: cedula, codProducto: codProducto, cantidad: cantidad, precios: this.mPrecioProducto });
    this.mTienda.procesarCliente(cliente);
    this.vTienda.reporteCliente({
      cedula: cliente.cedula,
      codProducto: cliente.codProducto.toUpperCase(),
      cantidad: cliente.cantidad,
      montoPagar: cliente.montoPagar().toFixed(2),
      acMontoTotal: this.mTienda.totalVendido().toFixed(2),
      prodMayor: this.mTienda.prodMayor()
    });
    this.mostrarVistaTienda();
  }

  //Método para mostrar la vista del cliente
  mostrarVistaCliente() {
    this.vTienda.ocultar();
    this.vCliente.mostrar();
  }

  //Método para mostrar la vista de la tienda
  mostrarVistaTienda() {
    this.vCliente.ocultar();
    this.vTienda.mostrar();
  }
}