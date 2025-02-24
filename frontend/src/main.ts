import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import './style.css'
import App from './App.vue'
import FrappeUI from 'frappe-ui'
import 'frappe-ui/dist/frappe-ui.css'

// SurveyJS styles
import 'survey-core/defaultV2.min.css'
import 'survey-creator-core/survey-creator-core.min.css'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(FrappeUI)
app.mount('#app')