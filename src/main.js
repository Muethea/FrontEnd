import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faUsers,
  faInfinity,
  faLightbulb,
  faComments,
  faCirclePlay,
  faArrowPointer,
  faPenNib,
  faNoteSticky,
  faShapes,
  faUpload,
  faSquare,
  faSquarePlus,
  faPhone,
  faVideo,
  faShare,
  faCircleXmark,
  
} from '@fortawesome/free-solid-svg-icons'

import{


  
  
} from '@fortawesome/free-regular-svg-icons'
library.add(
  faUsers,
  faInfinity,
  faLightbulb,
  faComments,
  faCirclePlay,
  faArrowPointer,
  faPenNib,
  faNoteSticky,
  faShapes,
  faUpload,
  faSquarePlus,
  faPhone,
  faVideo,
  faShare,
  faCircleXmark
)

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
app.component('font-awesome-icon', FontAwesomeIcon)
