const validators = {
  required: {
    check: value => !value,
    defaultValue: 'Required'
  },
  email: {
    check: value => !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value),
    defaultValue: 'Invalid email address'
  },
  equal: {
    check: (value, values, args) => value !== values[args[0]],
    defaultValue: 'Passwords mast be equals'
  },
  minLength: {
    check: (value, values, args) => !value || value.length < Number(args[0]),
    defaultValue: 'Length must be longer'
  }
}

export default config => values => (
  Object.keys(config).reduce((errors, item) => {
    config[item].forEach(([validator, message, customCheck]) => {
      const args = validator.split(':')
      const name = args.shift()
      if (validator === 'custom' && customCheck(values[item], values, args)) {
        errors[item] = message || ''
      }
      if (validators[name] && validators[name].check(values[item], values, args)) {
        errors[item] = message || validators[name].defaultValue
      }
    })
    return errors
  }, {})
)
