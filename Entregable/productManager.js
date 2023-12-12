class ProductManager {
    static #products = [];
  
    id;
    title;
    photo;
    price;
    stock;
  
    create(data) {
      const propsList = ["title", "photo", "price", "stock"];
      const keyList = Object.keys(data);
  
      const missingProps = [];
  
      for (let i = 0; i < propsList.length; i++) {
        !propsList.includes(keyList[i]) ? missingProps.push(propsList[i]) : null;
      }
  
      if (missingProps.length) {
        console.log(`faltan las propiedades: ${missingProps.join(" ")}`);
      } else {
        const id =
          ProductManager.#products[ProductManager.#products.length - 1]?.id + 1 ||
          1;
  
        ProductManager.#products.push({ id, ...data });
      }
    }
  
    getProducts() {
      return ProductManager.#products;
    }
  
    getProductById(id) {
      return ProductManager.#products.find((el) => el.id === id);
    }
  }
  
  const ProdtManager = new ProductManager();
  
  ProdtManager.create({
    title: "bolsa de consorcio",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRay89um-pAfJd5Z8kMVZOKDSKdr9wWuUuVJw&usqp=CAU",
    price: 500,
    stock: 1500,
  });
  
  console.log(ProdtManager.getProductById(1));
  
  ProdtManager.create({
    title: "bolsa camiseta",
    photo: "https://tienda.papeleradelmar.com.ar/2982-large_default/bolsa-camiseta-20x30-reforzada.jpg",
    
  });
  
  console.log(ProdtManager.getProducts());
  