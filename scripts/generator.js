'use strict';

let range = {
    from: 0,
    to: 10,
  
    *[Symbol.iterator]() { // краткая запись для [Symbol.iterator]: function*()
      for(let value = this.from; value <= this.to; value++) {
        yield value;
      }
    }
  };
  
console.log( [...range] ); // [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
