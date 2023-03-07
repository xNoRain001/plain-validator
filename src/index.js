import Rule from "./rule"

class Validator {
  constructor () {
    this.rules = new Rule()
  }

  define (name, handler) {
    this.rules.add(name, handler)
  }

  validate (name, v) {
    const handler = this.rules.get(name)

    if (!handler) {
      throw `${ name} rule does not exist.`
    }

    return handler(v)
  }
}

export default Validator
