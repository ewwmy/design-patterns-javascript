class Component {
  constructor(name) {
    this.name = name
  }

  add(component) {
    throw new Error('Method `add()` should be overridden')
  }

  remove(component) {
    throw new Error('Method `remove()` should be overridden')
  }

  display(depth = 0) {
    throw new Error('Method `display()` should be overridden')
  }
}

class Leaf extends Component {
  display(depth = 0) {
    console.log(`${' '.repeat(depth)}- ${this.name}`)
  }
}

class Composite extends Component {
  constructor(name) {
    super(name)
    this.children = []
  }

  add(component) {
    this.children.push(component)
  }

  remove(component) {
    const index = this.children.indexOf(component)
    if (index !== -1) {
      this.children.splice(index, 1)
    }
  }

  display(depth = 0) {
    console.log(`${' '.repeat(depth)}+ ${this.name}`)
    for (const child of this.children) {
      child.display(depth + 2)
    }
  }
}

const root = new Composite('Root element')

const node1 = new Composite('Node 1')
node1.add(new Leaf('Leaf 1.1'))
node1.add(new Leaf('Leaf 1.2'))

const node2 = new Composite('Node 2')
node2.add(new Leaf('Leaf 2.1'))

root.add(node1)
root.add(node2)

root.display()

// + Root element
//   + Node 1
//     - Leaf 1.1
//     - Leaf 1.2
//   + Node 2
//     - Leaf 2.1