import Product from "./../../../../entities/Product.js"

export default class Cart {
  constructor({ products }) {
    this.products = this.removeUndefinedProps(products)
  }

  removeUndefinedProps(products) {
    const results = []
    for (const product of products) {
      const keys = Reflect.ownKeys(product)
      if (!keys.length) continue;

      // keys.forEach(key => product[key] || delete product[key])
      keys.forEach(key => product[key] || Reflect.deleteProperty(product,key))

      // let newObject = {}
      // keys.forEach(key => {
      //   if (!keys[key]) return;
      //   newObject[key] = keys[key]
      // })
      results.push(new Product(product))
      // results.push(JSON.parse(JSON.stringify(new Product(product))))
    }

    return results
  }
}