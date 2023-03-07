## Introduction

Customize validator.

## Start

```
npm install -D plain-validator
```

## Example

```js
// rules.js
import Validator from 'plain-validator'

const validator = new Validator()

validator.define('foo', v => v === 'foo')

export default validator
```

```js
// validate.js
import validator from './rules.js'

validator.validate('foo', 'foo') // -> true
validator.validate('foo', 'bar') // -> false

// or
validator.isFoo('foo') // -> true
```

## Built-in Rules

  - email

  - date

  - phoneNumber

### Use 

```js
validator.validate('email', 'foo@bar.com') // -> true

// or
validator.isEmail('foo@bar.com')
```

### Rewrite

```js
validator.define('email', () => {})
```



  
