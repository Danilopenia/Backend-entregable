const fs = require ("fs") 
const crypto = require("crypto")

class ProductsManager{
    static #products


   
    init() {
      try{
        const exists = fs.existsSync(this.path);
        if (!exists) {
          const data = JSON.stringify([],null,2 );
          fs.writeFileSync(this.path, data);
        } else {
          this.products = JSON.parse(fs.readFileSync(this.path, "utf-8"));
        }
      }catch(error){
        return error.message;
      }
      } constructor(path){
        this.path = path;
        this.products = [];
        this.init();
    }
      async createProduct(data ) {
        try {
          if (!data.title || !data.price) {
            throw new Error("Please, insert title & price");
            //VA A ACTIVAR EL CATCH (MANEJADOR DE ERRORES)
          }  
        
      const product = {
        id: crypto.randomBytes(12).toString("hex"),
        title:data.title,
        price: data.price || 10,
        stock: data.stock || 50,
        date: data.date || new Date(),
      };
      this.products.push(product);
      const jsonData = JSON.stringify(this.products,null,2)
        await fs.promises.writeFile(this.path, jsonData);
        console.log("create"+ product.id);
        return product.id;
    }catch(error){
      console.log(error.message);
      return error.message
    }}
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

const products = new ProductsManager("./data/fs/files/products.json");
//products.getProducts();
products.createProduct({ title: "hp1", price: 100 });
products.createProduct({ title: "hp2", price: 100 });
products.getProducts();
products.getProductById(1);
