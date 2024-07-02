class Multiton {
  static instances = {}

  static getInstance(key) {
    if (!this.instances[key]) {
      this.instances[key] = new this()
    }
    return this.instances[key]
  }

  someMethod() {
    console.log('Some method called')
  }
}

const obj1 = Multiton.getInstance('abc')
const obj2 = Multiton.getInstance('def')
const obj3 = Multiton.getInstance('abc')

console.log(obj1 === obj2) // false
console.log(obj1 === obj3) // true

console.log(
  Multiton.getInstance('ghi') ===
    Multiton.getInstance('jkl')
) // false
console.log(
  Multiton.getInstance('ghi') ===
    Multiton.getInstance('ghi')
) // true

obj1.someMethod() // Some method called
obj2.someMethod() // Some method called
obj3.someMethod() // Some method called