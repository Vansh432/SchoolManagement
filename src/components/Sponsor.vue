<template>
    <div class="sponsors-container">
      <h1 class="title">Our Sponsors</h1>
      <div v-if="sponsors.length === 0" class="no-sponsors">
        <p>No sponsors available.</p>
      </div>
      <div class="sponsors-list">
        <div
          class="sponsor-card"
          v-for="sponsor in sponsors"
          :key="sponsor.id"
        >
          <img
            :src="`${baseUrl}${sponsor.image}`"
            :alt="'Sponsor ' + sponsor.id"
            class="sponsor-image"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  
  export default {
    setup() {
      const sponsors = ref([]);
      const baseUrl = 'https://growlotusfintech.in/school-app-backend-main/public/';
  
      const fetchSponsors = async () => {
        try {
          const response = await fetch('https://growlotusfintech.in/school-app-backend-main/api/getall');
          const data = await response.json();
          if (data.success) {
            sponsors.value = data.data;
          } else {
            console.error('Failed to fetch sponsors');
          }
        } catch (error) {
          console.error('Error fetching sponsors:', error);
        }
      };
  
      onMounted(fetchSponsors);
  
      return {
        sponsors,
        baseUrl,
      };
    },
  };
  </script>
  
  <style scoped>
  .sponsors-container {
    padding:130px 20px;
    background-color: #000000;

    color: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    
    margin: 0 auto; /* Center the container */
  }
  
  .title {
    text-align: center;
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .no-sponsors {
    text-align: center;
    font-style: italic;
    color: #999;
  }
  
  .sponsors-list {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); /* Adjust min size for responsiveness */
  }
  
  .sponsor-card {
    background-color: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;
  }
  
  .sponsor-card:hover {
    transform: scale(1.02);
  }
  
  .sponsor-image {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover; /* Maintain aspect ratio */
  }
  </style>
  