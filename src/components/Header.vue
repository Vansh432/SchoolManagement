<template>
  <div class="section-with-video">
    <!-- Background Video -->
    <video autoplay muted loop class="background-video">
      <source src='../assets/videos/videos.mp4' type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <!-- Overlay Content -->
    <div class="content-overlay">
      <h1 data-aos="fade-up">Welcome to Our Event</h1>
      <p data-aos="fade-up">Join us for an amazing experience with lots of exciting activities and sessions.</p>
      <a href="#" class="cta-btn" data-aos="fade-up">Learn More</a>
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
  padding: 20px; /* Add padding for smaller screens */
}

.content-overlay h1 {
  font-size: 4rem; /* Default font size for larger screens */
  margin-bottom: 20px;
  font-family: system-ui;
}

.content-overlay p {
  font-size: 1.2rem; /* Default paragraph size for larger screens */
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
  font-size: 1.2rem; /* Default button size for larger screens */
  transition: background-color 0.3s ease;
  letter-spacing: 1px;
  font-family: sans-serif;
}

.cta-btn:hover {
  background-color: #f56014;
}

/* Responsive Styles */
@media (max-width: 1200px) {
  .content-overlay h1 {
    font-size: 3rem; /* Adjust for medium screens */
  }

  .content-overlay p {
    font-size: 1rem; /* Adjust paragraph size */
  }

  .cta-btn {
    font-size: 1rem; /* Adjust button size */
  }
}

@media (max-width: 768px) {
  .content-overlay h1 {
    font-size: 2.5rem; /* Smaller size for smaller screens */
  }

  .content-overlay p {
    font-size: 0.9rem; /* Smaller paragraph size */
  }

  .cta-btn {
    font-size: 0.9rem; /* Smaller button size */
    padding: 8px 16px; /* Adjust padding */
  }
}

@media (max-width: 480px) {
  .content-overlay h1 {
    font-size: 2rem; /* Further reduce header size */
  }

  .content-overlay p {
    font-size: 0.8rem; /* Further reduce paragraph size */
  }

  .cta-btn {
    font-size: 0.8rem; /* Further reduce button size */
    padding: 6px 12px; /* Adjust padding for smaller devices */
  }
}
</style>
