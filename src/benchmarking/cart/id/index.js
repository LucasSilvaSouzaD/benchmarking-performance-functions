import Benchmark from "benchmark";

import CartUUID from './cart/cart-uuid.js'
import CartCrypto from './cart/cart-crypto.js'

const suite = new Benchmark.Suite;
suite
  .add('Cart#cartUUID', function () {
    new CartUUID()
  })
  .add('Cart#cartCrypto', function () {
    new CartCrypto()
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