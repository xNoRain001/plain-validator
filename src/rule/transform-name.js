 // email -> isEmail
const transformName  = name => {
  return `is${ name[0].toUpperCase() }${ name.slice(1) }`
}

export default transformName
