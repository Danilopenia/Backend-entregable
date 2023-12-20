import fs from "fs"

const ruta = "./Entregable/productos/ProductoA.json"
const contenido = JSON.stringify([{title:"bolsa1"},{price:1000},{stock:200}],null,2)

fs.writeFile(ruta,contenido,(error)=>{
    if (error) {
        return error
    }
})

const existe = fs.existsSync(ruta)
console.log(existe);
fs.unlink(ruta, (error)=> {
    if (error) {
        console.log(error);
        return error
    }
})
const deleteProduct =  fs.existsSync(ruta);
console.log(deleteProduct);
