class ProductManager{
    constructo(){
        this.products= []
    }
    
    getProducts =() => {
        return this.products
    }

    getNextID = () =>{
    const count = this.products.length

    if (count > 0) {
        const lastproduct = this.products [count - 1]
        const id = lastproduct.id + 1
        
        return id
    } else {
        return 1
    }
}

addProducts = (title, description, price, thumbnail, code, stock) => {
    const id = this.getNextID()
    
    const product = {
    id,
    title,
    description,
    price,
    thumbnail,
    code,
    stock,
}

const codeDuplicado = this.products.some(product => product.code === code)
        if (codeDuplicado == true) return console.log("CODE REPETIDO - No se carga producto")
        if (!codeDuplicado) { this.products.push(product) }
}


    getProductByID = (id) => {
        const productFound = this.products.find(product => product.id == id)
        if (productFound == undefined) return console.log("ERROR: PRODUCTO NO ENCONTRADO")
        console.log(productFound)

    }
}

const productManager = new ProductManager()

console.log(productManager.getProducts());

productManager.addProducts("Bowl", "Bowl base color", 1500, "Sin imagen", "0001", 10)

console.log(productManager.getProducts())
console.log("------------------------------------------------")

productManager.addProducts("Organizador", "Set organizadores", 3500, "Sin imagen", "0002", 10)
productManager.addProducts("      ", "", 0, "", "", )

console.log(productManager.getProducts())
console.log("-----------------------------------------------------")

productManager.addProducts("Tabla", "Tabla madera", 2000, "Con imagen", "0003", 10)
productManager.addProducts("Moldes ", "Moldes colores", 1700, "  Sin imagen", "0004", 10)


console.log(productManager.getProducts())
console.log("---------------------------------------------------")

productManager.getProductByID(2);
productManager.getProductByID(3);
