/**
 * Iterator
 * 
 * Iterator is a behavioral design pattern that provides a way to 
 * access elements of a collection sequentially without exposing 
 * its underlying representation.
 */

class MyCollection {
  items = []

  constructor(items = []) {
    this.items = items
  }

  add(item) {
    this.items.push(item)
  }

  [Symbol.iterator]() {
    let index = 0
    let items = this.items

    return {
      next() {
        if (index < items.length) {
          return {
            value: items[index++],
            done: false,
          }
        } else {
          return {
            done: true,
          }
        }
      },
    }
  }
}

// usage
const collection = new MyCollection(['item1', 'item2'])
collection.add('item3')

for (const item of collection) {
  console.log(item)
}
// item1
// item2
// item3

// alternate usage
const iterator = collection[Symbol.iterator]()
console.log(iterator.next()) // { value: 'item1', done: false }
console.log(iterator.next()) // { value: 'item2', done: false }
console.log(iterator.next()) // { value: 'item3', done: false }
console.log(iterator.next()) // { done: true }

// generator
function* myGenerator(collection) {
  let index = 0

  while (index < collection.length) {
    yield collection[index++]
  }
}

const gen = myGenerator(['one', 'two', 'three'])

for (const item of gen) {
  console.log(item)
}
// one
// two
// three