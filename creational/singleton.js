/**
 * Singleton
 * 
 * Singleton is a creational design pattern that ensures a class 
 * has only one instance and provides a global point of access to 
 * that instance.
 */

class Singleton {
  static instance

  a = 1
  b = 2
  c = 3

  constructor() {
    if (!this.constructor.instance) {
      this.constructor.instance = this
    }

    return this.constructor.instance
  }
}

const foo = new Singleton()
const bar = new Singleton()

console.log(foo === bar) // true

console.log(foo.a, foo.b, foo.c) // 1 2 3
console.log(bar.a, bar.b, bar.c) // 1 2 3

foo.a = 10
foo.b = 11
foo.c = 12

console.log(foo.a, foo.b, foo.c) // 10 11 12
console.log(bar.a, bar.b, bar.c) // 10 11 12