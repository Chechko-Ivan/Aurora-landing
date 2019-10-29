import { EMAIL_REGEX } from '~/assets/js/constants.js'

const validateEmail = (email) => {
  return EMAIL_REGEX.test(String(email).toLowerCase())
}

export default validateEmail
