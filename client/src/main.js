import { createApp } from 'vue';  // Import `createApp` from Vue 3
import App from './App.vue';  // Import the main App component
import router from './router';  // Import the router configuration

// Create the Vue app, use Vue Router, and mount to the #app element
createApp(App)
  .use(router)  // Use Vue Router for navigation
  .mount('#app');  // Mount the app to the #app element in index.html
