import { createApp } from './vendor/vue.esm-browser.js';

let increase;
createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increaseCounter() {
      this.counter++;
    },
  },
}).mount('#app');
