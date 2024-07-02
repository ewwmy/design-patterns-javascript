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