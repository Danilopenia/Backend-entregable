import fs from "fs"

class ProductsFs{
    static #products


    constructor(path){
        this.path = path;
        this.products = [];
        this.init();
    }
    init() {
        const file = fs.existsSync(this.path);
        if (file) {
          this.products = JSON.parse(fs.readFileSync(this.path, "utf-8"));
        } else {
          fs.writeFileSync(this.path, JSON.stringify([], null, 2));
        }
      }
      async createProduct({ title, price, ...data }) {
        try {
          if (!title || !price) {
            throw new Error("Please, insert title & price");
            //VA A ACTIVAR EL CATCH (MANEJADOR DE ERRORES)
          }  


      const product = {
        id:
          this.products.length === 0
            ? 1
            : this.products[this.products.length - 1].id + 1,
        title,
        price: data.price || 10,
        stock: data.stock || 50,
        date: data.date || new Date(),
      };
      this.products.push(product);
      await fs.promises.writeFile(
        this.path,
        JSON.stringify(this.products, null, 2)
      );
      return true;
    } catch (error) {
      return error.message;
    }
}
getProducts() {
    try {
    
     if (this.products.length===0) {
       throw new Error("they arent products");
     }else{
       return this.products;
     }
     
    } catch (error) {
     return error.message
    }
   }

 getProductById(id) {
try {
  const one = this.products.find((each) => each.id === Number(id));
   if (!one) { 
    throw new Error ("ERROR the product with id "+id+" doesnt exist");
   }else{
    return one;
   }
  
  } catch (error) {
  return error.message;
}
}}

const ruta = "./Entrega2/data/fs/files/products.json";
const contenido = JSON.stringify([{title:"aaa"},{price:1000},{stock:200}],null,2);
fs.writeFileSync(ruta, contenido)