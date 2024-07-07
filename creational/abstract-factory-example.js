const ABSTRACT_METHOD_ERR = 'This method should be overridden'

class UIFactory {
  createButton() {
    throw new Error(ABSTRACT_METHOD_ERR)
  }

  createInput() {
    throw new Error(ABSTRACT_METHOD_ERR)
  }
}

class MaterialUIFactory extends UIFactory {
  static name = 'Material Design'

  createButton() {
    return new MaterialButton(this.constructor.name)
  }

  createInput() {
    return new MaterialInput(this.constructor.name)
  }
}

class IOSUIFactory extends UIFactory {
  static name = 'iOS'

  createButton() {
    return new IOSButton(this.constructor.name)
  }

  createInput() {
    return new IOSInput(this.constructor.name)
  }
}

class Button {
  static name = 'Button'

  constructor(type) {
    this.type = type
  }

  render() {
    throw new Error(ABSTRACT_METHOD_ERR)
  }
}

class MaterialButton extends Button {
  render() {
    return `Rendering: ${super.constructor.name} (${this.type})`
  }
}

class IOSButton extends Button {
  render() {
    return `Rendering: ${super.constructor.name} (${this.type})`
  }
}

class Input {
  static name = 'Input'

  constructor(type) {
    this.type = type
  }

  render() {
    throw new Error(ABSTRACT_METHOD_ERR)
  }
}

class MaterialInput extends Input {
  render() {
    return `Rendering: ${super.constructor.name} (${this.type})`
  }
}

class IOSInput extends Input {
  render() {
    return `Rendering: ${super.constructor.name} (${this.type})`
  }
}

function createUI(factory) {
  const button = factory.createButton()
  const input = factory.createInput()

  return { button, input }
}

const materialUI = createUI(new MaterialUIFactory())
console.log(materialUI.button.render()) // Rendering: Button (Material Design)
console.log(materialUI.input.render()) // Rendering: Input (Material Design)

const iosUI = createUI(new IOSUIFactory())
console.log(iosUI.button.render()) // Rendering: Button (iOS)
console.log(iosUI.input.render()) // Rendering: Input (iOS)