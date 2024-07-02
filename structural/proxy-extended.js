class IBox {
	square() {}
	volume() {}
}

class Box extends IBox {
  constructor(a, b, c) {
    super()
    this.a = a
    this.b = b
    this.c = c
  }
	square() {
		return this.a * this.b
	}
	volume() {
		return this.a * this.b * this.c
	}
}

class BoxProxy extends IBox {
  constructor(a, b, c) {
    super()
    this.box = new Box(a, b, c)
  }
	square() {
		return this.box.square()
	}
	volume() {
		return this.box.volume()
	}
}

const box = new BoxProxy(2, 3, 5)
console.log(box.square()) // 6
console.log(box.volume()) // 30
