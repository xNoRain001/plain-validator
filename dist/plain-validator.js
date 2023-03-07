function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}

var regexpList = {
  date: /^[1-2][0-9][0-9][0-9]-[0-1]{0,1}[0-9]-[0-3]{0,1}[0-9]$/,
  email: /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/,
  phoneNumber: /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/
};
var buildInRules = {
  email: function email(v) {
    return regexpList.email.test(v);
  },
  phoneNumber: function phoneNumber(v) {
    return regexpList.phoneNumber.test(v);
  },
  date: function date(v) {
    return regexpList.date.test(v);
  }
};

var Rule = /*#__PURE__*/function () {
  function Rule() {
    _classCallCheck(this, Rule);
    this.rules = buildInRules;
  }
  _createClass(Rule, [{
    key: "add",
    value: function add(name, handler) {
      this.rules[name] = handler;
    }
  }, {
    key: "get",
    value: function get(name) {
      return this.rules[name];
    }
  }]);
  return Rule;
}();

var Validator = /*#__PURE__*/function () {
  function Validator() {
    _classCallCheck(this, Validator);
    this.rules = new Rule();
  }
  _createClass(Validator, [{
    key: "define",
    value: function define(name, handler) {
      this.rules.add(name, handler);
    }
  }, {
    key: "validate",
    value: function validate(name, v) {
      var handler = this.rules.get(name);
      if (!handler) {
        throw "".concat(name, " rule does not exist.");
      }
      return handler(v);
    }
  }]);
  return Validator;
}();

export { Validator as default };
