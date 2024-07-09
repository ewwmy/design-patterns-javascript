/**
 * Proxy
 * 
 * Proxy is a structural design pattern that provides a surrogate or 
 * placeholder for another object, controlling access to it. It can 
 * add additional behavior to the object being proxied, such as 
 * lazy initialization, access control, logging, and more.
 */

class Foo {
  do() {
      return 'Foo: Doing something'
  }
}

class ProxyFoo {
  constructor(obj) {
      this.obj = obj
  }

  do() {
      if (this.checkAccess()) {
        console.log('Proxy Foo: Access granted')
          return this.obj.do()
      } else {
        console.log('Proxy Foo: Access denied')
          return false
      }
  }

  checkAccess() {
      console.log('Proxy Foo: Checking access')
      return true
  }
}


const foo = new Foo()
const proxy = new ProxyFoo(foo)

console.log(proxy.do())

// Proxy Foo: Checking access
// Proxy Foo: Access granted
// Foo: Doing something