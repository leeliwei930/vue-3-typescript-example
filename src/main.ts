import { createApp } from 'vue';
import App from './App.vue';
import './index.css';

import { Profile } from './interfaces/User';

const profile : Profile = {
  avatar: '', email: '', firstname: '', id: '', lastname: '',

};
createApp(App).mount('#app');
