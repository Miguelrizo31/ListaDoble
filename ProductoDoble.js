class Producto {
  constructor(id, nombre, stock, precio) {
    this.id = id;
    this.nombre = nombre;
    this.precio = stock;
    this.precio = precio;
    this.next = null;
  }
  datos() {
    return "<h3>" + this.id + "</h3>" +
      "<p>" + this.nombre +
      ":::  Promedio= " + this.stock + "<br>" +
      + this.precio + "</p>";
  }
}
class Inventario {
  constructor() {
    this.inicio = null;
  }
  agregar(nuevo) {
    if (this.inicio == null) {
      this.inicio = nuevo;
    }
    var n = nuevo;
    var t = this.Inicio
    while (t.next != null) {
      t = t.next;
    }
    if (n.Id < t.Id) {
      n.next = t;
      n.previous = t.previous;
      t.previous.next = n;
      t.previous = n;
    }
    else {
      t.next = n
      n.previous = t
    }
  }
  listar() {
    var res = "";
    if (this.inicio != null)
      res = this.lista_rec(this.inicio);
    return res;
  }
  lista_rec(nodo) {
    if (nodo.next = null)
      return nodo.datos();
    else
      return nodo.datos() + this.lista_rec(nodo.next);
  }
  eliminar(id) {

    if (this.inicio != null) {
      if (this.inicio.id == id)
        this.inicio = this.inicio.next;
      else {
        var t = this.inicio;
        while (t.next != null) {
          if (t.next.id == id) {
            t.next = t.next.next;
            return true;
          }
          else
            t = t.next;
        }
        return false;
      }
    }
  }

  buscar(id) {
    var temp = this.inicio;
    while (temp != null) {
      if (id == temp.id)
        return temp;
      else
        temp = temp.next;
    }
    return null;
  }
}

var boton_guardar = document.getElementById('boton_guardar');

boton_guardar.addEventListener('click', () => {

  var id, nombreVal, stockVal, precioVal;

  id = document.getElementById('txt_id').value;

  nombreVal = document.getElementById('txt_nombre').value;

  stockVal = document.getElementById('txt_cantidad').value;

  precioVal = document.getElementById('txt_precio').value;
})
