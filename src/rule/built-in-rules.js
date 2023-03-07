const regexpList = {
  date: /^[1-2][0-9][0-9][0-9]-[0-1]{0,1}[0-9]-[0-3]{0,1}[0-9]$/,
  email: /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/,
  phoneNumber: /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/,
}

const buildInRules = {
  email (v) {
    return regexpList.email.test(v)
  },

  phoneNumber (v) {
    return regexpList.phoneNumber.test(v)
  },

  date (v) {
    return regexpList.date.test(v)
  }
}

export default buildInRules
