import buildInRules from "./built-in-rules"

class Rule {
  constructor () {
    this.rules = buildInRules
  }

  add (name, handler) {
    this.rules[name] = handler
  }

  get (name) {
    return this.rules[name]
  }
}

export default Rule
