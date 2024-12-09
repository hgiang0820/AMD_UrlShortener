<template>
  <div class="signin-container">
    <h1>Sign In</h1>

    <!-- Sign In Form -->
    <form @submit.prevent="handleSignIn">
      <div>
        <label for="email">Email</label>
        <input v-model="email" type="email" id="email" placeholder="Enter your email" required />
      </div>

      <div>
        <label for="password">Password</label>
        <input v-model="password" type="password" id="password" placeholder="Enter your password" required />
      </div>

      <button type="submit">Sign In</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'SignIn',
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      // Handle Sign In
      handleSignIn() {
        // Simulate login logic
        if (this.email && this.password) {
          localStorage.setItem('userLoggedIn', 'true'); // Store a flag in localStorage to simulate login

          // Emit the event to notify the parent component that login was successful
          this.$emit('login-success');
        } else {
          alert('Please enter valid email and password');
        }
      }
    }
  };
</script>

<style scoped>
  /* Sign In Form Styles */
  .signin-container {
    text-align: center;
    padding: 20px;
  }

  form {
    display: inline-block;
    text-align: left;
    max-width: 300px;
    margin-bottom: 20px;
  }

    form div {
      margin: 10px 0;
    }

  button {
    padding: 10px 20px;
    margin-top: 10px;
    background-color: #333548;
    color: white;
    border: none;
    border-radius: 4px;
  }

    button[type="submit"] {
      width: 100%;
    }

    button:hover {
      background-color: #555;
    }
</style>
