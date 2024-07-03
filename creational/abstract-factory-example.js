const ABSTRACT_METHOD_ERR = 'Method must be implemented in subclasses'

class UIFactory {
  createButton() {
    throw new Error(ABSTRACT_METHOD_ERR)
  }
  
  createInput() {
    throw new Error(ABSTRACT_METHOD_ERR)
  }
}

class MaterialUIFactory extends UIFactory {
  createButton() {
    return new MaterialButton()
  }

  createInput() {
    return new MaterialInput()
  }
}

class IOSUIFactory extends UIFactory {
  createButton() {
    return new IOSButton()
  }

  createInput() {
    return new IOSInput()
  }
}

class Button {
  render() {
    throw new Error(ABSTRACT_METHOD_ERR)
  }
}

class MaterialButton extends Button {
  render() {
    return 'Rendering: Button: Material Design'
  }
}

class IOSButton extends Button {
  render() {
    return 'Rendering: Button: iOS'
  }
}

class Input {
  render() {
    throw new Error(ABSTRACT_METHOD_ERR)
  }
}

class MaterialInput extends Input {
  render() {
    return 'Rendering: Input: Material Design'
  }
}

class IOSInput extends Input {
  render() {
    return 'Rendering: Input: iOS'
  }
}

function createUI(factory) {
  const button = factory.createButton()
  const input = factory.createInput()

  return { button, input }
}

const materialUI = createUI(new MaterialUIFactory())
console.log(materialUI.button.render()) // Rendering: Button: Material Design
console.log(materialUI.input.render()) // Rendering: Input: Material Design

const iosUI = createUI(new IOSUIFactory())
console.log(iosUI.button.render()) // Rendering: Button: iOS
console.log(iosUI.input.render()) // Rendering: Input: iOS