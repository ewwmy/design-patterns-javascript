const foo = {
  a: 1,
  b: 2,
}

const proxy = new Proxy(foo, {
  get(target, property) {
    console.log(`Trying to read property: ${property}`)
    return target[property]
  },

  set(target, property, value) {
    console.log(`Trying to set property: ${property} equal to ${value}`)
    target[property] = value
  },

  deleteProperty(target, property) {
    console.log(`Trying to delete property: ${property}`)
    delete target[property]
  }
})

console.log(proxy.a)
// Trying to read property: a
// 1

console.log(proxy.b)
// Trying to read property: b
// 2

console.log(proxy.c = 3)
// Trying to set property: c equal to 3
// 3

delete proxy.a // Trying to delete property: a