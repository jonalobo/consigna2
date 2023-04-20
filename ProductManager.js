const fs = require('fs')

let productos = []
class ProductManager {
    constructor(title,description,price,thumbnail,code,stock){
        this.id = productos.length,
        this.title = title,
        this.description = description,
        this.price = price,
        this.thumbnail = thumbnail,
        this.code = code,
        this.stock = stock
    }
    addProduct(){
        let id = productos.length + 1
        const producto = {
            id,
            title : this.title,
            description: this.description,
            price: this.price,
            thumbnail: this.thumbnail,
            code: this.code,
            stock: this.stock
        }
        productos.push(producto)
        const data = JSON.stringify(productos)
        guardarProductos('productos.txt',data)
    }
   async getProducts(){
        const productosSinConvertir = await leerProductos()
        console.log(JSON.parse(productosSinConvertir))
    }
   async  getProductById(id){
        const productosSinParsear = await leerProductos()
        const demo = JSON.parse(productosSinParsear)
        demo.map((e)=>{
            if (e.id == id) {
                console.log(e)
            }
        })
    }
    updateProduct(){

    }
    deleteProduct(){

    }
}


async function guardarProductos(nombre,data) {
    await fs.promises.writeFile(nombre,data)
}
async function leerProductos() {
    let resultado = await fs.promises.readFile('productos.txt','utf-8')
    return resultado
}
const producto1 = new ProductManager('laptop','demo','demo','demo','demo','demo','demo')
const producto2 = new ProductManager('laptop','demo','demo','demo','demo','demo','demo')
producto1.addProduct()
producto2.addProduct()
producto2.getProducts()