<template>
    <div class="section-with-video">
      <!-- Background Video -->
      <video autoplay muted loop class="background-video">
        <source src='../assets/videos/videos.mp4' type="video/mp4" />
        Your browser does not support the video tag.
      </video>
  
      <!-- Overlay Content -->
      <div class="content-overlay">
        <h1  data-aos="fade-up">Welcome to Our Event</h1>
        <p  data-aos="fade-up">Join us for an amazing experience with lots of exciting activities and sessions.</p>
        <a href="#" class="cta-btn"  data-aos="fade-up">Learn More</a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'VideoSection',
  };
  </script>
  
  <style scoped>
  .section-with-video {
    position: relative;
    height: 100vh; /* Full screen height */
    width: 100%;
    overflow: hidden;
  }
  
  /* Adding gradient overlay */
  .section-with-video::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)); /* Gradient */
    z-index: 0; /* Ensures the gradient is above the video but behind the content */
  }
  
  .background-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1; /* Ensure the video is behind the overlay */
  }
  
  .content-overlay {
    position: relative;
    z-index: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
  }
  
  .content-overlay h1 {
    font-size: 68px;
    margin-bottom: 20px;
    font-family: system-ui;
  }
  
  .content-overlay p {
    font-size: 18px;
    max-width: 600px;
    margin-bottom: 30px;
    text-shadow: 0 0 10px #000;
    letter-spacing: 1px;
    font-family: sans-serif;
  }
  
  .cta-btn {
    background-color: #f47c3c;
    padding: 10px 20px;
    color: white;
    border-radius: 5px;
    text-decoration: none;
    font-size: 18px;
    transition: background-color 0.3s ease;
    
    letter-spacing: 1px;
    font-family: sans-serif;
  }
  
  .cta-btn:hover {
    background-color: #f56014;
  }
  </style>
  