import { createApp } from 'vue'
import App from './App.vue'
import DevUI from 'vue-devui';
import 'vue-devui/style.css';
import '@devui-design/icons/icomoon/devui-icon.css';
import { ThemeServiceInit, infinityTheme } from 'devui-theme';
import { createPinia } from 'pinia'
const pinia = createPinia()

ThemeServiceInit({ infinityTheme }, 'infinityTheme');
createApp(App).use(DevUI).use(pinia).mount('#app')
