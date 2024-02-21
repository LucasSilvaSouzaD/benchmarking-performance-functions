import Benchmark from "benchmark";
import database from '../../../database/index.js'

import CartPriceFor from './commom/cart-price-for.js'
import CartPriceReduce from './commom/cart-price-reduce.js'

const suite = new Benchmark.Suite;

suite
  .add('Cart#CartPriceReduce', function () {
    new CartPriceReduce(database)
  })
  .add('Cart#CartPriceFor', function () {
    new CartPriceFor(database)
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