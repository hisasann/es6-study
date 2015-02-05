'use strict';

function loop(func, count = 3) {
  for (var i = 0; i < count; i++) {
    func();
  }
}

function sum(...numbers) {
  return numbers.reduce(function(a, b) { return a + b; });
}

loop(function(){ console.log('hello')}); // hello hello hello
console.log(sum(1, 2, 3, 4)); // 10