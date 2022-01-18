import { createApp } from 'vue';

import App from './App.vue';
import BaseModal from './components/BaseModal.vue';
import router from './router.js';

const app = createApp(App);

app.component('base-modal', BaseModal);

app.use(router);

// to make router is ready to give perfect router animation
router.isReady().then(() => {
  app.mount('#app');
});

