<template>
    <div>
      <!-- Header Component Only for Home Page -->
      <Header />
      <Aboutus/>
      <div class="home-content">
     
      </div>
    </div>
  </template>
  
  <script>
  import Header from './Header.vue'; // Import your header component
  
import Aboutus from './Aboutus.vue';
  export default {
    name: 'Home',
    components: {
      Header,
      Aboutus // Register the header component
    },
  };
  </script>
  
  <style scoped>
  .home-content {
    padding: 60px;

  }
  </style>
  