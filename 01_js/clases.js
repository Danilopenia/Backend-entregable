class ProductManager {
  static cantidadDeProductos = 0;
  constructor(id, title, description, price, thumbnail, code, stock) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.thumbnail = thumbnail;
    this.code = code;
    this.stock = stock;
    this.agregarProductos();
  }
  //addProduct(){}aaa
  

  agregarProductos() {
    ProductManager.cantidadDeProductos++;
  }
  //getProductById(){}
  getProducts() {
    console.log(this);
  }
}

const product1 = new ProductManager(
  "producto1",
  "bolsa",
  "consorcio",
  100,
  "httpsaaa",
  "p001",
  "10"
);
const product2 = new ProductManager(
  "producto2",
  "bolsa camiseta",
  "consorcio",
  100,
  "httpsaaa",
  "p002",
  "10"
);
product1.getProducts();
product2.getProducts();

console.log("productos hasta el momento",ProductManager.cantidadDeProductos);
