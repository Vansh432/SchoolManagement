<template>
    <div class="social-media-icons">
      <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
      <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
      <a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
      <a href="#" aria-label="Facebook"><i class="fab fa-facebook"></i></a>

    </div>
  </template>
  
  <script>
  export default {
    name: 'SocialMediaIcons'
  };
  </script>
  
  <style scoped>
  .social-media-icons {
    display: flex;
    gap: 40px;
  }
  
  .social-media-icons a {
    color: #fff;
    font-size: 20px;
    text-decoration: none;
  }
  
  .social-media-icons a:hover {
    color: #555; 
  }
  </style>
  