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

const instance1 = Multiton.getInstance('key1')
const instance2 = Multiton.getInstance('key2')
const instance3 = Multiton.getInstance('key1')

console.log(instance1 === instance2) // false
console.log(instance1 === instance3) // true

instance1.someMethod() // Some method called
instance2.someMethod() // Some method called
instance3.someMethod() // Some method called