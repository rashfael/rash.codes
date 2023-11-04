// https://vitepress.dev/guide/custom-theme
import Layout from './Layout.vue'
import type { Theme } from 'vitepress'

import '@fontsource/roboto'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import "@fontsource/share-tech-mono"

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faLink, faLocationDot } from '@fortawesome/free-solid-svg-icons'

import CV from './components/CV.vue'
import LandingPage from './components/LandingPage.vue'
import './style.sass'

library.add(faGithub, faLinkedin, faEnvelope, faLink, faLocationDot)

export default {
  Layout,
  enhanceApp({ app, router, siteData }) {
    app.component('CV', CV)
    app.component('LandingPage', LandingPage)
    app.component('icon', FontAwesomeIcon)
  }
} satisfies Theme

