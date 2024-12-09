<template>
  <div class="app">
    <!-- Navbar or Header can go here -->
    <!-- SignIn Component: It will emit the login-success event when the user successfully signs in -->
    <sign-in @login-success="showContent = true"></sign-in> <!-- Listening for the login-success event -->
    <!-- Content Section: Visible only after the user has signed in -->
    <div v-if="showContent">
      <h2>Welcome to the URL Shortener</h2>

      <!-- URL Shortening Form -->
      <div class="about-box">
        <h3>Enter URL to shorten</h3>
        <input v-model="originalUrl" type="text" placeholder="Enter URL to shorten" />
        <button @click="handleShortenUrl">Shorten</button>
        <button @click="clearInput">Clear</button>
        <div v-if="shortUrl">
          <a :href="shortUrl" target="_blank">{{ shortUrl }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import SignIn from './views/Signin.vue'; // Import SignIn component

  export default {
    name: 'App',
    components: {
      SignIn, // Register the SignIn component
    },
    data() {
      return {
        showContent: false,  // Flag to control visibility of the content section
        originalUrl: '',     // Stores the URL entered by the user
        shortUrl: null,      // Stores the shortened URL
      };
    },
    methods: {
      // Handle URL shortening logic
      handleShortenUrl() {
        if (!this.originalUrl) {
          alert("Please enter a URL");
          return;
        }
        // Simulating URL shortening, replace with actual logic (API call)
        this.shortUrl = `https://short.ly/${this.originalUrl.slice(0, 6)}`;
      },

      // Clear the input and shortened URL
      clearInput() {
        this.originalUrl = '';
        this.shortUrl = null;
      },
    },
  };
</script>

<style scoped>
  /* General Styles */
  .app {
    text-align: center;
    padding: 20px;
  }

  /* Content Section (URL Shortener) */
  .about-box {
    margin-top: 20px;
  }

  .input-box {
    padding: 12px 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
    box-sizing: border-box;
  }

  .shortened-url {
    margin-top: 10px;
  }

  .shortened-link {
    color: #007bff;
    text-decoration: none;
  }
</style>
