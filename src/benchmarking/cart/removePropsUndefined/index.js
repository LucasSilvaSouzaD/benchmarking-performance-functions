import Benchmark from "benchmark";

import CartRMPropsFor from './cart/removePropsUndefined/commom/cart-rm-props-for.js'
import CartRMPropsMap from './cart/cart-rm-props-map.js'

const suite = new Benchmark.Suite;

const data = {
  products: [
    {
      id: "one",
      name: undefined,
      price: undefined
    },
    {
      id: "one",
      name: "Lucas",
      price: undefined
    }
  ]
}

suite
  .add('Cart#CartRMPropsMap', function () {
    new CartRMPropsMap(data)
  })
  .add('Cart#CartRMPropsFor', function () {
    new CartRMPropsFor(data)
  })
  .on('cycle', (event) => console.log(String(event.target)))
  .on('complete', function () {
    console.log(`Fastest is ${this.filter('fastest').map('name')}`);
    console.log('Average time:');
    this.forEach((bench) => {
      console.log(`${bench.name}: ${bench.stats.mean} seconds`);
    });
  })
  .run({async: true})