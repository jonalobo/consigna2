const fs = require('fs')

let productos = []
class ProductManager {
    constructor(title, description, price, thumbnail, code, stock) {
            this.title = title,
            this.description = description,
            this.price = price,
            this.thumbnail = thumbnail,
            this.code = code,
            this.stock = stock
    }
    addProduct() {
        let id = productos.length + 1
        const producto = {
            id,
            title: this.title,
            description: this.description,
            price: this.price,
            thumbnail: this.thumbnail,
            code: this.code,
            stock: this.stock
        }
        productos.push(producto)
        const data = JSON.stringify(productos)
        guardarProductos('productos.txt', data)
    }
    async getProducts() {
        const productosSinConvertir = await leerProductos()
        console.log(JSON.parse(productosSinConvertir))
    }
    async getProductById(id) {
        const productosSinParsear = await leerProductos()
        const demo = JSON.parse(productosSinParsear)
        demo.find((e) => {
            if (e.id === id) {
                console.log(e)
            }
        })
    }
    async updateProductById(id, productoActualizado) {
        const productosSinParsear = await leerProductos()
        const demo = JSON.parse(productosSinParsear)
        const {title, description,price,thumbnail,code,stock} = productoActualizado
        demo.map((e)=>{
            if (e.id === id) {
                const {id} = e
                e = {id, title, description, price, thumbnail, code, stock}                
            }
            productos.push(e)
        })
        const data = JSON.stringify(productos)
        guardarProductos('productos.txt', data)
    }
    async deleteProductById(id) {
        const productosSinParsear = await leerProductos()
        const demo = JSON.parse(productosSinParsear)
        demo.map((e)=>{
            if (e.id === id) {
                console.log(e)
            } else {
                productos.push(e)
            }
        })
        console.log(productos)
    }
}

async function guardarProductos(nombre, data) {
    await fs.promises.writeFile(nombre, data)
}
async function leerProductos() {
    let resultado = await fs.promises.readFile('productos.txt', 'utf-8')
    return resultado
}
const producto1 = new ProductManager('laptop1', 'demo1', 'demo1', 'demo1', 'demo1', 'demo1', 'demo1')
const producto2 = new ProductManager('laptop2', 'demo', 'demo', 'demo', 'demo', 'demo', 'demo')
const producto3 = new ProductManager('laptop3', 'demo', 'demo', 'demo', 'demo', 'demo', 'demo')
const producto4 = new ProductManager('laptop4', 'demo', 'demo', 'demo', 'demo', 'demo', 'demo')
producto1.addProduct()
producto2.addProduct()
producto3.addProduct()
producto4.addProduct()
producto4.deleteProductById(2)
/* producto4.getProductById(1) */
/* producto4.updateProductById(4, { title: 'prueba', description:'prueba',price:'prueba',thumbnail:'prueba',code:'prueba',stock:'prueba' }) */