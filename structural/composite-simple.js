class Node {
  constructor(name, value = null) {
    this.name = name
    this.value = value
    this.children = []
  }

  add(node) {
    this.children.push(node)
  }

  remove(node) {
    const index = this.children.indexOf(node)
    if (index !== -1) {
      this.children.splice(index, 1)
    }
  }

  getValue() {
    if (this.value !== null) {
      return this.value
    }
    return this.children.reduce((total, child) => total + child.getValue(), 0)
  }

  display(depth = 0) {
    console.log(`${' '.repeat(depth)}+ ${this.name}`)
    for (const child of this.children) {
      child.display(depth + 2)
    }
  }
}

const root = new Node('Root element')

const node1 = new Node('Node 1')
const node2 = new Node('Node 2')

const leaf1 = new Node('Leaf 1.1', 100)
const leaf2 = new Node('Leaf 1.2', 200)
const leaf3 = new Node('Leaf 2.1', 300)

node1.add(leaf1)
node1.add(leaf2)

node2.add(leaf3)

root.add(node1)
root.add(node2)

root.display()

console.log(`Total value: ${root.getValue()}`)

// + Root element
//   + Node 1
//     + Leaf 1.1
//     + Leaf 1.2
//   + Node 2
//     + Leaf 2.1
// Total value: 600