// plugins/ionic.js
import { createApp } from 'vue';
import { IonicVue } from '@ionic/vue';
import '@ionic/vue/css/core.css';
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

// Optional CSS utils that can be commented out
import '@ionic/vue/css/ionic.bundle.css';

// Create the app instance and use Ionic
export default defineNuxtPlugin((nuxtApp) => {
    const app = createApp({});
    app.use(IonicVue);
    nuxtApp.vueApp.use(IonicVue);
});
