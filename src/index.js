import Rule from "./rule"
import buildInRules from "./rule/built-in-rules"
import transformName from "./rule/transform-name"

class Validator {
  constructor () {
    this.rules = new Rule()
  }

  define (name, handler) {
    const _name = transformName(name)
    Validator.prototype[_name] = handler

    this.rules.add(name, handler)
  }

  validate (name, v) {
    const handler = this.rules.get(name)

    if (!handler) {
      throw `${ name } rule does not exist.`
    }

    return handler(v)
  }
}

// build-in rules alias
const names = Object.keys(buildInRules)
const proto = Validator.prototype

for (let i = 0, l = names.length; i < l; i++) {
  let name = names[i]
  const handler = buildInRules[name]

  name = transformName(name)
  proto[name] = handler
}

export default Validator
