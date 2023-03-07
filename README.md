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

validator.define('mustBeANumber', v => typeof v === 'number')

export default validator
```

```js
// validate.js
import validator from './rules.js'

validator.validate('mustBeANumber', 1) // -> true
```

## Built-in Rules

  - email

  - date

  - phoneNumber

### Use 

```js
validator.validate('email', 'foo@bar.com') // -> true
```

### Rewrite

```js
validator.define('email', () => {})
```



  
