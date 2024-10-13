<template>
    <div class="boroughs-container">
      <div class="borough top-left">
        <h2  @click="openRegion('brooklyn')"> BROOKLYN</h2>
    </div>
      <div class="borough top-right">
        <h2 @click="openRegion('manhattan')">MANHATTAN </h2></div>
      <div class="borough center" > <h2 @click="openRegion('staten-island')">STATEN ISLAND</h2></div>
      <div class="borough bottom-left"> <h2 @click="openRegion('queens')">QUEENS </h2></div>
      <div class="borough bottom-right"><h2 @click="openRegion('bronx')">BRONX </h2></div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    name: "NavbarEvents",
    data() {
      return {
        schools: [], // Holds the schools fetched from the API
        filteredSchools: [], // Holds the filtered schools based on selected region
        selectedDistrict: [],
        isScrolled: false,
        setState:''
      };
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll); // Add scroll event listener
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.handleScroll); // Clean up event listener
    },
    methods: {
      setActiveNav(index) {
        this.activeNavIndex = index;
      },
      setActiveEvent(index) {
        this.activeEventIndex = index;
      },
      openFullScreen() {
        this.isFullScreen = true;
      },
      closeFullScreen() {
        this.isFullScreen = false;
      },
      async openRegion(region) {
        this.isFullScreen = false;
        this.currentRegion = region;
        this.isDistrictScreenVisible = true;
  
        // Fetch schools based on the current region
     
        this.$router.push({ 
    path: '/districtlist', 
    query: { schools: JSON.stringify(region) }
  });
      },
      async opendistrict(region) {
        this.isFullScreen = false;
        this.currentRegion = region;
        this.isDistrictScreenVisible = true;
  
        // Fetch schools based on the current region
        await this.fetchSchools(region);
      },
      closeDistrictScreen() {
        this.isDistrictScreenVisible = false;
        this.filteredSchools = []; // Clear filtered schools when closing the district screen
      },
      handleScroll() {
        this.isScrolled = window.scrollY > 50; // Check if scroll position is greater than 50px
      },
      async fetchSchools(region) {
    console.log(region);
    try {
      const response = await axios.get(`https://growlotusfintech.in/school-app-backend-main/api/schools`);
      
      // Ensure you're accessing the right structure in the API response
      this.schools = response.data || []; // Adjust according to your response structure
      console.log("All Schools:", this.schools);
      
      // Check if the region matches the school.city property
      this.filteredSchools = this.schools.filter(school => {
         
  
                 
            if(school.city.toLowerCase() === region ){
            
           return school
            }
          });
  
    
      console.log("Selected District:", this.selectedDistrict); // Check the selected district

      console.log("Filtered Schools:", this.filteredSchools); // Check the filtered schools
    } catch (error) {
      console.error("Error fetching schools:", error);
    }
      }
    }
  };
  </script>
  
  
  <style scoped>
  .boroughs-container {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    height: 100vh;
    background-color: rgb(0, 0, 0);
    color: white;
    text-align: center;
    font-size: 2em;
    padding-top: 100px;
  }
  
  .borough h2{
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  
  .top-left {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
  }
  
  .top-right {
    grid-row: 1 / 2;
    grid-column: 3 / 4;
  }
  
  .center {
    grid-row: 2 / 3;
    grid-column: 2 / 3;
  }
  
  .bottom-left {
    grid-row: 3 / 4;
    grid-column: 1 / 2;
  }
  
  .bottom-right {
    grid-row: 3 / 4;
    grid-column: 3 / 4;
  }
  </style>
  