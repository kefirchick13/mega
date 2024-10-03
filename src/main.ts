import { createApp } from 'vue'
import './app/styles/style.css'
import './app/styles/colors.css'
import '@/app/styles/quasar.css'
import App from './App.vue'
import { router } from './app/router/router'

import { Quasar } from 'quasar'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/material-icons-outlined/material-icons-outlined.css'
import '@quasar/extras/material-icons-round/material-icons-round.css'
import '@quasar/extras/material-icons-sharp/material-icons-sharp.css'

// Import Quasar css
import 'quasar/dist/quasar.css'

const app = createApp(App)

app.use(router)
app.use(Quasar, {})
app.mount('#app')
