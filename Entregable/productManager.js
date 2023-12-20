class ProductManager {
  static #products = [];
  static #events=[];

  id;
  title;
  photo;
  price;
  stock;

  create(data) {
    const requiredProps = ["title", "photo", "price", "stock"];
    const missingProps = requiredProps.filter((prop) => !(prop in data));

    if (missingProps.length) {
      console.log(`faltan las propiedades: ${missingProps.join(" ")}`);
    } else {
      const id =
        ProductManager.#products[ProductManager.#products.length - 1]?.id + 1 ||
        1;

      ProductManager.#products.push({ id, ...data });
    }
  }
// return ProductManager.#products;
  getProducts() {
    try {
     const allProducts = ProductManager.#products;
     if (allProducts.length===0) {
       throw new Error("they arent products");
     }else{
       return allProducts;
     }
     
    } catch (error) {
     return error.message
    }
   }

 getProductById(id) {
try {
  let one = ProductManager.#products.find((el) => el.id ===id);
   if (one) {
   return one; 
   }else{
    throw new Error ("ERROR the product with id "+id+" doesnt exist");
   }
  
  } catch (error) {
  return error.message;
}
}
}

const ProdtManager = new ProductManager();

ProdtManager.create({
  title: "bolsa de consorcio",
  photo:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRay89um-pAfJd5Z8kMVZOKDSKdr9wWuUuVJw&usqp=CAU",
  price: 500,
  stock: 1500,
});

ProdtManager.create({
  title: "bolsa camiseta",
  photo:
    "https://tienda.papeleradelmar.com.ar/2982-large_default/bolsa-camiseta-20x30-reforzada.jpg",
    price: 700,
    stock:2000
});
console.log(ProdtManager.getProducts(1));
console.log(ProdtManager.getProductById(10));

ProdtManager.create({
  title: "bolsa camiseta",
  photo:
    "https://tienda.papeleradelmar.com.ar/2982-large_default/bolsa-camiseta-20x30-reforzada.jpg",
   
});


