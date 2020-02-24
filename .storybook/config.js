import { configure, addDecorator } from '@storybook/vue';

// Import Vue plugins
import Vue from 'vue';
import Vuex from 'vuex';
import Vuetify from "vuetify";
import 'vuetify/dist/vuetify.min.css';

// Install Vue plugins.
Vue.use(Vuex);
Vue.use(Vuetify);

// Import your global components.
import ChatBubble from '../components/chat-bubble/ChatBubble';
// Register global components.
Vue.component('chat-bubble', ChatBubble);

const vuetifyConfig = new Vuetify({
  theme: {
    dark: true
  }
})

// Ensures every story is wrapped in a v-app tag
addDecorator(() => ({
  vuetify: vuetifyConfig,
  template: '<v-app><v-content><story/></v-content></v-app>',
}));

// Find stories in component folders
configure(require.context('../components', true, /\.stories\.js$/), module);
