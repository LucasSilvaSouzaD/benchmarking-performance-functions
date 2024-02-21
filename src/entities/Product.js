export default class Product {
  constructor({ descripton, name, price, tmpProperty, activePromoId }) {
    this.descripton = descripton
    this.name = name
    this.price = price
    this.tmpProperty = tmpProperty
    this.activePromoId = activePromoId ?? 0
  }
}