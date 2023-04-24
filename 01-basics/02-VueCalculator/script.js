import { createApp } from './vendor/vue.esm-browser.js';

createApp({
  data() {
    return {
      a: 0,
      b: 0,
      operation: '',
    };
  },
  computed: {
    resultOfOperation() {
      switch (this.operation) {
        case 'plus':
          return this.a + this.b;
        case 'minus':
          return this.a - this.b;
        case 'multiply':
          return this.a * this.b;
        case 'divide':
          return this.a / this.b;
      }
    },
  },
}).mount('#app');
