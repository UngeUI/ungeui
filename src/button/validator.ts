export const buttonProps = {
  type: {
    type: String,
    default: 'default',
    validator(value) {
      return ['default', 'success', 'danger', 'warning', 'info'].includes(value)
    },
  },
  deep: {
    type: Boolean,
    default: false,
    validator(value) {
      return typeof value == 'boolean'
    },
  },
  dashed: {
    type: Boolean,
    default: false,
    validator(value) {
      return typeof value == 'boolean'
    },
  },
  size: {
    type: String,
    default: 'medium',
    validator(value) {
      return ['small', 'medium', 'large', 'huge'].includes(value)
    },
  },
  text: {
    type: Boolean,
    validator(value) {
      return typeof value == 'boolean'
    },
  },
  onClick: {
    type: Function,
  },
  disabled: {
    type: Boolean,
    default: false,
    validator(value) {
      return typeof value == 'boolean'
    },
  },
  icon: {
    type: String,
  },
  round: {
    type: Boolean,
    default: false,
    validator(value) {
      return typeof value == 'boolean'
    },
  },
  prefix: {
    type: String,
  },
  suffix: {
    type: String,
  },
}

export default buttonProps
