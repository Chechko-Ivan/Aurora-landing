import AOS from 'aos'
import 'aos/dist/aos.css'

export default ({ app }) => {
  app.AOS = new AOS.init({ disable: 'mobile', once: true, duration: 1100 }) // eslint-disable-line new-cap
}
